
import styles from "./rating.module.css";
import { useState } from "react";

export default function rating() {
  const [selected, setSelected] = useState();
  const [display, setDisplay] = useState(true)
  const select_Rating= e =>{
    setSelected(e.target.innerText)
  }
  
  return (
    <>
      
      <main className={styles.main}>
        <div className={styles.evaluation}  style={{display:display?"block":"none"}}>
          <div>
            <img src="/rating/icon-star.svg" className={styles.star} alt="star" />
          </div>
          <h1 className={styles.heading}>How did we do?</h1>
          <div className={styles.paragraph}>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </div>
          <div className={styles.rating_numbers}>
            <span className={styles.circle} onClick={select_Rating}>
              1
            </span>
            <span className={styles.circle} onClick={select_Rating}>
              2
            </span>
            <span className={styles.circle} onClick={select_Rating}>
              3
            </span>
            <span className={styles.circle} onClick={select_Rating}>
              4
            </span>
            <span className={styles.circle} onClick={select_Rating}>
              5
            </span>
          </div>
          <button className={styles.submit} onClick={()=>{selected?setDisplay(false):null}}>
            SUBMIT
          </button>
        </div>
        <div className={styles.thankyou} style={{display:display?"none":"block"}}>
          <img
            src="/rating/illustration-thank-you.svg"
            className={styles.center}
            alt="Thanks image"
          />
          <div className={styles.rating}>You selected {selected} out of 5</div>
          <h1 className={`${styles.heading} ${styles.thankyou_heading}`}>
            Thank you!
          </h1>
          <div className={styles.paragraph}>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </div>
        </div>
      </main>
    </>
  );
}

