import type { NextPage } from "next";
import Header from "../components/header";
import CallToAction from "../components/call-to-action";
import styles from "./landing-page.module.css";

const LandingPage: NextPage = () => {
  return (
    <div className={styles.landingPage}>
      <Header />
      <section className={styles.slogan}>
        <h1 className={styles.neverFeelAlone}>Never Feel Alone Again</h1>
      </section>
      <CallToAction />
    </div>
  );
};

export default LandingPage;
