// import Link from "next/link";
import { Anchor } from '@mantine/core';
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <div className="logo">
        <Anchor 
          className="home-btn"
          href="/"
        >
          Russell's Portfolio
        </Anchor>
      </div>
      <Anchor 
        className="resume-btn" 
        href="https://resume.creddle.io/resume/ikjaeu079wo" 
        target="_blank"
      >
        Resume
      </Anchor>
    </div>
  )
}

export default Navbar;