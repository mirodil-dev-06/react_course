import { Container } from "@chakra-ui/react";
import Nav from './components/nav/Nav'
import Cards from './components/cards/Cards'
import Todo from "./components/todo/Todo";

const App = () => {

  return(
   <Container maxW='xl' margin='auto'>
    <Nav/>
    <Cards/>
    <Todo/>
   </Container>
  )
}

export default App;
