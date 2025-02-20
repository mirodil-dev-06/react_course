import { Box, IconButton, Flex } from '@chakra-ui/react';
import { BiDotsVertical } from "react-icons/bi";
import React from 'react';

const Nav = () => {
    
    return (
        <Box width='100%' py='4'>
            <Flex gap='3' justify='space-between'>
                <Box>
                    <a href='#' style={{ fontSize: '23px', fontWeight: 'bold', color: '#fff' }}>Pomofocus</a>
                </Box>
                <Box>
                    <IconButton variant='outline' color='white'>
                        <BiDotsVertical />
                    </IconButton>
                </Box>
            </Flex>
        </Box>
    );
}

export default Nav;
