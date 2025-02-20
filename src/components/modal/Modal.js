import React, { useState } from 'react';
import { Input, Card, Button, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from '../../redux/action/action';

const Modal = ({ isOpen, closeModal }) => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todo?.todos || []);

  if (!isOpen) return null;

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      dispatch(addTodo(inputValue));
      setInputValue('');
      closeModal();
    }
  };
  return (
    <Card.Root maxW="lg" p='6'>
      <Card.Body gap="2">
        <Input
          placeholder="What are you working on?"
          variant="flushed"
          fontSize='25px'
          fontWeight='bold'
          color='rgb(85, 85, 85)'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {todos.map(todo => (
          <Card key={todo.id} mt="3" p="3" borderWidth="1px" borderRadius="lg" display="flex" justifyContent="space-between" alignItems="center">
            <Text fontSize="20px" fontWeight="bold" textDecoration={todo.completed ? 'line-through' : 'none'}>
              {todo.text}
            </Text>
            <div>
              <Button size="sm" onClick={() => dispatch(toggleTodo(todo.id))}>{todo.completed ? 'Unmark' : 'Complete'}</Button>
              <Button size="sm" ml="3" onClick={() => dispatch(deleteTodo(todo.id))}>Delete</Button>
            </div>
          </Card>
        ))}
      </Card.Body>
      <Card.Footer justifyContent="flex-end" mt='10'>
        <Button variant="outline" px='6' onClick={closeModal}>Cancel</Button>
        <Button px='6' onClick={handleAddTodo}>Save</Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default Modal;