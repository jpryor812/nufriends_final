import type { NextPage } from "next";
import styles from "./call-to-action.module.css";

export type CallToActionType = {
  className?: string;
};

const CallToAction: NextPage<CallToActionType> = ({ className = "" }) => {
  return (
    <section className={[styles.callToAction, className].join(" ")}>
      <div className={styles.fiveFriends}>
        <div className={styles.findFriends}>
          <h1 className={styles.findFiveNew}>
            Find Five New Friends in Five Minutes
          </h1>
        </div>
        <div className={styles.questionnaire}>
          <div className={styles.answerAFew}>
            Answer a few questions to help us get to know you, and then we’ll
            match you with people we feel you’ll build a connection with!
          </div>
        </div>
        <div className={styles.findFriendsButtonWrapper}>
          <div className={styles.findFriendsButton}>
            <div className={styles.findFriendsButtonInner}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.findButton}>
                  <h3 className={styles.findMyFriends}>Find My Friends</h3>
                </div>
                <img
                  className={styles.emojiWavingHandSign}
                  loading="lazy"
                  alt=""
                  src="/-emoji-waving-hand-sign-1.svg"
                />
              </div>
            </div>
            <i
              className={styles.worriedAboutThe}
            >{`Worried about the cold start to the conversation? Your AI Companion, who knows you best, will facilitate that first conversation for you! `}</i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
