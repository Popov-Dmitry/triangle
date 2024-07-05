import React from "react";
import styles from "./bubble.module.css";
import { joinClassNames } from "@/utils/join-class-names";

const Bubble = ({
  variant = "dark",
  position = "left",
  name,
  text,
  time,
  leftTail,
  rightTail,
  className
}) => {
  return (
    <div className={joinClassNames(
      styles.container,
      variant === "dark" ? styles.dark : styles.purple,
      position === "right" ? styles.right : styles.left,
      leftTail ? styles.leftTail : undefined,
      rightTail ? styles.rightTail : undefined,
      className
    )}>
      {name && (
        <div className={styles.name}>{name}</div>
      )}
      <div className={styles.text}>{text}</div>
      {time && (
        <div className={styles.time}>{time}</div>
      )}
    </div>
  );
};

export default Bubble;