import React from "react";
import styles from "./chat-bubble.module.css";
import Image from "next/image";

const ChatBubble = ({ text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.bubble}>
        <Image src="/bubble.svg" alt="" fill />
      </div>
      <div className={styles.text}>
        {text}
      </div>
    </div>
  );
};

export default ChatBubble;