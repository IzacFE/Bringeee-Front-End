import React, { useEffect } from "react";
import {
  createStyles,
  Text,
  SimpleGrid,
  Container,
  Title,
} from "@mantine/core";
import { Truck, Certificate, Coin } from "tabler-icons-react";

import styles from "./FeaturesComp.module.css";
import moneyBag from "../../assets/money-bag.png";
import deliveryTruck from "../../assets/delivery-truck.png";
import shield from "../../assets/shield.png";
import Aos from "aos";

const useStyles = createStyles((theme) => ({
  feature: {
    width: 200,
    minHeight: 300,
    position: "relative",
    margin: "auto",
    paddingTop: theme.spacing.xl,
    paddingLeft: theme.spacing.xl,
  },

  overlay: {
    borderRadius: 10,
    position: "absolute",
    height: 180,
    width: 180,
    top: 0,
    left: 0,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
        : theme.colors[theme.primaryColor][0],
    zIndex: 1,
  },

  content: {
    position: "relative",
    zIndex: 2,
  },

  bigTitle: {
    fontSize: 32,
    color: "white",
    width: "100%",
    textAlign: "center",
    marginBottom: "10vh",
  },

  title: {
    fontSize: 24,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },
}));

function FeaturesComp() {
  const { classes } = useStyles();

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <Container
      mt={30}
      mb={30}
      size={960}
      data-aos="flip-down"
      data-aos-duration="1500"
    >
      <Title className={classes.bigTitle} classNames="text-white">
        Banyak Untungnya
      </Title>

      <SimpleGrid
        cols={3}
        breakpoints={[
          { maxWidth: "sm", cols: 2 },
          { maxWidth: "xs", cols: 1 },
        ]}
        spacing={100}
      >
        <div className={classes.feature}>
          <div className={`${classes.overlay} bg-amber-500 shadow-xl`} />

          <div className={classes.content}>
            <div
              className={styles.image}
              style={{
                backgroundImage: `url(${moneyBag})`,
              }}
            />
            <Text
              weight={700}
              size="lg"
              mb="xs"
              mt={5}
              className={classes.title}
            >
              Murah
            </Text>
            <Text color="white" size="sm">
              Biaya antar yang terjangkau berdasarkan jarak antar yang telah
              diverifikasi
            </Text>
          </div>
        </div>

        <div className={classes.feature}>
          <div className={`${classes.overlay} bg-amber-500 shadow-xl`} />

          <div className={classes.content}>
            <div
              className={styles.image}
              style={{
                backgroundImage: `url(${deliveryTruck})`,
              }}
            />
            <Text
              weight={700}
              size="lg"
              mb="xs"
              mt={5}
              className={classes.title}
            >
              Cepat
            </Text>
            <Text color="white" size="sm">
              Waktu pengantaran kargo yang cepat dan tujuan yang jelas
            </Text>
          </div>
        </div>

        <div className={classes.feature}>
          <div className={`${classes.overlay} bg-amber-500 shadow-xl`} />

          <div className={classes.content}>
            <div
              className={styles.image}
              style={{
                backgroundImage: `url(${shield})`,
              }}
            />
            <Text
              weight={700}
              size="lg"
              mb="xs"
              mt={5}
              className={classes.title}
            >
              Aman
            </Text>
            <Text color="white" size="sm">
              Diantar oleh driver yang telah terverifikasi, dengan proses yang
              terupdate
            </Text>
          </div>
        </div>
      </SimpleGrid>
    </Container>
  );
}

export default FeaturesComp;
