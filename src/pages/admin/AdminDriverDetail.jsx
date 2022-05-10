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

  const [jenisTruk, setJenisTruk] = useState("1");
  const [nik, setNik] = useState("");
  const [ktp, setKtp] = useState("");
  const [sim, setSim] = useState("");
  const [stnk, setStnk] = useState("");
  const [vhcPict, setVhcPict] = useState("");
  const [nomorKendaraan, setNomorKendaraan] = useState("");

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

  const handleEditDriver = async () => {
    const formData = new FormData();

    formData.append("truck_type_id", jenisTruk);
    formData.append("ktp_file", ktp);
    formData.append("stnk_file", stnk);
    formData.append("driver_license_file", sim);
    formData.append("vehicle_identifier", nomorKendaraan);
    formData.append("nik", nik);
    formData.append("vehicle_picture", vhcPict);

    await axios
      .put(`https://aws.wildani.tech/api/drivers/${detail.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${tokenCtx}`,
        },
      })
      .then((response) => {
        fetchData();
      })
      .catch((err) => {
        console.log(err);
        console.log("error");
      });
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
          changeNik={(e) => setNik(e.target.value)}
          changeKtp={(e) => setKtp(e.target.value[0])}
          changeSim={(e) => setSim(e.target.value[0])}
          changeStnk={(e) => setStnk(e.target.value[0])}
          changeVhcPict={(e) => setVhcPict(e.target.value[0])}
          changeJenisTruk={(e) => setJenisTruk(e.target.value)}
          changeNomorKendaraan={(e) => setNomorKendaraan(e.target.value)}
          editClick={() => handleEditDriver()}
        />
      </div>
    );
  } else {
    result = <LoadSpin />;
  }

  return <>{result}</>;
}

export default AdminDriverDetail;
