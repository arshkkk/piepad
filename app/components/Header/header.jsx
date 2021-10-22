import styles from "./header.module.css"
import { PIEPAD, PIEPAD_LOGO_WHITE } from "../../config"

export const Header = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <img src={PIEPAD} responsive className={styles.logo} />
      <img src={PIEPAD_LOGO_WHITE} responsive className={styles.logo} />
    </nav>
  </header>
)
