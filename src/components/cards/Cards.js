import { Container, Box, HStack, Button, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const Cards = () => {
  const [time, setTime] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [initialTime, setInitialTime] = useState(25 * 60);

  useEffect(() => {
    let interval;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const handleStartPause = () => {
    setIsRunning(!isRunning);
    if (!isRunning) {
      document.title = `${formatTime(time)} - playing game`;
    } else {
      document.title = '';
    }
  }

  const handleSetTime = (minutes, color) => {
    setIsRunning(false);
    setTime(minutes * 60);
    setInitialTime(minutes * 60);
    document.title = `${minutes} - playing game`;
    setTimeout(() => {
      document.body.style.transition = "background-color .3s ease-in-out";
      document.body.style.backgroundColor = color;
    }, 200); // 200 millisoniyadan keyin fon rangini o'zgartirish
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  return (
    <Container maxW='lg' mx='auto'>
      <Box
        width='full'
        p='8'
        mt='8'
        backgroundColor="rgba(255, 255, 255, 0.1)"
        border='none'
        rounded='md'
        display='flex'
        flexDir='column'
        alignItems='center'
        justifyContent='space-between'
      >
        <HStack wrap="wrap" gap="6" mx='auto'>
          <Button
            variant="ghost"
            p='2'
            color='white'
            fontSize='18px'
            _focus={{ bg: 'rgba(0, 0, 0, 0.15)', color: 'white' }}
            _active={{ bg: 'rgba(0, 0, 0, 0.15)', color: 'white' }}
            onClick={() => handleSetTime(25, '#ba4949')}
          >
            Pomodoro
          </Button>
          <Button
            variant="ghost"
            p='2'
            color='white'
            fontSize='18px'
            _focus={{ bg: 'rgba(0, 0, 0, 0.15)', color: 'white' }}
            _active={{ bg: 'rgba(0, 0, 0, 0.15)', color: 'white' }}
            onClick={() => handleSetTime(5, '#38858a')}
          >
            Short Break
          </Button>
          <Button
            variant="ghost"
            p='2'
            color='white'
            fontSize='18px'
            _focus={{ bg: 'rgba(0, 0, 0, 0.15)', color: 'white' }}
            _active={{ bg: 'rgba(0, 0, 0, 0.15)', color: 'white' }}
            onClick={() => handleSetTime(15, '#397097')}
          >
            Long Break
          </Button>
        </HStack>

        <Text fontSize='120px' fontWeight='900' textAlign='center' mt='20px' color='white'>{formatTime(time)}</Text>
        <Button
          variant='solid'
          px='16' py='6'
          mt='3'
          fontSize='20px'
          backgroundColor='#ffffff'
          color='#000000'
          onClick={handleStartPause}
        >{isRunning ? 'Pause' : 'Start'}</Button>
      </Box>
    </Container>
  );
}

export default Cards;
