import { Container, Text, Box, IconButton, Separator, Button } from '@chakra-ui/react';
import { BiDotsVertical } from "react-icons/bi";
import { FaCirclePlus } from "react-icons/fa6";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, toggleTodo } from '../../redux/action/action';
import Modal from '../modal/Modal';

function Todo() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todo?.todos || []);
  console.log(todos)

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Container maxW='lg' mx='auto' py='8'>
      <Text fontSize='18px' textAlign='center' color='#333'>#{todos.length}</Text>
      <Text fontSize='20px' textAlign='center' color='white'>Time to focus!</Text>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Text fontSize='20px' fontWeight='bold' color='#fff'>
          Tasks
        </Text>
        <Box>
          <IconButton variant='outline' color='white'>
            <BiDotsVertical />
          </IconButton>
        </Box>
      </Box>
      <Separator size="lg" mt='3' />
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <span onClick={() => dispatch(toggleTodo(todo.id))}>
              {todo.text}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>O'chirish</button>
          </li>
        ))}
      </ul>
      <div className="todo-form">
        <Modal isOpen={isOpen} closeModal={closeModal} />
        <Button
          onClick={openModal}
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
      </div>
    </Container>
  );
}

export default Todo;
