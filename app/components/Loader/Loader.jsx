import React from "react"
import styles from "./loader.module.css"

export const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <img
            alt={"logo"}
            src="/images/piepad.png"
            className={styles.loaderLogo}
          />
        </div>

        <div>
          <img
            src={"/images/Ripple-1s-200px.svg"}
            className={styles.loaderSvg}
          />
        </div>
      </div>
    </div>
  )
}
