import React from "react";
import styles from "../../Common.module.css";
// import AuthorsBar from "../AuthorsBar/AuthorsBar";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        Failure Is Not the End: Towards Open-World Failure Recovery for Robots
      </h1>
      <h4 className={styles.subtitle}>
      Workshop RSS 2026-June XXX (xxxam/pm-xxxam/pm in Sydney, Australia)
      In person location: xxx, Techincal University of Sydney (UTS)
      Video reccordings are available on our youtube channel: link (tbd)
      </h4>
      {/* <AuthorsBar authors={authors} /> */}
    </header>
  );
};
export default Header;
