import React from "react";
import styles from "../../Common.module.css";
// import AuthorsBar from "../AuthorsBar/AuthorsBar";

const Header: React.FC = () => {
  // const organisers = [
  //   {
  //     firstName: "Milad",
  //     lastName: "Ramezani",
  //     university: "CSIRO Data61",
  //     link: "https://people.csiro.au/r/m/milad-ramezani",
  //   },
  //       {
  //     firstName: "Tirthankar",
  //     lastName: "Bandyopadhyay",
  //     university: "CSIRO Data61",
  //     link: "https://people.csiro.au/b/t/tirtha-bandy",
  //   },
  //       {
  //     firstName: "Fahira",
  //     lastName: "Afzal",
  //     university: "CSIRO Data61",
  //     // link: "https://people.csiro.au/a/f/fahira-afzal",
  //   }
  // ];
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        Failure Recovery in Field Robotics
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
