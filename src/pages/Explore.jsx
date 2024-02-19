// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Box, Flex } from "@chakra-ui/react";
import Header from '../components/Header';
import GraphContainer from '../components/GraphContainer'; // Assuming you have a GraphContainer component
import TabContainer from '../components/TabContainer';
import StackedAreaChart from '../components/StackedAreaChart';
import * as d3 from 'd3'
import { stacked_data } from '../data';

function Explore() {
    const [data, setData] = useState(() => d3.ticks(-2, 2, 200).map(Math.sin));
    const listData = [
  {
    year: 2000,
    aData: 50,
    bData: 300,
    cData:500,
  },
  {
    year: 2001,
    aData: 150,
    bData: 50,    cData:800,

  },
  {
    year: 2002,
    aData: 200,
    bData: 100,    cData:900,

  },
  {
    year: 2003,
    aData: 130,
    bData: 50,    cData:560,

  },
  {
    year: 2004,
    aData: 240,
    bData: 80,    cData:800,

  },
  {
    year: 2005,
    aData: 380,
    bData: 10,    cData:600,

  },
  {
    year: 2006,
    aData: 420,
    bData: 200,   
    cData:1050,

  }
];

  function onMouseMove(event) {
    const [x, y] = d3.pointer(event);
    setData(data.slice(-200).concat(Math.atan2(x, y)));
  }
    return (
        <Flex direction="column">
            <Header />
            <Flex>
                <Box flex="1" onMouseMove={onMouseMove}>
                    {/* <GraphContainer /> */}
                     <StackedAreaChart  data={listData} width={1000} height={600}/>
                </Box>
                <Box className='w-[500px]'>
                    <TabContainer />
                </Box>
                {/* <Box flex="1" onMouseMove={onMouseMove} >
                    <LinePlot  data={data}/>
                </Box> */}
            </Flex>
        </Flex>
    );
}

export default Explore;
