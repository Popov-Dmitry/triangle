import React from "react";
import styles from "./mentors.module.css";
import { mentors } from "@/data";
import MentorCard from "@/components/mentor-card/MentorCard";

const Mentors = () => {
  return (
    <div className={styles.mentors}>
      {mentors.map((mentor) => (
        <MentorCard key={mentor.name} {...mentor} />
      ))}
    </div>
  );
};

export default Mentors;