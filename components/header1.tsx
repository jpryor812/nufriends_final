import type { NextPage } from "next";
import styles from "./header1.module.css";

export type Header1Type = {
  className?: string;
};

const Header1: NextPage<Header1Type> = ({ className = "" }) => {
  return (
    <header className={[styles.header, className].join(" ")}>
      <div className={styles.rightHeader}>
        <div className={styles.userIcons}>
          <img
            className={styles.userIconsChild}
            loading="lazy"
            alt=""
            src="/Duo emoji.svg"
          />
        </div>
        <div className={styles.handEmoji}>
          <img
            className={styles.handEmojiIcon}
            loading="lazy"
            alt=""
            src="/hand-emoji1.svg"
          />
        </div>
        <div className={styles.envelopeParent}>
          <img
            className={styles.envelopeIcon}
            loading="lazy"
            alt=""
            src="/vector1.svg"
          />
          <div className={styles.mailEmoji} />
        </div>
      </div>
      <div className={styles.brandName}>
        <div className={styles.nufriends}>nufriends</div>
        <img
          className={styles.robotHeaderIcon}
          alt=""
          src="/robot-header1.svg"
        />
      </div>
    </header>
  );
};

export default Header1;
