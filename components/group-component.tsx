import type { NextPage } from "next";
import FindMyFriendsButton from "./find-my-friends-button";
import styles from "./group-component.module.css";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: NextPage<GroupComponentType> = ({ className = "" }) => {
  return (
    <section className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.rectangleGroup}>
        <div className={styles.frameItem} />
        <FindMyFriendsButton />
      </div>
    </section>
  );
};

export default GroupComponent;
