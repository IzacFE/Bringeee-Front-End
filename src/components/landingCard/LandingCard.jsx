import React from "react";
import { Card, Image } from "@mantine/core";
import styles from "./LandingCard.module.css";

function LandingCard(props) {
  return (
    <div>
      <h2 className={styles.title}>{props.text}</h2>
      <Card shadow="sm" className={`${styles.card} bg-amber-500`}>
        <Card.Section className="p-5">
          <Image src={props.image} fit="contain" />
        </Card.Section>
      </Card>
    </div>
  );
}

export default LandingCard;
