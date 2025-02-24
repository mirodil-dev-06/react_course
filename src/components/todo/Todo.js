import React, { useState, useEffect } from 'react';
import { Container, Flex, Text, Box, IconButton, Separator, Button, List } from '@chakra-ui/react';
import { BiDotsVertical } from "react-icons/bi";
import { FaCirclePlus } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { toggleTodo } from '../../redux/action/action';
import Modal from '../modal/Modal';
import { FaCheck } from "react-icons/fa6";

const styles = {
  container: {
    maxW: { base: '90%', md: 'lg' },
    mx: 'auto',
  }
};

function Todo() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null); 
  const [isEditMode, setIsEditMode] = useState(false);
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todo?.todos || []);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    dispatch({ type: 'SET_TODOS', payload: savedTodos });
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const openModal = (todo = null) => {
    setSelectedTodo(todo); 
    setIsEditMode(!!todo); 
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedTodo(null); 
    setIsEditMode(false); 
  };

  return (
    <Container maxW='lg' mx='auto' py='8' {...styles.container}>
      <Text fontSize='20px' textAlign='center' color='white'>Time to focus!</Text>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Text fontSize='20px' fontWeight='bold' color='#fff'>
          Tasks
        </Text>
        <Box>
      <Text fontSize='18px' textAlign='center' color='#333'>#{todos.length}</Text>
        </Box>
      </Box>
      <Separator size="lg" mt='3' />

      <List.Root mt='5' listStyle='none' gap='10px'>
        {todos.map((todo) => (
          <List.Item
            w='full'
            p='4'
            bgColor='#ffffff'
            rounded='sm'
            borderLeft='6px solid rgb(34, 34, 34)'
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            gap='10px'
            fontSize='18px'
            fontWeight='bolder'
            color={todo.completed ? '#ba4949' : '#000000'}
            key={todo.id}>
            <Flex alignItems='center' gap='15px'>
              <IconButton rounded="50%" onClick={() => dispatch(toggleTodo(todo.id))}>
                <FaCheck />
              </IconButton>
              <Text
                onClick={() => openModal(todo)} 
                textDecoration={todo.completed ? 'line-through' : 'none'}>
                {todo.text}
              </Text>
            </Flex>
            <IconButton onClick={() => openModal(todo)}><BiDotsVertical /></IconButton>
          </List.Item>
        ))}
      </List.Root>

      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        selectedTodo={selectedTodo}
        isEditMode={isEditMode}
      />

      <Button
        mt='5'
        onClick={() => openModal()}
        width='100%'
        py='7'
        backgroundColor='rgba(0, 0, 0, 0.15)'
        border='dashed'
        borderColor='rgba(255, 255, 255, 0.4)'
        borderRadius='8px'
        color='rgba(255, 255, 255, 0.67)'
      >
        <FaCirclePlus />
        Add Tasks
      </Button>
    </Container>
  );
}

export default Todo;
