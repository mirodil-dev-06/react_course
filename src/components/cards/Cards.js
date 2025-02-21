import { Container, Box, HStack, Button, Text } from '@chakra-ui/react';
import React, { useEffect, useState, useContext } from 'react';
import { ColorContext } from '../colorContext/ColorContext'; 

const styles = {
  container: {
    maxW: 'lg',
    mx: 'auto',
  },
  box: {
    width: 'full',
    p: '8',
    mt: '8',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: 'none',
    rounded: 'md',
    display: 'flex',
    flexDir: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  timerText: {
    fontSize: '120px',
    fontWeight: '900',
    textAlign: 'center',
    mt: '20px',
    color: 'white',
  },
  startButton: {
    variant: 'solid',
    px: '16',
    py: '6',
    mt: '3',
    fontSize: '20px',
    backgroundColor: '#ffffff',
    color: '#000000',
  },
};

const Timer = ({ time }) => {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return <Text {...styles.timerText}>{formatTime(time)}</Text>;
};

const TimeButton = ({ label, minutes, color, onClick }) => (
  <Button
    variant='ghost'
    p='2'
    color='white'
    fontSize='18px'
    _focus={{ bg: 'rgba(0, 0, 0, 0.15)', color: 'white' }}
    _active={{ bg: 'rgba(0, 0, 0, 0.15)', color: 'white' }}
    onClick={() => onClick(minutes, color)}
  >
    {label}
  </Button>
);

const Cards = () => {
  const [time, setTime] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const { setBackgroundColor } = useContext(ColorContext);

  useEffect(() => {
    let interval;
    if (isRunning && time > 0) {
      interval = setInterval(() => setTime(prevTime => prevTime - 1), 1000);
    } else if (time === 0) {
      setIsRunning(false);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  useEffect(() => {
    document.title = isRunning ? `${formatTime(time)} - playing game` : 'Time is up!';
  }, [time, isRunning]);

  const handleStartPause = () => {
    setIsRunning(prev => !prev);
  };

  const handleSetTime = (minutes, color) => {
    setIsRunning(false);
    const newTime = minutes * 60;
    setTime(newTime);
    setBackgroundColor(color);
    document.title = `${formatTime(newTime)} - playing game`;
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <Container {...styles.container}>
      <Box {...styles.box}>
        <HStack wrap='wrap' gap='6' mx='auto'>
          <TimeButton label="Pomodoro" minutes={25} color='#ba4949' onClick={handleSetTime} />
          <TimeButton label="Short Break" minutes={5} color='#38858a' onClick={handleSetTime} />
          <TimeButton label="Long Break" minutes={15} color='#397097' onClick={handleSetTime} />
        </HStack>

        <Text
          {...styles.timerText}
          transition="opacity 0.3s ease-in-out"
          _hover={{ opacity: 0.8 }}
        >
          {formatTime(time)}
        </Text>

        <Button {...styles.startButton} onClick={handleStartPause}>
          {isRunning ? 'Pause' : 'Start'}
        </Button>
      </Box>
    </Container>
  );
};

export default Cards;