import { 
  Anchor,
  Group 
} from '@mantine/core';
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
  return (
    <Group className={styles.navContainer}>
      <Anchor 
        className="home-btn"
        href="/"
      >
        Russell's Portfolio
      </Anchor>
      <Anchor 
        className="resume-btn" 
        href="https://resume.creddle.io/resume/ikjaeu079wo" 
        target="_blank"
      >
        Resume
      </Anchor>
    </Group>
  )
}

export default Navbar;