import type { NextPage } from "next";
import styles from "./find-my-friends-button.module.css";

export type FindMyFriendsButtonType = {
  className?: string;
};

const FindMyFriendsButton: NextPage<FindMyFriendsButtonType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.findMyFriendsButton, className].join(" ")}>
      <div className={styles.findMyFriendsButtonChild} />
      <div className={styles.findMyFriendsWrapper}>
        <h2 className={styles.findMyFriends}>Find My Friends</h2>
      </div>
      <img
        className={styles.emojiWavingHandSign}
        loading="lazy"
        alt=""
        src="/-emoji-waving-hand-sign1.svg"
      />
    </div>
  );
};

export default FindMyFriendsButton;
