import React, { useContext, useEffect, useState } from "react";
import styles from "./AdminDriverDetail.module.css";
import AdminDriver from "../../components/adminDriverDetail/AdminDriver";
import { useNavigate, useParams } from "react-router-dom";
import { RoleContext, TokenContext } from "../../App";
import axios from "axios";
import LoadSpin from "../../components/loadSpin/LoadSpin";

function AdminDriverDetail() {
  const params = useParams();
  const navigate = useNavigate();
  const { tokenCtx } = useContext(TokenContext);
  const { roleCtx } = useContext(RoleContext);
  const [isReady, setIsReady] = useState(false);

  const [detail, setDetail] = useState();

  useEffect(() => {
    if (roleCtx === "admin") {
      fetchData();
    } else if (roleCtx === "driver") {
      navigate("/home");
    } else if (roleCtx === "customer") {
      navigate("/profile");
    } else {
      navigate("/");
    }
  }, [roleCtx]);

  const fetchData = async () => {
    setIsReady(false);
    await axios
      .get(`https://aws.wildani.tech/api/drivers/${params.id}`, {
        headers: {
          Authorization: `Bearer ${tokenCtx}`,
        },
      })
      .then((response) => {
        setDetail(response.data.data);
        console.log(response.data.data);
      })
      .catch((err) => {
        console.log("error");
      })
      .finally(() => setIsReady(true));
  };

  const handleConfirm = async () => {
    setIsReady(false);
    await axios
      .post(
        `https://aws.wildani.tech/api/drivers/${params.id}/confirm`,
        {},
        {
          headers: {
            Authorization: `Bearer ${tokenCtx}`,
          },
        }
      )
      .then((response) => {
        fetchData();
        console.log(response);
      })
      .catch((err) => {
        console.log("error");
      })
      .finally(() => setIsReady(true));
  };

  const handleDelete = async () => {
    setIsReady(false);
    await axios
      .delete(`https://aws.wildani.tech/api/drivers/${params.id}`, {
        headers: {
          Authorization: `Bearer ${tokenCtx}`,
        },
      })
      .then((response) => {
        navigate("/admin-users");
      })
      .catch((err) => {
        console.log("error");
      })
      .finally(() => setIsReady(true));
  };

  let result;
  if (isReady) {
    result = (
      <div className={styles.page}>
        <AdminDriver
          statusOrder={detail.status}
          akunStatus={detail.account_status}
          image={detail.avatar}
          name={detail.name}
          email={detail.email}
          gender={detail.gender}
          address={detail.address}
          phone={detail.phone_number}
          dob={detail.dob}
          age={detail.age}
          vehicle={detail.truck_type.truck_type}
          vehicleTyp={detail.vehicle_picture}
          stnk={detail.stnk_file}
          ktp={detail.ktp_file}
          sim={detail.driver_license_file}
          nik={detail.nik}
          plateNumb={detail.vehicle_identifier}
          onConfirm={() => {
            handleConfirm();
          }}
          delAccount={() => {
            handleDelete();
          }}
          editTrigger={() => {
            fetchData();
          }}
          driverID={params.id}
        />
      </div>
    );
  } else {
    result = <LoadSpin />;
  }

  return <>{result}</>;
}

export default AdminDriverDetail;
