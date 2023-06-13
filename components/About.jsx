import Image from "next/image";
import { 
  Title,
  Text,
  Container,
  Group,
  Flex,
  createStyles,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  flexAbout: {
    width: "80%",
  },
}));

const About = () => {
  const { classes } = useStyles();

  return (
    <div className="about-container">
      <Title order={2}>About Me</Title>
      <Flex className={classes.flexAbout}>
        <Group className="about-text">
          <Text>
            As a developer, I have always been passionate about creating elegant and effective solutions to
            complex problems. I have a strong foundation in software development, with a focus on web
            technologies such as Python and JavaScript. I enjoy working on both the front-end and
            back-end of applications, and I am always looking for ways to optimize performance, improve user
            experience, and ensure the highest level of code quality.
          </Text>
          <Text>
            Throughout my career, I have worked on a wide range of projects, from simple static websites to
            complex enterprise-level applications. I have experience with multiple languages such as JavaScript 
            and Python and I am versed with a variety of development tools and frameworks, including Django Rest 
            Framework, React, Next.js, Node.js and Docker. I am always eager to learn and explore new technologies, 
            and I am constantly seeking out opportunities to improve my skills and knowledge.
          </Text>
        </Group>
        <div className="about-img">
          {/* <Image src='/images/about.jpeg' className="profile-img" width={300} height={500} alt="About Me Image"/> */}
        </div>
      </Flex>
    </div>
  )
}

export default About;