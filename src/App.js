import { Box, Container } from "@chakra-ui/react";
import Nav from './components/nav/Nav';
import Cards from './components/cards/Cards';
import Todo from "./components/todo/Todo";
import Info from "./components/info/Info";
import { useContext } from 'react';
import { ColorContext } from './components/colorContext/ColorContext';

const App = () => {
  const { backgroundColor } = useContext(ColorContext);

  return (
    <>
      <Box backgroundColor={backgroundColor} transition="background-color .3s ease-in-out">
        <Container maxW='xl' margin='auto'>
          <Nav />
          <Cards />
          <Todo />
        </Container>
      </Box>
      <Container maxW='xl' margin='auto'>
      <Info />
      </Container>
    </>
  );
};

export default App;