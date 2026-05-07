import React from "react";
import styles from "../../Common.module.css";
import logo from "../../rss_logo.png";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoRow}>
        <img src={logo} alt="RSS Logo" className={styles.rssLogo} />
      </div>

      <h1 className={styles.title}>
        Failure Is Not the End
      </h1>

      <h2 className={styles.subtitle}>
        Toward Open-World Failure Recovery for Robots
      </h2>

      <p className={styles.meta}>
        Sydney, Australia | July 17th, 2026
      </p>

      <p className={styles.metaSmall}>
        13:00 – 17:00 (TBC) · UTS (Room TBC)
      </p>

      <p className={styles.metaSmall}>
        🎥 Recordings: <a href="#">YouTube (coming soon)</a>
      </p>
    </header>
  );
};

export default Header;