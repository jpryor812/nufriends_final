import type { NextPage } from "next";
import Header1 from "../components/header1";
import FindMyFriendsButton from "../components/find-my-friends-button";
import styles from "./index.module.css";

const LandingPageFinal: NextPage = () => {
  return (
    <div className={styles.landingPageFinal}>
      <Header1 />
      <section className={styles.neverFeelAlone}>
        Never Feel Alone Again
      </section>
      <div className={styles.contentArea} />
      <section className={styles.findFiveFriends}>
        Find Five Friends in Five Minutes
      </section>
      <div className={styles.contentArea1} />
      <i className={styles.answerAFewContainer}>
        <p
          className={styles.answerAFew}
        >{`Answer a few questions to help us get to know you, and then we’ll match you with people we `}</p>
        <p className={styles.answerAFew}>
          feel you’ll build a connection with!
        </p>
      </i>
      <div className={styles.contentArea2} />
      <div className={styles.landingPageFinalChild} />
      <div className={styles.landingPageFinalItem} />
      <div className={styles.callToAction}>
        <FindMyFriendsButton
          frameDivWidth="304.9px"
          findMyFriendsMargin="unset"
          findMyFriendsWidth="344.1px"
          findMyFriendsFontWeight="bold"
          emojiWavingHandSign="/-emoji-waving-hand-sign2.svg"
          emojiWavingHandSignHeight="74.3px"
          emojiWavingHandSignWidth="77px"
        />
      </div>
      <div className={styles.contentArea2} />
      <i className={styles.worriedAboutTheContainer}>
        <p
          className={styles.answerAFew}
        >{`Worried about the cold start to the conversation? Your AI Companion, who knows you best, `}</p>
        <p
          className={styles.answerAFew}
        >{`will facilitate that first conversation for you! `}</p>
      </i>
      <div className={styles.contentArea4} />
      <div className={styles.learnMore}>
        <div className={styles.seeHowItWorks}>
          <div className={styles.seeHowItWorksWrapper}>
            <div className={styles.seeHowIt}>{`See how it works! `}</div>
          </div>
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src="/group1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPageFinal;