
import styles from "./order.module.css";

export default function order() {
  return (
    <>
      
      <main className={styles.main}>
        <div className={styles.card}>
          <img src="/order/illustration-hero.svg" className={styles.hero} alt="" />
          <div className={styles.content}>
            <div className={styles.heading}>Order Summary</div>
            <div className={styles.description}>
              You can now listen to millions Lorem ipsum dolor, sit amet
              consectetur adipisicing. on any device anywhere you like!
            </div>
            <div className={styles.price_box}>
              <div className={styles.info}>
                <div className={styles.plan}>Annual Plan</div>
                <div className={styles.price}>$59.99/year</div>
              </div>
              <a href="" className={styles.change}>Change</a>
            </div>
            <div className={styles.btn}>Proceed to Payment</div>
            <div className={styles.cancel}>Cancel Order</div>
          </div>
        </div>
      </main>
    </>
  );
}
