import { Box, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import GraphHeader from "./GraphHeader";
import Treemap from "./Treemap";
import { json } from 'd3';
import LoadingSpinner from "./LoadingSpinner";
import datajson from "./flare.json";
import PlayIcon from "./PlayIcon";
const GraphContainer = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const activeTabBorderColor = useColorModeValue("blue.500", "blue.200");
    const [jsonData, setJsonData] = useState(null);
    const [data, setData] = useState(null);
    const [colorData, setColorData] = useState([]);
    const [loadingStatus, setLoadingStatus] = useState(true);

    function restructureData(data) {
        const sectors = {};
        data.children.forEach((item) => {
            const sectorName = item.Sector;
            if (!sectors[sectorName]) {
                sectors[sectorName] = [];
            }
            sectors[sectorName].push(item);
        });

        const restructuredData = {
            name: data.name,
            children: Object.keys(sectors).map((sectorName) => ({
                name: sectorName,
                children: sectors[sectorName],
            })),
        };

        return restructuredData;
    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataset = datajson;
                const restructuredData = restructureData(dataset);
                restructuredData.children.forEach(parent => {
                    const sumOfShares = parent.children.reduce((sum, child) => sum + child.Share, 0);
                    parent.sumOfShares = sumOfShares;
                });

                restructuredData.children.sort((a, b) => b.sumOfShares - a.sumOfShares);

                restructuredData.children.forEach(parent => {
                    delete parent.sumOfShares;
                });

                // console.log(restructuredData);

                setLoadingStatus(false);
                setData(restructuredData);
                setColorData([...renderColorData(restructuredData.children)])
            } catch (error) {
                setLoadingStatus(false);
                setData(null);
                setColorData([]);
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    function renderColorData(categories) {
        let array = categories.reduce((acc, child, i) => {
            acc.push(i * 20);
            return acc;
        }, []);
        array = shuffleArray(array);
        return array;
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
    const handleTabChange = (index) => {
        setSelectedTab(index);
    };
    const years = ['2022', '2023', '2024', '2025', '2026'];
    return (
        <Box flex="1" bg="white" mt={4} mb={4} p="4" position="fixed" left="0" width="890px" height="790px">
            <GraphHeader />
            {loadingStatus && !data ? <LoadingSpinner /> : data ? <Treemap data={data} colorData={colorData} /> : <h1>Data not found</h1>}
            <PlayIcon years={years} />
        </Box>
    );
};

export default GraphContainer;
