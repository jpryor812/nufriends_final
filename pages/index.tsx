import type { NextPage } from "next";
import FrameComponent from "../components/frame-component";
import GroupComponent from "../components/group-component";
import styles from "./index.module.css";

const Root: NextPage = () => {
  return (
    <div className={styles.root}>
      <FrameComponent />
      <div className={styles.rootChild} />
      <section className={styles.neverFeelAlone}>
        Never Feel Alone Again
      </section>
      <div className={styles.rootChild} />
      <section className={styles.findFiveFriends}>
        Find Five Friends in Five Minutes
      </section>
      <div className={styles.rootInner} />
      <i className={styles.answerAFewContainer}>
        <p
          className={styles.answerAFew}
        >{`Answer a few questions to help us get to know you, and then we’ll match you with people we `}</p>
        <p className={styles.answerAFew}>
          feel you’ll build a connection with!
        </p>
      </i>
      <div className={styles.rectangleDiv} />
      <GroupComponent />
      <div className={styles.rectangleDiv} />
      <i className={styles.worriedAboutTheContainer}>
        <p
          className={styles.answerAFew}
        >{`Worried about the cold start to the conversation? Your AI Companion, who knows you best, `}</p>
        <p
          className={styles.answerAFew}
        >{`will facilitate that first conversation for you! `}</p>
      </i>
      <div className={styles.rectangleDiv} />
      <div className={styles.frameDiv}>
        <div className={styles.frameParent}>
          <div className={styles.seeHowItWorksWrapper}>
            <div className={styles.seeHowIt}>{`See how it works! `}</div>
          </div>
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src="/group.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Root;