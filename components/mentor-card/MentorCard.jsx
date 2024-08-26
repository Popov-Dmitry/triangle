import React from "react";
import styles from "./mentor-card.module.css";
import Image from "next/image";

const MentorCard = ({ photo, name, position, caption, href }) => (
  <a className={styles.container} href={href} target="_blank">
    <div className={styles.photo}>
      <Image
        src={photo}
        alt={name}
        fill
      />
    </div>
    <div className={styles.texts}>
      <div>{name}</div>
      <div className={styles.jobname}>{position}</div>
    </div>
    {/* <div className={styles.caption}>{caption}</div> */}
  </a>
);

export default MentorCard;