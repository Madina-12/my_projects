import styles from "./ISM_E_ZAAT_MUBARAK.module.css";
import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";
import Image from "next/image";

const ISM_E_ZAAT_MUBARAK = () => {
  const [state, setState] = useState(true);
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1400 },
    loop: true,
  });

  return (
    <div className={styles.container}>
      <div className={styles.border}>
        <div className={styles.inner_border}>
          <Image src="/ISM_E_ZAAT.png" fill style={{ objectFit: "contain" }} alt="" priority />
          <div className={styles.SUNEHRI_JALIAN_MUBARAK}>
            <Image src="/SUNEHRI_JALIAN_MUBARAK.jpg" fill alt="" sizes="(max-width: 768px) 50vw,
              (max-width: 1200px) 33vw,
              20vw" />
          </div>
          <div className={styles.moving11} />
          <div className={styles.moving12} />
          <div className={styles.moving13} />
          <div className={styles.moving14} />
          <animated.div
            style={{
              height: x.to({
                range: [0, 0.3, 1],
                output: ["0%", "24%", "24%"],
              }),
            }}
            className={styles.moving2}
          />
          <animated.div
            style={{
              height: x.to({
                range: [0, 0.3, 0.43, 1],
                output: ["0%", "0%", "23%", "23%"],
              }),
              width: x.to({
                range: [0, 0.43, 0.5, 1],
                output: ["5%", "5%", "13%", "13%"],
              }),
            }}
            className={styles.moving3}
          />
          <animated.div
            style={{
              height: x.to({
                range: [0, 0.5, 0.63, 1],
                output: ["0%", "0%", "21%", "21%"],
              }),
              width: x.to({
                range: [0, 0.63, 0.7, 1],
                output: ["5%", "5%", "13%", "13%"],
              }),
            }}
            className={styles.moving4}
          />
          <animated.div
            style={{
              height: x.to({
                range: [0, 0.7, 0.8, 1],
                output: ["0%", "0%", "19%", "19%"],
              }),
            }}
            className={styles.moving5}
          />
          <animated.div
            style={{
              width: x.to({
                range: [0, 0.8, 0.9, 1],
                output: ["0%", "0%", "11%", "11%"],
              }),
            }}
            className={styles.moving6}
          />
        </div>
      </div>
    </div>
  );
};

export default ISM_E_ZAAT_MUBARAK;
