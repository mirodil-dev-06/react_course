import React, { useState, useEffect } from 'react';
import { Input, Box, Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { addTodo, editTodo, deleteTodo } from '../../redux/action/action';

const styles = {
  modalContainer: {
    maxW: 'lg',
    p: '6',
    bgColor: 'white',
    borderRadius: 'md',
    boxShadow: 'lg',
  },
  input: {
    placeholder: 'What are you working on?',
    variant: 'flushed',
    fontSize: '25px',
    fontWeight: 'bold',
    color: 'rgb(85, 85, 85)',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    mt: '10',
    gap: '4',
  },
  button: {
    px: '6',
  },
  deleteButton: {
    variant: 'outline',
    colorScheme: 'red',
  },
  cancelButton: {
    variant: 'outline',
  },
  saveButton: {
    variant: 'solid',
  },
};

const Modal = ({ isOpen, closeModal, selectedTodo, isEditMode }) => {
  const [inputValue, setInputValue] = useState(selectedTodo ? selectedTodo.text : '');
  const dispatch = useDispatch();

  useEffect(() => {
    if (isOpen) {
      const savedInputValue = localStorage.getItem('inputValue');
      if (savedInputValue) {
        setInputValue(savedInputValue);
      }
    }
  }, [isOpen]);

  
  useEffect(() => {
    localStorage.setItem('inputValue', inputValue);
  }, [inputValue]);

 
  useEffect(() => {
    if (!isOpen) {
      localStorage.removeItem('inputValue');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    if (inputValue.trim() === '') {
      alert('Please enter a task!');
      return;
    }

    if (isEditMode && selectedTodo) {
      dispatch(editTodo(selectedTodo.id, inputValue));
    } else {
      dispatch(addTodo(inputValue)); 
    }

    setInputValue('');
    closeModal();
  };

  const handleDelete = () => {
    if (selectedTodo) {
      dispatch(deleteTodo(selectedTodo.id));
      closeModal();
    }
  };

  return (
    <Box {...styles.modalContainer}>
      <Box mb='4'>
        <Input
          {...styles.input}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </Box>
      <Box {...styles.buttonContainer}>
        {isEditMode && (
          <Button {...styles.button} {...styles.deleteButton} onClick={handleDelete}>
            Delete
          </Button>
        )}
        <Button {...styles.button} {...styles.cancelButton} onClick={closeModal}>
          Cancel
        </Button>
        <Button {...styles.button} {...styles.saveButton} onClick={handleSave}>
          {isEditMode ? 'Save Changes' : 'Save'} 
        </Button>
      </Box>
    </Box>
  );
};

export default Modal;