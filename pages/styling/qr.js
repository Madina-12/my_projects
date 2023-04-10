
import styles from './qr.module.css'

export default function qr() {
  return (
    <>
      
      <main className={styles.main}>
        <div className={styles.page}>
          <img src="/qr/image-qr-code.png" className={styles.img} alt="QR code" />
          <div className={styles.heading}>Improve your front-end skills by building projects</div>
          <div className={styles.description}>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</div>
        </div>
        <div className={styles.coder}>Challenge by Frontend Mentor. Coded by MUHAMMAD UMAR</div>
      </main>
    </>
  )
}
