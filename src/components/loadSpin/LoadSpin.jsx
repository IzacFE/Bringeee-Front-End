import React from "react";
import styles from "./LoadSpin.module.css";

export default function LoadSpin() {
  return (
    <div className={styles.spinnerScreen}>
      <section>
        <div className={`${styles.spinner} border-4 border-amber-500`}></div>
        <h1 className="text-stone-800">Tunggu Sebentar ...</h1>
      </section>
    </div>
  );
}
