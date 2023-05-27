import { 
  Anchor,
  Group,
  createStyles
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  navContainer: {
    display: "flex",
    justifyContent: "space-between",
    border: "1px solid red",
    padding: "1rem 2rem",
  }
}));

const Navbar = () => {
  const { classes } = useStyles();

  return (
    <Group className={classes.navContainer}>
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