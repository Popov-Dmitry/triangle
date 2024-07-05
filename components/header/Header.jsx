import React from "react";
import styles from "./header.module.css";
import { menuItems } from "@/data";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.container}>
      {menuItems.map((item) => (
        <Link key={item.title} href={item.link} className={styles.link}>
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default Header;