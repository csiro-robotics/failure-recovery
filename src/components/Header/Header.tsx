import React from "react";
import styles from "../../Common.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoRow}>
      <img src="rss_logo.png" alt="RSS Logo" className={styles.rssLogo} />
    </div>

      {/* Main Title */}
      <h1 className={styles.title}>
        Failure Is Not the End
      </h1>

      {/* Subtitle */}
      <h2 className={styles.subtitle}>
        Toward Open-World Failure Recovery for Robots
      </h2>

      

      <p className={styles.meta}>
        Sydney, Australia | July 17th, 2026
      </p>

      {/* Optional extra details (keep minimal) */}
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