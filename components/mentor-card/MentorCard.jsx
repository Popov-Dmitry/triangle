import React from "react";
import styles from "./mentor-card.module.css";
import Image from "next/image";

const MentorCard = ({ photo, name, position, caption }) => {
  return (
    <div className={styles.container}>
      <div className={styles.photo}>
        <Image
          src={photo}
          alt={name}
          fill
        />
      </div>
      <div className={styles.texts}>
        <div>{name}</div>
        <div>{position}</div>
      </div>
      <div className={styles.caption}>{caption}</div>
    </div>
  );
};

export default MentorCard;