"use client";

import React from "react";
import styles from "./mentors.module.css";
import { mentors } from "@/data";
import MentorCard from "@/components/mentor-card/MentorCard";
import { useInView } from "react-intersection-observer";
import { joinClassNames } from "@/utils/join-class-names";

const Mentors = () => {
  const { ref, inView, entry } = useInView({ triggerOnce: true });

  return (
    <div className={joinClassNames(styles.mentors, !inView ? styles.hidden : undefined)} ref={ref}>
      {mentors.map((mentor) => (
        <MentorCard key={mentor.name} {...mentor} />
      ))}
    </div>
  );
};

export default Mentors;