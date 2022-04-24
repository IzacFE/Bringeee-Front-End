import React, { useState } from "react";
import { RadioGroup, Radio } from "@mantine/core";
import styles from "./AdminDriverTypes.module.css";

function AdminDriverTypes(props) {
  const [value, setValue] = useState("1");

  return (
    <>
      <RadioGroup
        value={value}
        onChange={setValue}
        label="Select your favorite framework/library"
        description="This is anonymous"
        color="yellow"
        required
      >
        <Radio value="1" label="Semua" />
        <Radio value="2" label="Butuh Konfirmasi" />
        <Radio value="3" label="Terkonfirmasi" />
      </RadioGroup>

      <section className="rounded-md bg-stone-700 mt-2">
        <div
          className={
            value === "1"
              ? `${styles.content} ${styles.activeContent}`
              : styles.content
          }
        >
          KONTEN 1
        </div>

        <div
          className={
            value === "2"
              ? `${styles.content} ${styles.activeContent}`
              : styles.content
          }
        >
          KONTEN 2
        </div>

        <div
          className={
            value === "3"
              ? `${styles.content} ${styles.activeContent}`
              : styles.content
          }
        >
          KONTEN 3
        </div>
      </section>
    </>
  );
}

export default AdminDriverTypes;
