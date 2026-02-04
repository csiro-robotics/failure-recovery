import React from "react";
import styles from "../../Common.module.css";
import AuthorsBar from "../AuthorsBar/AuthorsBar";

const Header: React.FC = () => {
  const authors = [
    {
      firstName: "Ethan",
      lastName: "Griffiths",
      university: "QUT, CSIRO Data61",
      link: "https://scholar.google.com/citations?user=a6BiSqoAAAAJ&hl=en",
    },
    {
      firstName: "Maryam",
      lastName: "Haghighat",
      university: "QUT",
      link: "https://www.qut.edu.au/about/our-people/academic-profiles/maryam.haghighat",
    },
    {
      firstName: "Simon",
      lastName: "Denman",
      university: "QUT",
      link: "https://www.qut.edu.au/about/our-people/academic-profiles/s.denman",
    },
    {
      firstName: "Clinton",
      lastName: "Fookes",
      university: "QUT",
      link: "https://www.qut.edu.au/about/our-people/academic-profiles/c.fookes",
    },
    {
      firstName: "Milad",
      lastName: "Ramezani",
      university: "CSIRO Data61",
      link: "https://people.csiro.au/r/m/milad-ramezani",
    },
  ];
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
