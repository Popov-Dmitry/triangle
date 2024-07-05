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
        fill
        className={rotated ? styles.rotated : undefined}
      />
      <div className={rotated ? styles.logoRotated : styles.logo}>
        <Image src={src} alt="" width={width || 150} height={height || 150} />
      </div>
    </div>
  );
};

export default Logo;