import type { NextPage } from "next";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <header className={[styles.frameParent, className].join(" ")}>
      <div className={styles.nufriendsParent}>
        <div className={styles.nufriends}>nufriends</div>
        <div className={styles.robotHeaderWrapper}>
          <img
            className={styles.robotHeaderIcon}
            alt=""
            src="/robot-header.svg"
          />
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.handEmojiParent}>
          <img
            className={styles.handEmojiIcon}
            loading="lazy"
            alt=""
            src="/hand-emoji.svg"
          />
          <div className={styles.frameGroup}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/group-105.svg"
            />
            <div className={styles.mailEmojiWrapper}>
              <div className={styles.mailEmoji}>
                <img
                  className={styles.vectorIcon}
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent;
