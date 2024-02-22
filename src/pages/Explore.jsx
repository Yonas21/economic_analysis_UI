import  { useState } from 'react';
import { Box, Flex } from "@chakra-ui/react";
import Header from '../components/Header';
import GraphContainer from '../components/GraphContainer';
import TabContainer from '../components/TabContainer';
import StackedAreaChart from '../components/StackedAreaChart';
import { newData } from '../data';
import GeoMap from '../components/GeoMap';
import { geoData, numData,scatter_data } from '../data/geo_data';
import ConnectedScatterplot from '../components/ScatterPlot';


function Explore() {
    const [tab, setTab] = useState(1)
    const [tooltip, setTooltip] = useState({ content: '', visible: false });


    const groupedData = newData.reduce((acc, cur) => {
        const { Year, Sector, CurrentGrossExport } = cur;
        if (!acc[Year]) {
            acc[Year] = { date: Year };
        }
        acc[Year][Sector.toLowerCase()] = (acc[Year][Sector.toLowerCase()] || 0) + parseFloat(CurrentGrossExport.slice(1, -1));
        return acc;
    }, {});
    
    const stackedDataNew = Object.values(groupedData).map(d => {
        const total = Object.values(d).reduce((total, value) => total + (typeof value === 'number' ? value : 0), 0);
        return { ...d, total };
    });
    
    console.log(stackedDataNew);
    console.log("tab======", tab);
    return (
        <Flex direction="column">
            <Header />
            <Flex justifyContent="center">
                <Box>
                  {
                    tab === 1 || tab > 4 ? <GraphContainer />: tab ===2 ?  <GeoMap geoData={geoData} numData={numData} width={1300} height={700}  tooltip={tooltip} setTooltip={setTooltip}/>: tab === 3 ? <StackedAreaChart data={stackedDataNew} width={1200} height={600} tooltip={tooltip} setTooltip={setTooltip}/>:<ConnectedScatterplot width={1500} height={600}  data={scatter_data} />}
                </Box>
                <Box className='w-[500px]'>
                    <TabContainer tab = {tab} setTab = {setTab} />
                </Box>
            </Flex>
        </Flex>
    );
}

export default Explore;
