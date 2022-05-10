import { createStyles } from "@mantine/core";
import React, { useContext, useEffect } from "react";
import DescripHero from "../../components/landingHero/DescripHero";
import MainHero from "../../components/landingHero/MainHero";

import Aos from "aos";
import "aos/dist/aos.css";
import FeaturesComp from "../../components/landingFeatures/FeaturesComp";
import LandingContent from "../../components/landingContent/LandingContent";
import { RoleContext } from "../../App";
import { useNavigate } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  bannerBox: {
    paddingTop: 100,
    paddingBottom: 80,
    margin: "auto",
    maxWidth: 960,

    [theme.fn.smallerThan("sm")]: {
      paddingTop: 50,
      paddingBottom: 50,
    },
  },

  gridLayout: {
    maxWidth: 960,
    paddingTop: 100,
    paddingBottom: 100,
    marginLeft: "auto",
    marginRight: "auto",
    placeItems: "center",
  },

  cardContainer: {
    margin: "auto",
    minHeight: "80vh",
    display: "grid",
    placeItems: "center",
  },
}));

function Landing() {
  const { classes } = useStyles();
  const { roleCtx } = useContext(RoleContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (roleCtx === "admin" || roleCtx === "driver") {
      navigate("/home");
    } else if (roleCtx === "customer") {
      navigate("/profile");
    }

    Aos.init({});
  }, [roleCtx]);

  return (
    <>
      <MainHero />

      <DescripHero />

      <LandingContent />

      <div className={`${classes.cardContainer} bg-stone-700 py-8`}>
        <FeaturesComp />
      </div>
    </>
  );
}

export default Landing;
