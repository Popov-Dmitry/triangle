"use client";

import React from "react";
import styles from "./mentor-card.module.css";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { joinClassNames } from "@/utils/join-class-names";

const MentorCard = ({ photo, name, position, caption, href }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <a
      className={joinClassNames(styles.container, !inView ? styles.hidden : undefined)}
      ref={ref}
      href={href}
      target="_blank"
    >
      <div className={styles.photo}>
        <Image
          src={photo}
          alt={name}
          fill
          className={styles.cover}
        />
      </div>
      <div className={styles.texts}>
        <div>{name}</div>
        <div className={styles.jobname}>{position}</div>
      </div>
      {/* <div className={styles.caption}>{caption}</div> */}
    </a>
  );
};

export default MentorCard;