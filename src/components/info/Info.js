import React from 'react';
import { Box, Container, Text, Link, List } from '@chakra-ui/react';

const styles = {
  container: {
    maxW: { base: '90%', md: 'lg' },
    mx: 'auto',
    // maxW='xl' margin='auto' 
  },
  heading: {
    fontSize: {xl: '30px', lg: '25px', md: '20px', sm: '10px'},
    fontWeight: 'bold',
    color: '#541c1f',
  },
  subHeading: {
    color: '#541c1f',
    fontWeight: 'black',
    fontSize: {xl: '25px', lg: '20px', md: '18px', sm: '15px'},
    mt: '10',
    position: 'relative',
  },
  divider: {
    w: '30px',
    h: '5px',
    content: '""',
    backgroundColor: '#ba4949',
    mt: '4',
  },
  paragraph: {
    lineHeight: '30px',
    mt: '8',
    fontSize: '18px',
  },
  list: {
    listStyleType: 'decimal',
    mt: '8',
    fontSize: '18px',
    lineHeight: '40px',
    pl: '8',
  },
  link: {
    color: '#ba4949',
    fontWeight: 'black',
  },
};

const Heading = ({ children }) => (
  <Text {...styles.heading}>{children}</Text>
);

const SubHeading = ({ children }) => (
  <Text {...styles.subHeading}>{children}</Text>
);

const Divider = () => (
  <Box {...styles.divider} />
);

const Paragraph = ({ children }) => (
  <Text {...styles.paragraph}>{children}</Text>
);


const Info = () => {
  const items = [
    'Add tasks to work on today',
    'Set estimate pomodoros (1 = 25min of work) for each tasks',
    'Select a task to work on',
    'Start timer and focus on the task for 25 minutes',
    'Take a break for 5 minutes when the alarm ring',
    'Iterate 3-5 until you finish the tasks',
  ];



  return (
    <Container {...styles.container}>
    <Box py="10">
      <Heading>An online Pomodoro Timer to boost your productivity</Heading>

      <SubHeading>What is Pomofocus?</SubHeading>
      <Divider />
      <Paragraph>
        Pomofocus is a customizable pomodoro timer that works on desktop & mobile browser. The aim of this app is to help you focus on any task you are working on, such as study, writing, or coding. This app is inspired by{' '}
        <Link href="https://www.pomodorotechnique.com/" {...styles.link}>
          Pomodoro Technique
        </Link>{' '}
        which is a time management method developed by Francesco Cirillo.
      </Paragraph>

      <SubHeading>What is Pomodoro Technique?</SubHeading>
      <Divider />
      <Paragraph>\
        The Pomodoro Technique is created by Francesco Cirillo for a more productive way to work and study. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student. -{' '}
        <Link href="https://en.wikipedia.org/wiki/Pomodoro_Technique" {...styles.link}>
          Wikipedia
        </Link>
      </Paragraph>

      <SubHeading>How to use the Pomodoro Timer?</SubHeading>
      <Divider />
      <List.Root as="ol" listStyle="decimal" style={styles.list}>
      {items.map((item, index) => (
        <List.Item key={index} _marker={{ color: "inherit" }}>
          {item}
        </List.Item>
      ))}
    </List.Root>
    </Box>
    </Container>
  );
};

export default Info;