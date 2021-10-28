import styles from "./header.module.css"
import { PIEPAD, PIEPAD_LOGO_WHITE, PIEPAD_LOGO_WHITE_PIE } from "../../config"

export const Header = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <img src={PIEPAD_LOGO_WHITE_PIE} responsive className={styles.logo} />
    </nav>
  </header>
)
