import Image from "next/image";
import {
  Anchor,
  Group,
  Title,
  Text,
} from '@mantine/core';
import styles from "../styles/Hero.module.css"

const Hero = () => {
  return (
    <div className="hero-container">
      {/* <Image src='/images/profile.jpeg' className="profile-img" width={300} height={300} alt="Russell's personal headshot" /> */}
      <Title align="center">Hey, I'm Russell 👋</Title>
      <Text ta="center">
        I'm a software developer based in Montreal, Canada. I specialize in building (and occasionally designing)
        exceptional websites, applications, and everything in between.
      </Text>
      <Group className={styles.socialIcons} position="center">
        <Anchor
          href="https://twitter.com/"
          aria-label="Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-twitter"></i>
        </Anchor>
        <Anchor
          href="https://github.com/russellcape"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </Anchor>
        <Anchor
          href="https://www.linkedin.com/in/russellcape/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </Anchor>
      </Group>
    </div>
  )
}

export default Hero;