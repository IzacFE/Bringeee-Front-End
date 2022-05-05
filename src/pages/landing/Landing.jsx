import { SimpleGrid, createStyles, Image, Text, Title } from "@mantine/core";
import React, { useEffect } from "react";
import LandingCard from "../../components/landingCard/LandingCard";
import DescripHero from "../../components/landingHero/DescripHero";
import MainHero from "../../components/landingHero/MainHero";

import Aos from "aos";
import "aos/dist/aos.css";
import FeaturesComp from "../../components/landingFeatures/FeaturesComp";
import LandingContent from "../../components/landingContent/LandingContent";

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

  useEffect(() => {
    Aos.init({});
  }, []);

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
