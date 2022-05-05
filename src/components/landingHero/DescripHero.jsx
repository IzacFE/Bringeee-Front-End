import React, { useEffect } from "react";
import { Title, Text, Container, Overlay, createStyles } from "@mantine/core";
import img from "../../assets/kenalin.jpg";

import Aos from "aos";
import "aos/dist/aos.css";
import Introduction from "../landingIntro/Introduction";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: "100vh",
    position: "relative",
    paddingTop: "30vh",
    paddingBottom: "30vh",
    backgroundImage: `url(${img})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  title: {
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: "center",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    "@media (max-width: 520px)": {
      fontSize: 28,
    },
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: "center",

    "@media (max-width: 520px)": {
      fontSize: theme.fontSizes.md,
      textAlign: "left",
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 1.5,
    display: "flex",
    justifyContent: "center",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },

  control: {
    height: 42,
    fontSize: theme.fontSizes.md,

    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    "@media (max-width: 520px)": {
      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

  secondaryControl: {
    color: theme.white,
    backgroundColor: "rgba(255, 255, 255, .4)",

    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, .45) !important",
    },
  },
}));

function DescripHero() {
  const { classes } = useStyles();

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div className={`${classes.wrapper}`}>
      <Overlay color="#292524" opacity={0.2} zIndex={1} />

      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className={classes.inner}
      >
        <Title className={classes.title}>
          Kenalan{" "}
          <Text component="span" inherit className="text-stone-800">
            Yuk!
          </Text>
        </Title>

        <Container size={900} className="shadow-xl bg-amber-500 rounded-md">
          <Introduction />
        </Container>
      </div>
    </div>
  );
}

export default DescripHero;
