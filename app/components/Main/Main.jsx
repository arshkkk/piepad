import React from "react"
import { PIEPAD } from "../../config"
import styles from "./main.module.css"

export const Main = () => (
  <main className={styles.main}>
    <div className={styles.mainText}>
      <h1 className={styles.h1}>
        Get your slice of the pie on the sweetest IDO launchpad on the Ethereum
        network
      </h1>
      <h3 className={""}>
        WPiepad is an IDO platform offering early access to a curated selection
        of DeFi, NFT and Gaming projects. Piepad will also offer high yield
        staking rewards for all staked $PIES. Website coming soon.
      </h3>
      <div id="mc_embed_signup" className={styles.formWrapper}>
        <h3 className={""}>
          Stay up to date with upcoming website launch, private sales and IDO.
        </h3>
        <form
          action="https://piepad.us5.list-manage.com/subscribe/post?u=abd22e7cad5016c5afa3107c5&amp;id=2aebd3be3f"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <input
              type="email"
              name="EMAIL"
              className={styles.emailInput}
              placeholder="Enter your email"
              required
            />
            {/*// real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
            <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_abd22e7cad5016c5afa3107c5_2aebd3be3f"
                tabIndex="-1"
                value=""
              />
            </div>
            <div className="clear" style={{ display: "inline" }}>
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                className={styles.submitButton}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img src={PIEPAD} className={styles.ctaImage} />
    </div>
  </main>
)
