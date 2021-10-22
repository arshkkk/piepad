import styles from "./footer.module.css"

export const Footer = () => (
  <footer className={styles.footer}>
    <h3> &#169; 2021 PiePad</h3>
    <div className={styles.socialLogos}>
      <img
        alt={"telegram"}
        src={"/images/medium.png"}
        className={styles.socialLogoItem}
      />
      <img
        alt={"telegram"}
        src={"/images/twitter.png"}
        className={styles.socialLogoItem}
      />
      <img
        alt={"telegram"}
        src={"/images/telegram.png"}
        className={styles.socialLogoItem}
      />
    </div>
  </footer>
)
