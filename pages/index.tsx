import type { NextPage } from 'next';
import styles from './index.module.css';


const LandingPageFinal:NextPage = () => {
  	return (
    		<div className={styles.landingPageFinal}>
      			<div className={styles.header}>
        				<div className={styles.rightHeader}>
          					<div className={styles.rightHeaderInner}>
            						<img className={styles.frameChild} alt="" src="Group 105.svg" />
          					</div>
          					<div className={styles.handEmoji}>
            						<img className={styles.handEmojiIcon} alt="" src="hand emoji.svg" />
          					</div>
          					<div className={styles.vectorParent}>
            						<img className={styles.vectorIcon} alt="" src="Vector.svg" />
            						<div className={styles.mailEmoji} />
          					</div>
        				</div>
        				<div className={styles.nufriendsParent}>
          					<div className={styles.nufriends}>nufriends</div>
          					<img className={styles.robotHeaderIcon} alt="" src="robot header.svg" />
        				</div>
      			</div>
      			<div className={styles.neverFeelAlone}>Never Feel Alone Again</div>
      			<div className={styles.landingPageFinalChild} />
      			<div className={styles.findFiveFriends}>Find Five Friends in Five Minutes</div>
      			<div className={styles.landingPageFinalItem} />
      			<i className={styles.answerAFewContainer}>
        				<p className={styles.answerAFew}>{`Answer a few questions to help us get to know you, and then we’ll match you with people we `}</p>
        				<p className={styles.answerAFew}>feel you’ll build a connection with!</p>
      			</i>
      			<div className={styles.landingPageFinalInner} />
      			<div className={styles.rectangleParent}>
        				<div className={styles.groupChild} />
        				<div className={styles.groupItem} />
        				<div className={styles.findMyFriendsButton}>
          					<div className={styles.findMyFriendsButtonChild} />
          					<img className={styles.emojiWavingHandSign} alt="" src={`🦆 emoji "waving hand sign".svg`} />
          					<b className={styles.findMyFriends}>Find My Friends</b>
        				</div>
      			</div>
      			<div className={styles.landingPageFinalInner} />
      			<i className={styles.worriedAboutTheContainer}>
        				<p className={styles.answerAFew}>{`Worried about the cold start to the conversation? Your AI Companion, who knows you best, `}</p>
        				<p className={styles.answerAFew}>{`will facilitate that first conversation for you! `}</p>
      			</i>
      			<div className={styles.landingPageFinalChild1} />
      			<div className={styles.seeHowItWorksParent}>
        				<div className={styles.seeHowIt}>{`See how it works! `}</div>
        				<img className={styles.groupIcon} alt="" src="Group.svg" />
      			</div>
    		</div>);
};

export default LandingPageFinal;
