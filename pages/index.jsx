import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Head from 'next/head';
import { 
  Group,
} from '@mantine/core';

const Home = () => {
  return (
    <>
      <Head>
        <title>Russell's Portfolio</title>
        <meta name="description" content="Russell's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Group>
        <Hero />
        <About />
        {/* <Skills /> */}
        {/* <Projects /> */}
        {/* <Contact /> */}
      </Group>
    </>
  );
};

export default Home;
