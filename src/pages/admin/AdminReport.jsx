import React, { useContext, useEffect, useState } from "react";
import styles from "./AdminReport.module.css";
import { RoleContext, TokenContext } from "../../App";
import axios from "axios";
import fileDownload from "js-file-download";

import { Button, Table } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import LoadSpin from "../../components/loadSpin/LoadSpin";
import BarChart from "../../components/barChart/BarChart";

function AdminReport() {
  const { tokenCtx } = useContext(TokenContext);
  const { roleCtx } = useContext(RoleContext);
  const navigate = useNavigate();
  const [isReady, setIsReady] = useState(false);

  const [customerCount, setCustomersCount] = useState({});
  const [driversCount, setDriversCount] = useState({});
  const [driversIdle, setDriversIdle] = useState({});
  const [ordersReq, setOrdersReq] = useState({});
  const [orderCustReq, setOrdersCustReq] = useState({});
  const [orderConfirmed, setOrdersConfirmed] = useState({});
  const [orderManifested, setOrdersManifested] = useState({});
  const [orderOnProcess, setOrdersOnProcess] = useState({});
  const [orderDelivered, setOrdersDelivered] = useState({});
  const [orderCancelled, setOrdersCancelled] = useState({});
  const [driversBusy, setDriversBusy] = useState({});
  const [stats, setStats] = useState({});
  const [report, setReport] = useState({});

  useEffect(() => {
    if (roleCtx === "admin") {
      fetchCustomers();
      fetchDrivers();
      fetchDriversIdle();
      fetchDriversBusy();
      fetchOrdersReq();
      fetchOrdersCustReq();
      fetchOrdersConfirmed();
      fetchOrdersManifested();
      fetchOrdersOnProcess();
      fetchOrdersDelivered();
      fetchOrdersCancelled();
      fetchStats();
    } else if (roleCtx === "driver") {
      navigate("/home");
    } else if (roleCtx === "customer") {
      navigate("/profile");
    } else {
      navigate("/");
    }
  }, [tokenCtx]);

  const fetchCustomers = async () => {
    await axios
      .get(`https://aws.wildani.tech/api/stats/aggregates/customers_count`, {
        headers: {
          Authorization: `Bearer ${tokenCtx}`,
        },
      })
      .then((response) => {
        setCustomersCount(response.data.data);
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
      })
      .catch((err) => {
        console.log("error");
      });
  };

  const fetchDriversIdle = async () => {
    await axios
      .get(
        `https://aws.wildani.tech/api/stats/aggregates/drivers_count?status=IDLE`,
        {
          headers: {
            Authorization: `Bearer ${tokenCtx}`,
          },
        }
      )
      .then((response) => {
        setDriversIdle(response.data.data);
      })
      .catch((err) => {
        console.log("error");
      });
  };

  const fetchDriversBusy = async () => {
    await axios
      .get(
        `https://aws.wildani.tech/api/stats/aggregates/drivers_count?status=BUSY`,
        {
          headers: {
            Authorization: `Bearer ${tokenCtx}`,
          },
        }
      )
      .then((response) => {
        setDriversBusy(response.data.data);
      })
      .catch((err) => {
        console.log("error");
      });
  };

  const fetchOrdersReq = async () => {
    await axios
      .get(
        `https://aws.wildani.tech/api/stats/aggregates/orders_count?status=REQUESTED`,
        {
          headers: {
            Authorization: `Bearer ${tokenCtx}`,
          },
        }
      )
      .then((response) => {
        setOrdersReq(response.data.data);
      })
      .catch((err) => {
        console.log("error");
      });
  };

  const fetchOrdersCustReq = async () => {
    await axios
      .get(
        `https://aws.wildani.tech/api/stats/aggregates/orders_count?status=REQUESTED`,
        {
          headers: {
            Authorization: `Bearer ${tokenCtx}`,
          },
        }
      )
      .then((response) => {
        setOrdersCustReq(response.data.data);
      })
      .catch((err) => {
        console.log("error");
      });
  };

  const fetchOrdersConfirmed = async () => {
    await axios
      .get(
        `https://aws.wildani.tech/api/stats/aggregates/orders_count?status=CONFIRMED`,
        {
          headers: {
            Authorization: `Bearer ${tokenCtx}`,
          },
        }
      )
      .then((response) => {
        setOrdersConfirmed(response.data.data);
      })
      .catch((err) => {
        console.log("error");
      });
  };

  const fetchOrdersManifested = async () => {
    await axios
      .get(
        `https://aws.wildani.tech/api/stats/aggregates/orders_count?status=MANIFESTED`,
        {
          headers: {
            Authorization: `Bearer ${tokenCtx}`,
          },
        }
      )
      .then((response) => {
        setOrdersManifested(response.data.data);
      })
      .catch((err) => {
        console.log("error");
      });
  };

  const fetchOrdersOnProcess = async () => {
    await axios
      .get(
        `https://aws.wildani.tech/api/stats/aggregates/orders_count?status=ON_PROCESS`,
        {
          headers: {
            Authorization: `Bearer ${tokenCtx}`,
          },
        }
      )
      .then((response) => {
        setOrdersOnProcess(response.data.data);
      })
      .catch((err) => {
        console.log("error");
      });
  };

  const fetchOrdersDelivered = async () => {
    await axios
      .get(
        `https://aws.wildani.tech/api/stats/aggregates/orders_count?status=DELIVERED`,
        {
          headers: {
            Authorization: `Bearer ${tokenCtx}`,
          },
        }
      )
      .then((response) => {
        setOrdersDelivered(response.data.data);
      })
      .catch((err) => {
        console.log("error");
      });
  };

  const fetchOrdersCancelled = async () => {
    await axios
      .get(
        `https://aws.wildani.tech/api/stats/aggregates/orders_count?status=CANCELLED`,
        {
          headers: {
            Authorization: `Bearer ${tokenCtx}`,
          },
        }
      )
      .then((response) => {
        setOrdersCancelled(response.data.data);
      })
      .catch((err) => {
        console.log("error");
      });
  };

  const fetchStats = async () => {
    await axios
      .get(`https://aws.wildani.tech/api/stats/orders/10`, {
        headers: {
          Authorization: `Bearer ${tokenCtx}`,
        },
      })
      .then((response) => {
        setStats(response.data.data[0]);
      })
      .catch((err) => {
        console.log("error");
      })
      .finally(() => setIsReady(true));
  };

  const getReport = async () => {
    setIsReady(false);
    var config = {
      method: "post",
      url: "https://aws.wildani.tech/api/export/orders",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${tokenCtx}`,
      },
      data: "&month=" + 5 + "&year=" + 2022,
    };
    await axios(config)
      .then((response) => {
        fileDownload(response.data, "nama.csv");
      })
      .catch((err) => {
        console.log("error");
      })
      .finally(() => setIsReady(true));
  };

  const elements = [
    { position: "Kustomer", status: "-", jumlah: customerCount.total },
    { position: "Driver", status: "total", jumlah: driversCount.total },
    { position: "", status: "bebas", jumlah: driversIdle.total },
    { position: "", status: "sibuk", jumlah: driversBusy.total },
    {
      position: "Order",
      status: "total order",
      jumlah:
        ordersReq.total +
        orderCustReq.total +
        orderConfirmed.total +
        orderManifested.total +
        orderOnProcess.total +
        orderDelivered.total +
        orderCancelled.total,
    },
    {
      position: "",
      status: "konfirmasi admin",
      jumlah: ordersReq.total,
    },
    {
      position: "",
      status: "konfirmasi kustomer",
      jumlah: orderCustReq.total,
    },
    {
      position: "",
      status: "menunggu pembayaran",
      jumlah: orderConfirmed.total,
    },
    {
      position: "",
      status: "menunggu dipilih driver",
      jumlah: orderManifested.total,
    },
    {
      position: "",
      status: "sedang diantar",
      jumlah: orderOnProcess.total,
    },
    {
      position: "",
      status: "selesai",
      jumlah: orderDelivered.total,
    },
    {
      position: "",
      status: "tercancel",
      jumlah: orderCancelled.total,
    },
  ];

  const rows = elements.map((element, index) => (
    <tr key={element.index}>
      <td>{element.position}</td>
      <td>{element.status}</td>
      <td>{element.jumlah}</td>
    </tr>
  ));

  let result;
  if (isReady) {
    result = (
      <div className={`${styles.page} container mx-auto p-4`}>
        <Table highlightOnHover className="bg-white rounded-md">
          <thead>
            <tr>
              <th>Keterangan</th>
              <th>Status</th>
              <th>Jumlah</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
        <div className="mt-12">
          <label className="font-medium text-[17px]">Tabel order</label>
          <div className="bg-white p-6 rounded-md mt-4">
            <BarChart label={stats.label} data={stats.total_order} />
          </div>
        </div>

        <Button
          className="bg-amber-500 hover:bg-amber-400 mt-8"
          onClick={() => {
            getReport();
          }}
        >
          Download Report
        </Button>
      </div>
    );
  } else {
    result = <LoadSpin />;
  }

  return <>{result}</>;
}

export default AdminReport;
