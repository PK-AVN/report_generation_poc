import Image from "next/image";
import React from "react";
import styles from "./header.module.css";

interface HeaderProps {
  imageSrc: string;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ imageSrc, title }): JSX.Element => {
  return (
    <div className={styles["report-header"]}>
      <h1 className={styles["report-title"]}>{title}</h1>
      <Image
        src={imageSrc}
        alt="Report Logo"
        className={styles["report-logo"]}
      />
    </div>
  );
};

export default Header;
