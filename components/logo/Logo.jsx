import React from "react";
import styles from "./logo.module.css";
import Image from "next/image";
import { joinClassNames } from "@/utils/join-class-names";

const Logo = ({ src, rotated, width, height, className }) => {
  return (
    <div className={joinClassNames(styles.container, className)}>
      <Image
        src="/triangle.svg"
        alt=""
        width={248}
        height={226}
        className={rotated ? styles.rotated : undefined}
      />
      <div className={rotated ? styles.logoRotated : styles.logo}>
        <Image src={src} alt="" width={width || 130} height={height || 130} />
      </div>
    </div>
  );
};

export default Logo;