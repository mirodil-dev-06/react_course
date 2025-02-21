import { Container, Box, HStack, Button, Text, useBreakpointValue } from '@chakra-ui/react';
import React, { useEffect, useState, useContext } from 'react';
import { ColorContext } from '../colorContext/ColorContext';

// Responsive stil konfiguratsiyalari
const styles = {
  container: {
    maxW: { base: '90%', md: 'lg' }, // Mobil uchun kenglik 100%, desktop uchun 'lg'
    mx: 'auto',
  },
  box: {
    width: 'full',
    p: { base: '4', md: '8' }, // Mobil uchun padding kichikroq
    mt: { base: '4', md: '8' }, // Mobil uchun margin kichikroq
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: 'none',
    rounded: 'md',
    display: 'flex',
    flexDir: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  timerText: {
    fontSize: { base: '60px', md: '120px' }, // Mobil uchun kichikroq shrift
    fontWeight: '900',
    textAlign: 'center',
    mt: { base: '10px', md: '20px' }, // Mobil uchun margin kichikroq
    color: 'white',
  },
  startButton: {
    variant: 'solid',
    px: { base: '8', md: '16' }, // Mobil uchun padding kichikroq
    py: { base: '4', md: '6' }, // Mobil uchun padding kichikroq
    mt: { base: '2', md: '3' }, // Mobil uchun margin kichikroq
    fontSize: { base: '16px', md: '20px' }, // Mobil uchun kichikroq shrift
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

const TimeButton = ({ label, minutes, color, onClick }) => {
  const buttonSize = useBreakpointValue({ base: 'sm', md: 'md' }); // Mobil uchun kichikroq tugma

  return (
    <Button
      variant='ghost'
      p='2'
      color='white'
      fontSize={{ base: '14px', md: '18px' }} // Mobil uchun kichikroq shrift
      _focus={{ bg: 'rgba(0, 0, 0, 0.15)', color: 'white' }}
      _active={{ bg: 'rgba(0, 0, 0, 0.15)', color: 'white' }}
      onClick={() => onClick(minutes, color)}
      size={buttonSize} // Tugma o'lchami
    >
      {label}
    </Button>
  );
};

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
    document.title = isRunning ? `${formatTime(time)} - playing game` : 'Pomofocus';
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
        <HStack wrap='wrap' gap={{ base: '3', md: '6' }} mx='auto'> {/* Mobil uchun gap kichikroq */}
          <TimeButton label="Pomodoro" minutes={25} color='#ba4949' onClick={handleSetTime} />
          <TimeButton label="Short Break" minutes={5} color='#38858a' onClick={handleSetTime} />
          <TimeButton label="Long Break" minutes={15} color='#397097' onClick={handleSetTime} />
        </HStack>
        <Timer time={time} />

        <Button {...styles.startButton} onClick={handleStartPause}>
          {isRunning ? 'Pause' : 'Start'}
        </Button>
      </Box>
    </Container>
  );
};

export default Cards;