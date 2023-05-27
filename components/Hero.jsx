import {
  ActionIcon,
  Group,
  Title,
  Text,
  Image,
  createStyles,
} from '@mantine/core';
// import styles from "../styles/Hero.module.css"

const useStyles = createStyles((theme) => ({
  heroContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
    // border: "1px solid red",
    // padding: "1rem 2rem",
  },
  title: {

  },
  socialIcons: {

  }
}));

const Hero = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.heroContainer}>
      {/* <Image className="profile-img" mt="1rem" mx="auto" width={300} height={300} src='../images/mii_avatar.jpg' alt="Russell's personal headshot" /> */}
      <Title>Hey, I'm Russell 👋</Title>
      <Text>
        I'm a software developer based in Montreal, Canada. I specialize in building (and occasionally designing) exceptional websites, applications, and everything in between.
      </Text>
      {/* <Group className={classes.socialIcons}>
        <ActionIcon>
          <i className="fa-brands fa-twitter"></i>
        </ActionIcon>
        <ActionIcon>
          <i className="fa-brands fa-github"></i>
        </ActionIcon>
        <ActionIcon>
          <i className="fa-brands fa-linkedin"></i>
        </ActionIcon>
      </Group> */}
    </div>
  )
}

export default Hero;