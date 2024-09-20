import type { NextPage } from "next";
import styles from "./header.module.css";

export type HeaderType = {
  className?: string;
};

const Header: NextPage<HeaderType> = ({ className = "" }) => {
  return (
    <header className={[styles.header, className].join(" ")}>
      <div className={styles.nufriendsParent}>
        <h1 className={styles.nufriends}>nufriends</h1>
        <img
          className={styles.robotFinal311}
          loading="lazy"
          alt=""
          src="/robot-final-3-1-1.svg"
        />
      </div>
      <div className={styles.ducks}>
        <div className={styles.wavingDucks}>
          <div className={styles.busting}>
            <img
              className={styles.bustsInSilhouetteIcon}
              loading="lazy"
              alt=""
              src="/busts-in-silhouette.svg"
            />
          </div>
          <img
            className={styles.emojiWavingHandSign}
            loading="lazy"
            alt=""
            src="/-emoji-waving-hand-sign.svg"
          />
          <div className={styles.mailDuck}>
            <img
              className={styles.iconMail}
              loading="lazy"
              alt=""
              src="/-icon-mail.svg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
