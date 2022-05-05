import React from "react";
import {
  Image,
  Text,
  Container,
  ThemeIcon,
  Title,
  SimpleGrid,
  createStyles,
} from "@mantine/core";
import Numb1 from "../../assets/first.png";
import Since from "../../assets/since.png";
import Indonesia from "../../assets/indonesia.png";
import Favorite from "../../assets/favorite.png";

const useStyles = createStyles((theme) => ({
  //   wrapper: {
  //     paddingTop: 80,
  //     paddingBottom: 50,
  //   },

  item: {
    display: "flex",
  },

  itemIcon: {
    padding: theme.spacing.xs,
    marginRight: theme.spacing.md,
  },

  itemTitle: {
    marginBottom: theme.spacing.xs / 2,
  },

  title: {
    fontWeight: 800,
    fontSize: 35,
    letterSpacing: -1,
    lineHeight: 1,
    textAlign: "center",
    paddingTop: 32,

    "@media (max-width: 520px)": {
      fontSize: 24,
    },
  },
}));

function Introduction() {
  const { classes } = useStyles();

  return (
    <Container size={700} className={classes.wrapper}>
      <Title className={classes.title}>Kami Bringeee!</Title>

      <SimpleGrid
        cols={2}
        spacing={50}
        breakpoints={[{ maxWidth: 550, cols: 1, spacing: 40 }]}
        style={{ paddingTop: 32, paddingBottom: 32 }}
      >
        <div className={classes.item}>
          <ThemeIcon
            variant="light"
            className={classes.itemIcon}
            size={60}
            radius="md"
          >
            <Image src={Numb1} />
          </ThemeIcon>

          <div>
            <Text weight={700} size="lg" className={classes.itemTitle}>
              PERTAMA
            </Text>
            <Text color="white">
              Startup jasa kirim kargo online pertama di Indonesia
            </Text>
          </div>
        </div>

        <div className={classes.item}>
          <ThemeIcon
            variant="light"
            className={classes.itemIcon}
            size={60}
            radius="md"
          >
            <Image src={Since} />
          </ThemeIcon>

          <div>
            <Text weight={700} size="lg" className={classes.itemTitle}>
              2022
            </Text>
            <Text color="white">Berdiri sejak tahun 2022</Text>
          </div>
        </div>

        <div className={classes.item}>
          <ThemeIcon
            variant="light"
            className={classes.itemIcon}
            size={60}
            radius="md"
          >
            <Image src={Indonesia} />
          </ThemeIcon>

          <div>
            <Text weight={700} size="lg" className={classes.itemTitle}>
              INDONESIA
            </Text>
            <Text color="white">Kami hadir di seluruh daerah di Indonesia</Text>
          </div>
        </div>

        <div className={classes.item}>
          <ThemeIcon
            variant="light"
            className={classes.itemIcon}
            size={60}
            radius="md"
          >
            <Image src={Favorite} />
          </ThemeIcon>

          <div>
            <Text weight={700} size="lg" className={classes.itemTitle}>
              FAVORIT
            </Text>
            <Text color="white">Startup paling disukai berdasarkan survey</Text>
          </div>
        </div>
      </SimpleGrid>
    </Container>
  );
}

export default Introduction;
