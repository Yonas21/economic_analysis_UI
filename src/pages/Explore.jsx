// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Box, Flex } from "@chakra-ui/react";
import Header from '../components/Header';
import GraphContainer from '../components/GraphContainer'; // Assuming you have a GraphContainer component
import TabContainer from '../components/TabContainer';

function Explore() {
    return (
        <Flex direction="column">
            <Header />
            <Flex>
                <Box flex="1">
                    <GraphContainer />
                </Box>
                <Box w="500px">
                    <TabContainer />
                </Box>
            </Flex>
        </Flex>
    );
}

export default Explore;
