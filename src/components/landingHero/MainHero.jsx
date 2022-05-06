import React, { useEffect } from "react";
import { createStyles, Overlay, Container, Title, Text } from "@mantine/core";
import img from "../../assets/HeroBG.jpg";
import Aos from "aos";

const useStyles = createStyles((theme) => ({
  hero: {
    position: "relative",
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  },

  container: {
    minHeight: "95vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingBottom: theme.spacing.xl * 10,
    zIndex: 1,
    position: "relative",

    [theme.fn.smallerThan("sm")]: {
      height: 500,
      paddingBottom: theme.spacing.xl * 6,
    },
  },

  title: {
    color: theme.white,
    fontSize: 60,
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 40,
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
      fontSize: theme.fontSizes.sm,
    },
  },

  control: {
    marginTop: theme.spacing.xl * 1.5,

    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },
}));

function MainHero() {
  const { classes } = useStyles();

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container
        className={classes.container}
        data-aos="zoom-in-up"
        data-aos-duration="1500"
      >
        <Title className={classes.title}>
          Bringeee <br />
          Hadir pertama
          <br />
          Tiada duanya
        </Title>
        <Text className={classes.description} size="xl" mt="xl">
          Kirim kargo?
          <br />
          Cukup Klik, kargo kami antar
        </Text>
      </Container>
    </div>
  );
}

export default MainHero;
