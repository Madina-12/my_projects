
import styles from "./nft.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.card}>
          <img
            src="/nft/image-equilibrium.jpg"
            className={styles.equilibrium}
            alt=""
          />
          <div className={styles.heading}>Equilibrium #3429</div>
          <div className={styles.description}>
            Our Equilibrium collection promotes balance and calm.
          </div>
          <div className={styles.price_info}>
            <div className={styles.info}>
              <img src="/nft/icon-ethereum.svg" alt="" className={styles.icon} />
              <span className={styles.eth}> 300 PKR</span>
            </div>
            <div className={styles.info}>
              <img src="/nft/icon-clock.svg" alt="" className={styles.icon} />
              <span> 3 days left</span>
            </div>
          </div>
          <div className={styles.creation}>
            <img src="/nft/avatar.jfif" className={styles.avatar} alt="" />
            Created by&nbsp;<a href="">MUHAMMAD UMAR</a>
          </div>
        </div>
        <div className={styles.coder}>
          Challenge by <a>Frontend Mentor</a>. Coded by <a>MUHAMMAD UMAR</a>
        </div>
      </main>
    </>
  );
}
