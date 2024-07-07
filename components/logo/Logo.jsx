"use client";

import React from "react";
import styles from "./logo.module.css";
import Image from "next/image";
import { joinClassNames } from "@/utils/join-class-names";
import useResponsive from "@/hooks/useResponsive";

const Logo = ({ src, rotated, width, height, className }) => {
  const { isDesktop } = useResponsive();

  return (
    <div className={joinClassNames(styles.container, className)}>
      <Image
        src="/triangle.svg"
        alt=""
        fill
        className={rotated ? styles.rotated : undefined}
      />
      <div className={rotated ? styles.logoRotated : styles.logo}>
        <Image src={src} alt="" width={width || (isDesktop ? 150 : 100)} height={height || (isDesktop ? 150 : 100)} />
      </div>
    </div>
  );
};

export default Logo;