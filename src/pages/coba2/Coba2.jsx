import React, { useMemo, useState } from "react";
import { Button } from "@mantine/core";
import { Photo } from "tabler-icons-react";
import AdminDriver from "../../components/adminDriverDetail/AdminDriver";
import AdminDriverTypes from "../../components/adminDriverTypes/AdminDriverTypes";
import AdminOrderList from "../../components/adminOrderList/AdminOrderList";
import CustomerModal from "../../components/customerAccModal/CustomerModal";
import LoadSpin from "../../components/loadSpin/LoadSpin";
import OrderCard from "../../components/orderCard/OrderCard";
import SearchComps from "../../components/search/SearchComps";
import StepHorizon from "../../components/stepper/StepHorizon";
import TabsAdmin from "../../components/tabsAdmin/TabsAdmin";
import TimelineVer from "../../components/timeline/TimelineVer";
import UserCard from "../../components/userCard/UserCard";
import CategoryHome from "../../components/category/CategoryHome";
import Map from "../../components/map/Map";

function Coba2() {
  return <Map />;
  // const loader = new Loader({
  //   apiKey: process.env.REACT_APP_API_KEY,
  //   version: "weekly",
  // });

  // loader.load().then(() => {
  //   const map = new google.maps.Map(document.querySelector("#map-1"), {
  //     center: defaultLocation,
  //     zoom: 17,
  //     draggableCursor: true,
  //     disableDefaultUI: false,
  //     mapId: "ef7656b7",
  //   });
  // });
  // const defaultLocation = { lat: 44, lng: -80 };
  // const [coordinate, setCoordinate] = useState(null);
  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: "AIzaSyB73SP-kNYhAgJWdFll8hVNppQnDFv7-4M",
  // });
  // const handleOnLoad = (map) => {
  //   setCoordinate(map);
  // };
  // const handleCenterChanged = () => {
  //   if (coordinate) {
  //     const newCenter = coordinate.getCenter();
  //     console.log(newCenter);
  //   }
  // };

  // if (!isLoaded) return <div>Loading...</div>;
  // return (
  //   <GoogleMap
  //     zoom={10}
  //     center={defaultLocation}
  //     onLoad={handleOnLoad}
  //     onCenterChanged={handleCenterChanged}
  //     mapContainerClassName="map-container"
  //   >
  //     <Marker position={defaultLocation} />
  //   </GoogleMap>
  // );
}

export default Coba2;
