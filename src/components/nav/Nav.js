import { Box, IconButton, Flex, Separator } from '@chakra-ui/react';
import { BiDotsVertical } from 'react-icons/bi';
import React from 'react';

const styles = {
  navContainer: {
    width: '100%',
    py: '4',
  },
  flexContainer: {
    gap: '3',
    justify: 'space-between',
  },
  logo: {
    fontSize: '23px',
    fontWeight: 'bold',
    color: '#fff',
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
    <Box {...styles.navContainer}>
      <Flex {...styles.flexContainer}>
        <Box>
          <a href="#" style={styles.logo}>
            Pomofocus
          </a>
        </Box>
        <Box>
          <IconButton {...styles.iconButton}>
            <BiDotsVertical />
          </IconButton>
        </Box>
      </Flex>
      <Separator {...styles.separator} />
    </Box>
  );
};

export default Nav;