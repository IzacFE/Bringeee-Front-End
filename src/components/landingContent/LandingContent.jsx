import React, { useEffect } from "react";
import styles from "./LandingContent.module.css";

import delTruck from "../../assets/delivery.jpg";
import driver from "../../assets/driver.png";
import practical from "../../assets/Practical.jpg";

import Aos from "aos";

function LandingContent() {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div className={styles.page}>
      <div
        className={styles.container}
        data-aos="slide-left"
        data-aos-duration="1500"
      >
        <div
          className={styles.deliveryContainer}
          style={{
            backgroundImage: `url(${delTruck})`,
          }}
        />

        <div className={styles.text}>
          <h1 className={styles.title}>
            <span className="text-stone-800">Ajukan order</span>
            <br />
            <span className="text-amber-500">Kargo dijemput driver</span>
          </h1>
        </div>
      </div>

      <div
        className={styles.container}
        data-aos="slide-right"
        data-aos-duration="1500"
      >
        <div className={styles.text}>
          <h1 className={styles.title}>
            <span className="text-stone-800">Jadi mitra driver</span>
            <br />
            <span className="text-amber-500">Dimanapun</span>
          </h1>
        </div>

        <div
          className={styles.deliveryContainer}
          style={{
            backgroundImage: `url(${driver})`,
          }}
        />
      </div>

      <div
        className={styles.container}
        data-aos="slide-left"
        data-aos-duration="1500"
      >
        <div
          className={styles.deliveryContainer}
          style={{
            backgroundImage: `url(${practical})`,
          }}
        />

        <div className={styles.text}>
          <h1 className={styles.title}>
            <span className="text-stone-800">Praktis</span>
            <br />
            <span className="text-amber-500">Mudah, cukup lewat web</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default LandingContent;
