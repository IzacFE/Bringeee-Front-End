import React, { useContext, useEffect, useState } from "react";
import styles from "./AdminReport.module.css";
import { Button, Table } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { RoleContext, TokenContext } from "../../App";
import axios from "axios";
import LoadSpin from "../../components/loadSpin/LoadSpin";

function AdminReport() {
  const { tokenCtx } = useContext(TokenContext);
  const { roleCtx } = useContext(RoleContext);
  const navigate = useNavigate();
  const [isReady, setIsReady] = useState(false);

  const [ordersCount, setOrdersCount] = useState({});
  const [driversCount, setDriversCount] = useState({});
  const [truckTypCount, setTruckTypCount] = useState({});
  const [customerCount, setCustomersCount] = useState({});
  const [stats, setStats] = useState({});
  const [report, setReport] = useState({});

  useEffect(() => {
    if (roleCtx === "admin") {
      fetchOrders();
      fetchDrivers();
      fetchTruckTyp();
      fetchCustomers();
      fetchStats();
    } else if (roleCtx === "driver") {
      navigate("/home");
    } else if (roleCtx === "customer") {
      navigate("/profile");
    } else {
      navigate("/");
    }
  }, [tokenCtx]);

  const fetchOrders = async () => {
    await axios
      .get(`https://aws.wildani.tech/api/stats/aggregates/order_count`, {
        headers: {
          Authorization: `Bearer ${tokenCtx}`,
        },
      })
      .then((response) => {
        setOrdersCount(response.data.data);
        console.log(response.data.data);
      })
      .catch((err) => {
        console.log("error");
      });
  };

  const fetchDrivers = async () => {
    await axios
      .get(`https://aws.wildani.tech/api/stats/aggregates/drivers_count`, {
        headers: {
          Authorization: `Bearer ${tokenCtx}`,
        },
      })
      .then((response) => {
        setDriversCount(response.data.data);
        console.log(response.data.data);
      })
      .catch((err) => {
        console.log("error");
      });
  };

  const fetchTruckTyp = async () => {
    await axios
      .get(`https://aws.wildani.tech/api/stats/aggregates/truck_types_count`, {
        headers: {
          Authorization: `Bearer ${tokenCtx}`,
        },
      })
      .then((response) => {
        setTruckTypCount(response.data.data);
        console.log(response.data.data);
      })
      .catch((err) => {
        console.log("error");
      });
  };

  const fetchCustomers = async () => {
    await axios
      .get(`https://aws.wildani.tech/api/stats/aggregates/customer_count`, {
        headers: {
          Authorization: `Bearer ${tokenCtx}`,
        },
      })
      .then((response) => {
        setCustomersCount(response.data.data);
        console.log(response.data.data);
      })
      .catch((err) => {
        console.log("error");
      });
  };

  const fetchStats = async () => {
    await axios
      .get(`https://aws.wildani.tech/api/stats/orders?periodDay=31`, {
        headers: {
          Authorization: `Bearer ${tokenCtx}`,
        },
      })
      .then((response) => {
        setStats(response.data.data);
        console.log(response.data.data);
      })
      .catch((err) => {
        console.log("error");
      })
      .finally(() => setIsReady(true));
  };

  const getReport = async () => {
    setIsReady(false);
    await axios
      .post(
        `https://aws.wildani.tech/api/export/orders`,
        {},
        {
          headers: {
            Authorization: `Bearer ${tokenCtx}`,
          },
        }
      )
      .then((response) => {
        setReport(response.data.data);
        console.log(response.data.data);
      })
      .catch((err) => {
        console.log("error");
      })
      .finally(() => setIsReady(true));
  };

  let result;
  if (isReady) {
    result = (
      <div className={`${styles.page} container mx-auto p-4`}>
        <Table striped className="w-full md:w-1/2">
          <tbody>
            <tr>
              <td>Total Jumlah Driver</td>
              <td>{driversCount.total}</td>
            </tr>
            <tr>
              <td>Total Jumlah Type Kendaraan</td>
              <td>{truckTypCount.total}</td>
            </tr>
            {/* <tr>
              <td>Jumlah Ongoing Order</td>
              <td>57 Order</td>
            </tr>
            <tr>
              <td>Jumlah Order Selesai</td>
              <td>215 Order</td>
            </tr>
            <tr>
              <td>Jumlah Driver</td>
              <td>437 Driver</td>
            </tr>
            <tr>
              <td>Jumlah Customer</td>
              <td>639 Customer</td>
            </tr> */}
          </tbody>
          <Button
            className="bg-amber-500 hover:bg-amber-400 mt-8"
            onClick={() => {
              getReport();
            }}
          >
            Download Report
          </Button>
        </Table>
      </div>
    );
  } else {
    result = <LoadSpin />;
  }

  return <>{result}</>;
}

export default AdminReport;
