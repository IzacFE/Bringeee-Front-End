import { SimpleGrid, createStyles, Image, Text, Title } from "@mantine/core";
import React from "react";
import LandingCard from "../../components/landingCard/LandingCard";
import DescripHero from "../../components/landingHero/DescripHero";
import MainHero from "../../components/landingHero/MainHero";
import styles from "./Landing.module.css";

import moneyBag from "../../assets/money-bag.png";
import deliveryTruck from "../../assets/delivery-truck.png";
import shield from "../../assets/shield.png";

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
}));

function Landing() {
  const { classes } = useStyles();

  return (
    <>
      <MainHero />
      <DescripHero />
      <SimpleGrid
        className={classes.bannerBox}
        cols={2}
        spacing="md"
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
      >
        <div className={styles.boxContainer} />
        <div className={styles.boxText}>
          <h1 className={styles.title}>
            <span className="text-stone-800">Klik ajukan order</span>
            <br />
            <span className="text-amber-500">Kargo dijemput driver</span>
          </h1>
        </div>
      </SimpleGrid>
      <div className={`${styles.cardContainer} bg-stone-700`}>
        <SimpleGrid
          className={classes.gridLayout}
          cols={3}
          spacing="xl"
          breakpoints={[{ maxWidth: "xs", cols: 1 }]}
        >
          <LandingCard image={moneyBag} text={"Murah"} />
          <LandingCard image={deliveryTruck} text={"Cepat"} />
          <LandingCard image={shield} text={"Aman"} />
        </SimpleGrid>
      </div>
    </>
  );
}

export default Landing;
