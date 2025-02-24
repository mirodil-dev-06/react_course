import React, { useState } from 'react';
import { Box, Flex, Separator } from '@chakra-ui/react';
import { BrowserRouter as Router, Link } from 'react-router-dom';


const styles = {
  navContainer: {
    width: '100%',
    py: '4',
  },
  flexContainer: {
    gap: '3',
    justify: 'space-between',
  },
  logoLink: {
    fontSize: '23px',
    fontWeight: 'bold',
    color: '#fff',
    textDecoration: 'none',
  },
  separator: {
    size: 'lg',
    mt: '4',
  },
  iconButton: {
    variant: 'outline',
    color: 'white',
  },
};

const Nav = () => {

  return (
    <Router>
      <Box {...styles.navContainer}>
        <Flex {...styles.flexContainer}>
          <Box>
            <Link to="/" style={styles.logoLink}>
              Pomofocus
            </Link>
          </Box>
          <Box>
        


          </Box>
        </Flex>
        <Separator {...styles.separator} />
      </Box>
    </Router>
  );
};

export default Nav;
