import type { NextPage } from "next";
import styles from "./find-my-friends-button.module.css";

export type FindMyFriendsButtonType = {
  className?: string;
  frameDivWidth?: string;
  findMyFriendsMargin?: string;
  findMyFriendsWidth?: string;
  findMyFriendsFontWeight?: string;
  emojiWavingHandSign?: string; // Add the missing prop
  emojiWavingHandSignHeight?: string;
  emojiWavingHandSignWidth?: string;
};

const FindMyFriendsButton: NextPage<FindMyFriendsButtonType> = ({
  className = "",
  frameDivWidth,
  findMyFriendsMargin,
  findMyFriendsWidth,
  findMyFriendsFontWeight,
  emojiWavingHandSign,
  emojiWavingHandSignHeight,
  emojiWavingHandSignWidth,
}) => {
  return (
    <div
      className={[styles.findMyFriendsButton, className].join(" ")}
      style={{ width: frameDivWidth }}
    >
      <div
        className={styles.findMyFriendsButtonChild}
        style={{ margin: findMyFriendsMargin }}
      />
      <div className={styles.findMyFriendsWrapper}>
        <h2
          className={styles.findMyFriends}
          style={{
            width: findMyFriendsWidth,
            fontWeight: findMyFriendsFontWeight,
          }}
        >
          Find My Friends
        </h2>
      </div>
      <img
        className={styles.emojiWavingHandSign}
        loading="lazy"
        alt=""
        src={emojiWavingHandSign || "/-emoji-waving-hand-sign1.svg"} // Use the passed prop
        style={{
          height: emojiWavingHandSignHeight,
          width: emojiWavingHandSignWidth,
        }}
      />
    </div>
  );
};

export default FindMyFriendsButton;
