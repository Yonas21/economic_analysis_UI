import React from 'react';
import { Box, Flex } from "@chakra-ui/react";
import Header from '../components/Header';
import GraphContainer from '../components/GraphContainer';
import TabContainer from '../components/TabContainer';
import * as d3 from 'd3';
import StackedAreaChart from '../components/StackedAreaChart';

function Explore() {

    const newData = [
        {
          "Name": "Textiles, garments, footwear and furniture",
          "Code": "0 HS92",
          "Year": 1995,
          "CurrentGrossExport": "$6.53B",
          "Sector": "Textiles"
        },
        {
          "Name": "Textiles, garments, footwear and furniture",
          "Code": "0 HS92",
          "Year": 1996,
          "CurrentGrossExport": "$8.27B",
          "Sector": "Textiles"
        },
        {
          "Name": "Textiles, garments, footwear and furniture",
          "Code": "0 HS92",
          "Year": 1997,
          "CurrentGrossExport": "$10.8B",
          "Sector": "Textiles"
        },
        {
          "Name": "Textiles, garments, footwear and furniture",
          "Code": "0 HS92",
          "Year": 1998,
          "CurrentGrossExport": "$12.7B",
          "Sector": "Textiles"
        },
        {
          "Name": "Textiles, garments, footwear and furniture",
          "Code": "0 HS92",
          "Year": 1999,
          "CurrentGrossExport": "$14.9B",
          "Sector": "Textiles"
        },
        {
          "Name": "Textiles, garments, footwear and furniture",
          "Code": "0 HS92",
          "Year": 2000,
          "CurrentGrossExport": "$16.0B",
          "Sector": "Textiles"
        },
        {
          "Name": "Textiles, garments, footwear and furniture",
          "Code": "0 HS92",
          "Year": 2001,
          "CurrentGrossExport": "$15.7B",
          "Sector": "Textiles"
        },
        {
          "Name": "Textiles, garments, footwear and furniture",
          "Code": "0 HS92",
          "Year": 2002,
          "CurrentGrossExport": "$15.9B",
          "Sector": "Textiles"
        },
        {
          "Name": "Textiles, garments, footwear and furniture",
          "Code": "0 HS92",
          "Year": 2003,
          "CurrentGrossExport": "$15.5B",
          "Sector": "Textiles"
        },
        {
          "Name": "Textiles, garments, footwear and furniture",
          "Code": "0 HS92",
          "Year": 2004,
          "CurrentGrossExport": "$15.7B",
          "Sector": "Textiles"
        },
        {
          "Name": "Textiles, garments, footwear and furniture",
          "Code": "0 HS92",
          "Year": 2005,
          "CurrentGrossExport": "$15.2B",
          "Sector": "Textiles"
        },
        {
          "Name": "Textiles, garments, footwear and furniture",
          "Code": "0 HS92",
          "Year": 2006,
          "CurrentGrossExport": "$14.7B",
          "Sector": "Textiles"
        },
        {
          "Name": "Textiles, garments, footwear and furniture",
          "Code": "0 HS92",
          "Year": 2007,
          "CurrentGrossExport": "$13.9B",
          "Sector": "Textiles"
        },
        {
          "Name": "Textiles, garments, footwear and furniture",
          "Code": "0 HS92",
          "Year": 2008,
          "CurrentGrossExport": "$12.7B",
          "Sector": "Textiles"
        },
        {
          "Name": "Textiles, garments, footwear and furniture",
          "Code": "0 HS92",
          "Year": 2009,
          "CurrentGrossExport": "$10.4B",
          "Sector": "Textiles"
        },
        {
          "Name": "Textiles, garments, footwear and furniture",
          "Code": "0 HS92",
          "Year": 2010,
          "CurrentGrossExport": "$13.3B",
          "Sector": "Textiles"
        },
        {
          "Name": "Textiles, garments, footwear and furniture",
          "Code": "0 HS92",
          "Year": 2011,
          "CurrentGrossExport": "$14.7B",
          "Sector": "Textiles"
        },
        {
          "Name": "Textiles, garments, footwear and furniture",
          "Code": "0 HS92",
          "Year": 2012,
          "CurrentGrossExport": "$16.3B",
          "Sector": "Textiles"
        },
        {
          "Name": "Textiles, garments, footwear and furniture",
          "Code": "0 HS92",
          "Year": 2013,
          "CurrentGrossExport": "$17.3B",
          "Sector": "Textiles"
        },
        {
          "Name": "Textiles, garments, footwear and furniture",
          "Code": "0 HS92",
          "Year": 2014,
          "CurrentGrossExport": "$18.3B",
          "Sector": "Textiles"
        },
        {
          "Name": "Textiles, garments, footwear and furniture",
          "Code": "0 HS92",
          "Year": 2015,
          "CurrentGrossExport": "$19.2B",
          "Sector": "Textiles"
        },
        {
          "Name": "Textiles, garments, footwear and furniture",
          "Code": "0 HS92",
          "Year": 2016,
          "CurrentGrossExport": "$19.7B",
          "Sector": "Textiles"
        },
        {
          "Name": "Textiles, garments, footwear and furniture",
          "Code": "0 HS92",
          "Year": 2017,
          "CurrentGrossExport": "$18.4B",
          "Sector": "Textiles"
        },
        {
          "Name": "Textiles, garments, footwear and furniture",
          "Code": "0 HS92",
          "Year": 2018,
          "CurrentGrossExport": "$19.1B",
          "Sector": "Textiles"
        },
        {
          "Name": "Textiles, garments, footwear and furniture",
          "Code": "0 HS92",
          "Year": 2019,
          "CurrentGrossExport": "$18.4B",
          "Sector": "Textiles"
        },
        {
          "Name": "Textiles, garments, footwear and furniture",
          "Code": "0 HS92",
          "Year": 2020,
          "CurrentGrossExport": "$16.1B",
          "Sector": "Textiles"
        },
        {
          "Name": "Textiles, garments, footwear and furniture",
          "Code": "0 HS92",
          "Year": 2021,
          "CurrentGrossExport": "$19.5B",
          "Sector": "Textiles"
        },
        {
          "Name": "Vegetables, animals, wood and paper",
          "Code": "1 HS92",
          "Year": 1995,
          "CurrentGrossExport": "$7.47B",
          "Sector": "Agriculture"
        },
        {
          "Name": "Vegetables, animals, wood and paper",
          "Code": "1 HS92",
          "Year": 1996,
          "CurrentGrossExport": "$7.94B",
          "Sector": "Agriculture"
        },
        {
          "Name": "Vegetables, animals, wood and paper",
          "Code": "1 HS92",
          "Year": 1997,
          "CurrentGrossExport": "$8.74B",
          "Sector": "Agriculture"
        },
        {
          "Name": "Vegetables, animals, wood and paper",
          "Code": "1 HS92",
          "Year": 1998,
          "CurrentGrossExport": "$9.40B",
          "Sector": "Agriculture"
        },
        {
          "Name": "Vegetables, animals, wood and paper",
          "Code": "1 HS92",
          "Year": 1999,
          "CurrentGrossExport": "$9.66B",
          "Sector": "Agriculture"
        },
        {
          "Name": "Vegetables, animals, wood and paper",
          "Code": "1 HS92",
          "Year": 2000,
          "CurrentGrossExport": "$9.94B",
          "Sector": "Agriculture"
        },
        {
          "Name": "Vegetables, animals, wood and paper",
          "Code": "1 HS92",
          "Year": 2001,
          "CurrentGrossExport": "$9.91B",
          "Sector": "Agriculture"
        },
        {
          "Name": "Vegetables, animals, wood and paper",
          "Code": "1 HS92",
          "Year": 2002,
          "CurrentGrossExport": "$10.3B",
          "Sector": "Agriculture"
        },
        {
          "Name": "Vegetables, animals, wood and paper",
          "Code": "1 HS92",
          "Year": 2003,
          "CurrentGrossExport": "$11.0B",
          "Sector": "Agriculture"
        },
        {
          "Name": "Vegetables, animals, wood and paper",
          "Code": "1 HS92",
          "Year": 2004,
          "CurrentGrossExport": "$12.5B",
          "Sector": "Agriculture"
        },
        {
          "Name": "Vegetables, animals, wood and paper",
          "Code": "1 HS92",
          "Year": 2005,
          "CurrentGrossExport": "$14.2B",
          "Sector": "Agriculture"
        },
        {
          "Name": "Vegetables, animals, wood and paper",
          "Code": "1 HS92",
          "Year": 2006,
          "CurrentGrossExport": "$16.0B",
          "Sector": "Agriculture"
        },
        {
          "Name": "Vegetables, animals, wood and paper",
          "Code": "1 HS92",
          "Year": 2007,
          "CurrentGrossExport": "$17.5B",
          "Sector": "Agriculture"
        },
        {
          "Name": "Vegetables, animals, wood and paper",
          "Code": "1 HS92",
          "Year": 2008,
          "CurrentGrossExport": "$19.1B",
          "Sector": "Agriculture"
        },
        {
          "Name": "Vegetables, animals, wood and paper",
          "Code": "1 HS92",
          "Year": 2009,
          "CurrentGrossExport": "$18.7B",
          "Sector": "Agriculture"
        },
        {
          "Name": "Vegetables, animals, wood and paper",
          "Code": "1 HS92",
          "Year": 2010,
          "CurrentGrossExport": "$22.0B",
          "Sector": "Agriculture"
        },
        {
          "Name": "Vegetables, animals, wood and paper",
          "Code": "1 HS92",
          "Year": 2011,
          "CurrentGrossExport": "$26.0B",
          "Sector": "Agriculture"
        },
        {
          "Name": "Vegetables, animals, wood and paper",
          "Code": "1 HS92",
          "Year": 2012,
          "CurrentGrossExport": "$26.9B",
          "Sector": "Agriculture"
        },
        {
          "Name": "Vegetables, animals, wood and paper",
          "Code": "1 HS92",
          "Year": 2013,
          "CurrentGrossExport": "$29.0B",
          "Sector": "Agriculture"
        },
        {
          "Name": "Vegetables, animals, wood and paper",
          "Code": "1 HS92",
          "Year": 2014,
          "CurrentGrossExport": "$30.7B",
          "Sector": "Agriculture"
        },
        {
          "Name": "Vegetables, animals, wood and paper",
          "Code": "1 HS92",
          "Year": 2015,
          "CurrentGrossExport": "$33.0B",
          "Sector": "Agriculture"
        },
        {
          "Name": "Vegetables, animals, wood and paper",
          "Code": "1 HS92",
          "Year": 2016,
          "CurrentGrossExport": "$35.5B",
          "Sector": "Agriculture"
        },
        {
          "Name": "Vegetables, animals, wood and paper",
          "Code": "1 HS92",
          "Year": 2017,
          "CurrentGrossExport": "$36.3B",
          "Sector": "Agriculture"
        },
        {
          "Name": "Vegetables, animals, wood and paper",
          "Code": "1 HS92",
          "Year": 2018,
          "CurrentGrossExport": "$39.2B",
          "Sector": "Agriculture"
        },
        {
          "Name": "Vegetables, animals, wood and paper",
          "Code": "1 HS92",
          "Year": 2019,
          "CurrentGrossExport": "$41.5B",
          "Sector": "Agriculture"
        },
        {
          "Name": "Vegetables, animals, wood and paper",
          "Code": "1 HS92",
          "Year": 2020,
          "CurrentGrossExport": "$43.6B",
          "Sector": "Agriculture"
        },
        {
          "Name": "Vegetables, animals, wood and paper",
          "Code": "1 HS92",
          "Year": 2021,
          "CurrentGrossExport": "$49.2B",
          "Sector": "Agriculture"
        },
        {
          "Name": "Stone, glass and ceramics",
          "Code": "2 HS92",
          "Year": 1995,
          "CurrentGrossExport": "$1.52B",
          "Sector": "Stone"
        },
        {
          "Name": "Stone, glass and ceramics",
          "Code": "2 HS92",
          "Year": 1996,
          "CurrentGrossExport": "$1.88B",
          "Sector": "Stone"
        },
        {
          "Name": "Stone, glass and ceramics",
          "Code": "2 HS92",
          "Year": 1997,
          "CurrentGrossExport": "$1.98B",
          "Sector": "Stone"
        },
        {
          "Name": "Stone, glass and ceramics",
          "Code": "2 HS92",
          "Year": 1998,
          "CurrentGrossExport": "$2.30B",
          "Sector": "Stone"
        },
        {
          "Name": "Stone, glass and ceramics",
          "Code": "2 HS92",
          "Year": 1999,
          "CurrentGrossExport": "$2.38B",
          "Sector": "Stone"
        },
        {
          "Name": "Stone, glass and ceramics",
          "Code": "2 HS92",
          "Year": 2000,
          "CurrentGrossExport": "$2.54B",
          "Sector": "Stone"
        },
        {
          "Name": "Stone, glass and ceramics",
          "Code": "2 HS92",
          "Year": 2001,
          "CurrentGrossExport": "$2.45B",
          "Sector": "Stone"
        },
        {
          "Name": "Stone, glass and ceramics",
          "Code": "2 HS92",
          "Year": 2002,
          "CurrentGrossExport": "$2.61B",
          "Sector": "Stone"
        },
        {
          "Name": "Stone, glass and ceramics",
          "Code": "2 HS92",
          "Year": 2003,
          "CurrentGrossExport": "$2.72B",
          "Sector": "Stone"
        },
        {
          "Name": "Stone, glass and ceramics",
          "Code": "2 HS92",
          "Year": 2004,
          "CurrentGrossExport": "$3.40B",
          "Sector": "Stone"
        },
        {
          "Name": "Stone, glass and ceramics",
          "Code": "2 HS92",
          "Year": 2005,
          "CurrentGrossExport": "$4.11B",
          "Sector": "Stone"
        },
        {
          "Name": "Stone, glass and ceramics",
          "Code": "2 HS92",
          "Year": 2006,
          "CurrentGrossExport": "$5.56B",
          "Sector": "Stone"
        },
        {
          "Name": "Stone, glass and ceramics",
          "Code": "2 HS92",
          "Year": 2007,
          "CurrentGrossExport": "$6.17B",
          "Sector": "Stone"
        },
        {
          "Name": "Stone, glass and ceramics",
          "Code": "2 HS92",
          "Year": 2008,
          "CurrentGrossExport": "$7.38B",
          "Sector": "Stone"
        },
        {
          "Name": "Stone, glass and ceramics",
          "Code": "2 HS92",
          "Year": 2009,
          "CurrentGrossExport": "$8.03B",
          "Sector": "Stone"
        },
        {
          "Name": "Stone, glass and ceramics",
          "Code": "2 HS92",
          "Year": 2010,
          "CurrentGrossExport": "$11.4B",
          "Sector": "Stone"
        },
        {
          "Name": "Stone, glass and ceramics",
          "Code": "2 HS92",
          "Year": 2011,
          "CurrentGrossExport": "$15.0B",
          "Sector": "Stone"
        },
        {
          "Name": "Stone, glass and ceramics",
          "Code": "2 HS92",
          "Year": 2012,
          "CurrentGrossExport": "$15.6B",
          "Sector": "Stone"
        },
        {
          "Name": "Stone, glass and ceramics",
          "Code": "2 HS92",
          "Year": 2013,
          "CurrentGrossExport": "$12.3B",
          "Sector": "Stone"
        },
        {
          "Name": "Stone, glass and ceramics",
          "Code": "2 HS92",
          "Year": 2014,
          "CurrentGrossExport": "$10.2B",
          "Sector": "Stone"
        },
        {
          "Name": "Stone, glass and ceramics",
          "Code": "2 HS92",
          "Year": 2015,
          "CurrentGrossExport": "$9.59B",
          "Sector": "Stone"
        },
        {
          "Name": "Stone, glass and ceramics",
          "Code": "2 HS92",
          "Year": 2016,
          "CurrentGrossExport": "$9.88B",
          "Sector": "Stone"
        },
        {
          "Name": "Stone, glass and ceramics",
          "Code": "2 HS92",
          "Year": 2017,
          "CurrentGrossExport": "$9.62B",
          "Sector": "Stone"
        },
        {
          "Name": "Stone, glass and ceramics",
          "Code": "2 HS92",
          "Year": 2018,
          "CurrentGrossExport": "$9.89B",
          "Sector": "Stone"
        },
        {
          "Name": "Stone, glass and ceramics",
          "Code": "2 HS92",
          "Year": 2019,
          "CurrentGrossExport": "$10.3B",
          "Sector": "Stone"
        },
        {
          "Name": "Stone, glass and ceramics",
          "Code": "2 HS92",
          "Year": 2020,
          "CurrentGrossExport": "$11.0B",
          "Sector": "Stone"
        },
        {
          "Name": "Stone, glass and ceramics",
          "Code": "2 HS92",
          "Year": 2021,
          "CurrentGrossExport": "$12.5B",
          "Sector": "Stone"
        },
        {
          "Name": "Minerals, fuels, ores and salts",
          "Code": "3 HS92",
          "Year": 1995,
          "CurrentGrossExport": "$8.89B",
          "Sector": "Minerals"
        },
        {
          "Name": "Minerals, fuels, ores and salts",
          "Code": "3 HS92",
          "Year": 1996,
          "CurrentGrossExport": "$10.5B",
          "Sector": "Minerals"
        },
        {
          "Name": "Minerals, fuels, ores and salts",
          "Code": "3 HS92",
          "Year": 1997,
          "CurrentGrossExport": "$12.2B",
          "Sector": "Minerals"
        },
        {
          "Name": "Minerals, fuels, ores and salts",
          "Code": "3 HS92",
          "Year": 1998,
          "CurrentGrossExport": "$8.10B",
          "Sector": "Minerals"
        },
        {
          "Name": "Minerals, fuels, ores and salts",
          "Code": "3 HS92",
          "Year": 1999,
          "CurrentGrossExport": "$10.3B",
          "Sector": "Minerals"
        },
        {
          "Name": "Minerals, fuels, ores and salts",
          "Code": "3 HS92",
          "Year": 2000,
          "CurrentGrossExport": "$17.5B",
          "Sector": "Minerals"
        },
        {
          "Name": "Minerals, fuels, ores and salts",
          "Code": "3 HS92",
          "Year": 2001,
          "CurrentGrossExport": "$14.0B",
          "Sector": "Minerals"
        },
        {
          "Name": "Minerals, fuels, ores and salts",
          "Code": "3 HS92",
          "Year": 2002,
          "CurrentGrossExport": "$15.6B",
          "Sector": "Minerals"
        },
        {
          "Name": "Minerals, fuels, ores and salts",
          "Code": "3 HS92",
          "Year": 2003,
          "CurrentGrossExport": "$19.6B",
          "Sector": "Minerals"
        },
        {
          "Name": "Minerals, fuels, ores and salts",
          "Code": "3 HS92",
          "Year": 2004,
          "CurrentGrossExport": "$24.5B",
          "Sector": "Minerals"
        },
        {
          "Name": "Minerals, fuels, ores and salts",
          "Code": "3 HS92",
          "Year": 2005,
          "CurrentGrossExport": "$33.2B",
          "Sector": "Minerals"
        },
        {
          "Name": "Minerals, fuels, ores and salts",
          "Code": "3 HS92",
          "Year": 2006,
          "CurrentGrossExport": "$42.0B",
          "Sector": "Minerals"
        },
        {
          "Name": "Minerals, fuels, ores and salts",
          "Code": "3 HS92",
          "Year": 2007,
          "CurrentGrossExport": "$42.7B",
          "Sector": "Minerals"
        },
        {
          "Name": "Minerals, fuels, ores and salts",
          "Code": "3 HS92",
          "Year": 2008,
          "CurrentGrossExport": "$52.2B",
          "Sector": "Minerals"
        },
        {
          "Name": "Minerals, fuels, ores and salts",
          "Code": "3 HS92",
          "Year": 2009,
          "CurrentGrossExport": "$31.0B",
          "Sector": "Minerals"
        },
        {
          "Name": "Minerals, fuels, ores and salts",
          "Code": "3 HS92",
          "Year": 2010,
          "CurrentGrossExport": "$42.5B",
          "Sector": "Minerals"
        },
        {
          "Name": "Minerals, fuels, ores and salts",
          "Code": "3 HS92",
          "Year": 2011,
          "CurrentGrossExport": "$57.4B",
          "Sector": "Minerals"
        },
        {
          "Name": "Minerals, fuels, ores and salts",
          "Code": "3 HS92",
          "Year": 2012,
          "CurrentGrossExport": "$57.4B",
          "Sector": "Minerals"
        },
        {
          "Name": "Minerals, fuels, ores and salts",
          "Code": "3 HS92",
          "Year": 2013,
          "CurrentGrossExport": "$53.2B",
          "Sector": "Minerals"
        },
        {
          "Name": "Minerals, fuels, ores and salts",
          "Code": "3 HS92",
          "Year": 2014,
          "CurrentGrossExport": "$47.0B",
          "Sector": "Minerals"
        },
        {
          "Name": "Minerals, fuels, ores and salts",
          "Code": "3 HS92",
          "Year": 2015,
          "CurrentGrossExport": "$25.5B",
          "Sector": "Minerals"
        },
        {
          "Name": "Minerals, fuels, ores and salts",
          "Code": "3 HS92",
          "Year": 2016,
          "CurrentGrossExport": "$20.7B",
          "Sector": "Minerals"
        },
        {
          "Name": "Minerals, fuels, ores and salts",
          "Code": "3 HS92",
          "Year": 2017,
          "CurrentGrossExport": "$24.3B",
          "Sector": "Minerals"
        },
        {
          "Name": "Minerals, fuels, ores and salts",
          "Code": "3 HS92",
          "Year": 2018,
          "CurrentGrossExport": "$33.5B",
          "Sector": "Minerals"
        },
        {
          "Name": "Minerals, fuels, ores and salts",
          "Code": "3 HS92",
          "Year": 2019,
          "CurrentGrossExport": "$29.6B",
          "Sector": "Minerals"
        },
        {
          "Name": "Minerals, fuels, ores and salts",
          "Code": "3 HS92",
          "Year": 2020,
          "CurrentGrossExport": "$23.9B",
          "Sector": "Minerals"
        },
        {
          "Name": "Minerals, fuels, ores and salts",
          "Code": "3 HS92",
          "Year": 2021,
          "CurrentGrossExport": "$35.4B",
          "Sector": "Minerals"
        },
        {
          "Name": "Metals",
          "Code": "4 HS92",
          "Year": 1995,
          "CurrentGrossExport": "$5.02B",
          "Sector": "Metals"
        },
        {
          "Name": "Metals",
          "Code": "4 HS92",
          "Year": 1996,
          "CurrentGrossExport": "$5.07B",
          "Sector": "Metals"
        },
        {
          "Name": "Metals",
          "Code": "4 HS92",
          "Year": 1997,
          "CurrentGrossExport": "$5.71B",
          "Sector": "Metals"
        },
        {
          "Name": "Metals",
          "Code": "4 HS92",
          "Year": 1998,
          "CurrentGrossExport": "$5.75B",
          "Sector": "Metals"
        },
        {
          "Name": "Metals",
          "Code": "4 HS92",
          "Year": 1999,
          "CurrentGrossExport": "$5.74B",
          "Sector": "Metals"
        },
        {
          "Name": "Metals",
          "Code": "4 HS92",
          "Year": 2000,
          "CurrentGrossExport": "$6.07B",
          "Sector": "Metals"
        },
        {
          "Name": "Metals",
          "Code": "4 HS92",
          "Year": 2001,
          "CurrentGrossExport": "$5.73B",
          "Sector": "Metals"
        },
        {
          "Name": "Metals",
          "Code": "4 HS92",
          "Year": 2002,
          "CurrentGrossExport": "$6.03B",
          "Sector": "Metals"
        },
        {
          "Name": "Metals",
          "Code": "4 HS92",
          "Year": 2003,
          "CurrentGrossExport": "$6.21B",
          "Sector": "Metals"
        },
        {
          "Name": "Metals",
          "Code": "4 HS92",
          "Year": 2004,
          "CurrentGrossExport": "$8.79B",
          "Sector": "Metals"
        },
        {
          "Name": "Metals",
          "Code": "4 HS92",
          "Year": 2005,
          "CurrentGrossExport": "$10.6B",
          "Sector": "Metals"
        },
        {
          "Name": "Metals",
          "Code": "4 HS92",
          "Year": 2006,
          "CurrentGrossExport": "$12.0B",
          "Sector": "Metals"
        },
        {
          "Name": "Metals",
          "Code": "4 HS92",
          "Year": 2007,
          "CurrentGrossExport": "$13.7B",
          "Sector": "Metals"
        },
        {
          "Name": "Metals",
          "Code": "4 HS92",
          "Year": 2008,
          "CurrentGrossExport": "$15.3B",
          "Sector": "Metals"
        },
        {
          "Name": "Metals",
          "Code": "4 HS92",
          "Year": 2009,
          "CurrentGrossExport": "$9.48B",
          "Sector": "Metals"
        },
        {
          "Name": "Metals",
          "Code": "4 HS92",
          "Year": 2010,
          "CurrentGrossExport": "$13.0B",
          "Sector": "Metals"
        },
        {
          "Name": "Metals",
          "Code": "4 HS92",
          "Year": 2011,
          "CurrentGrossExport": "$16.3B",
          "Sector": "Metals"
        },
        {
          "Name": "Metals",
          "Code": "4 HS92",
          "Year": 2012,
          "CurrentGrossExport": "$15.6B",
          "Sector": "Metals"
        },
        {
          "Name": "Metals",
          "Code": "4 HS92",
          "Year": 2013,
          "CurrentGrossExport": "$15.7B",
          "Sector": "Metals"
        },
        {
          "Name": "Metals",
          "Code": "4 HS92",
          "Year": 2014,
          "CurrentGrossExport": "$15.3B",
          "Sector": "Metals"
        },
        {
          "Name": "Metals",
          "Code": "4 HS92",
          "Year": 2015,
          "CurrentGrossExport": "$13.8B",
          "Sector": "Metals"
        },
        {
          "Name": "Metals",
          "Code": "4 HS92",
          "Year": 2016,
          "CurrentGrossExport": "$13.4B",
          "Sector": "Metals"
        },
        {
          "Name": "Metals",
          "Code": "4 HS92",
          "Year": 2017,
          "CurrentGrossExport": "$14.5B",
          "Sector": "Metals"
        },
        {
          "Name": "Metals",
          "Code": "4 HS92",
          "Year": 2018,
          "CurrentGrossExport": "$17.0B",
          "Sector": "Metals"
        },
        {
          "Name": "Metals",
          "Code": "4 HS92",
          "Year": 2019,
          "CurrentGrossExport": "$16.8B",
          "Sector": "Metals"
        },
        {
          "Name": "Metals",
          "Code": "4 HS92",
          "Year": 2020,
          "CurrentGrossExport": "$15.7B",
          "Sector": "Metals"
        },
        {
          "Name": "Metals",
          "Code": "4 HS92",
          "Year": 2021,
          "CurrentGrossExport": "$22.2B",
          "Sector": "Metals"
        },
        {
          "Name": "Chemicals and plastics",
          "Code": "5 HS92",
          "Year": 1995,
          "CurrentGrossExport": "$4.58B",
          "Sector": "Chemicals"
        },
        {
          "Name": "Chemicals and plastics",
          "Code": "5 HS92",
          "Year": 1996,
          "CurrentGrossExport": "$4.90B",
          "Sector": "Chemicals"
        },
        {
          "Name": "Chemicals and plastics",
          "Code": "5 HS92",
          "Year": 1997,
          "CurrentGrossExport": "$5.28B",
          "Sector": "Chemicals"
        },
        {
          "Name": "Chemicals and plastics",
          "Code": "5 HS92",
          "Year": 1998,
          "CurrentGrossExport": "$5.48B",
          "Sector": "Chemicals"
        },
        {
          "Name": "Chemicals and plastics",
          "Code": "5 HS92",
          "Year": 1999,
          "CurrentGrossExport": "$5.96B",
          "Sector": "Chemicals"
        },
        {
          "Name": "Chemicals and plastics",
          "Code": "5 HS92",
          "Year": 2000,
          "CurrentGrossExport": "$6.58B",
          "Sector": "Chemicals"
        },
        {
          "Name": "Chemicals and plastics",
          "Code": "5 HS92",
          "Year": 2001,
          "CurrentGrossExport": "$6.78B",
          "Sector": "Chemicals"
        },
        {
          "Name": "Chemicals and plastics",
          "Code": "5 HS92",
          "Year": 2002,
          "CurrentGrossExport": "$6.89B",
          "Sector": "Chemicals"
        },
        {
          "Name": "Chemicals and plastics",
          "Code": "5 HS92",
          "Year": 2003,
          "CurrentGrossExport": "$7.40B",
          "Sector": "Chemicals"
        },
        {
          "Name": "Chemicals and plastics",
          "Code": "5 HS92",
          "Year": 2004,
          "CurrentGrossExport": "$9.42B",
          "Sector": "Chemicals"
        },
        {
          "Name": "Chemicals and plastics",
          "Code": "5 HS92",
          "Year": 2005,
          "CurrentGrossExport": "$10.3B",
          "Sector": "Chemicals"
        },
        {
          "Name": "Chemicals and plastics",
          "Code": "5 HS92",
          "Year": 2006,
          "CurrentGrossExport": "$11.2B",
          "Sector": "Chemicals"
        },
        {
          "Name": "Chemicals and plastics",
          "Code": "5 HS92",
          "Year": 2007,
          "CurrentGrossExport": "$12.7B",
          "Sector": "Chemicals"
        },
        {
          "Name": "Chemicals and plastics",
          "Code": "5 HS92",
          "Year": 2008,
          "CurrentGrossExport": "$14.3B",
          "Sector": "Chemicals"
        },
        {
          "Name": "Chemicals and plastics",
          "Code": "5 HS92",
          "Year": 2009,
          "CurrentGrossExport": "$12.4B",
          "Sector": "Chemicals"
        },
        {
          "Name": "Chemicals and plastics",
          "Code": "5 HS92",
          "Year": 2010,
          "CurrentGrossExport": "$15.6B",
          "Sector": "Chemicals"
        },
        {
          "Name": "Chemicals and plastics",
          "Code": "5 HS92",
          "Year": 2011,
          "CurrentGrossExport": "$18.6B",
          "Sector": "Chemicals"
        },
        {
          "Name": "Chemicals and plastics",
          "Code": "5 HS92",
          "Year": 2012,
          "CurrentGrossExport": "$20.1B",
          "Sector": "Chemicals"
        },
        {
          "Name": "Chemicals and plastics",
          "Code": "5 HS92",
          "Year": 2013,
          "CurrentGrossExport": "$21.1B",
          "Sector": "Chemicals"
        },
        {
          "Name": "Chemicals and plastics",
          "Code": "5 HS92",
          "Year": 2014,
          "CurrentGrossExport": "$19.9B",
          "Sector": "Chemicals"
        },
        {
          "Name": "Chemicals and plastics",
          "Code": "5 HS92",
          "Year": 2015,
          "CurrentGrossExport": "$19.1B",
          "Sector": "Chemicals"
        },
        {
          "Name": "Chemicals and plastics",
          "Code": "5 HS92",
          "Year": 2016,
          "CurrentGrossExport": "$18.0B",
          "Sector": "Chemicals"
        },
        {
          "Name": "Chemicals and plastics",
          "Code": "5 HS92",
          "Year": 2017,
          "CurrentGrossExport": "$19.0B",
          "Sector": "Chemicals"
        },
        {
          "Name": "Chemicals and plastics",
          "Code": "5 HS92",
          "Year": 2018,
          "CurrentGrossExport": "$20.5B",
          "Sector": "Chemicals"
        },
        {
          "Name": "Chemicals and plastics",
          "Code": "5 HS92",
          "Year": 2019,
          "CurrentGrossExport": "$21.5B",
          "Sector": "Chemicals"
        },
        {
          "Name": "Chemicals and plastics",
          "Code": "5 HS92",
          "Year": 2020,
          "CurrentGrossExport": "$20.8B",
          "Sector": "Chemicals"
        },
        {
          "Name": "Chemicals and plastics",
          "Code": "5 HS92",
          "Year": 2021,
          "CurrentGrossExport": "$24.9B",
          "Sector": "Chemicals"
        },
        {
          "Name": "Transport vehicles",
          "Code": "6 HS92",
          "Year": 1995,
          "CurrentGrossExport": "$13.3B",
          "Sector": "Vehicles"
        },
        {
          "Name": "Transport vehicles",
          "Code": "6 HS92",
          "Year": 1996,
          "CurrentGrossExport": "$17.5B",
          "Sector": "Vehicles"
        },
        {
          "Name": "Transport vehicles",
          "Code": "6 HS92",
          "Year": 1997,
          "CurrentGrossExport": "$18.8B",
          "Sector": "Vehicles"
        },
        {
          "Name": "Transport vehicles",
          "Code": "6 HS92",
          "Year": 1998,
          "CurrentGrossExport": "$21.1B",
          "Sector": "Vehicles"
        },
        {
          "Name": "Transport vehicles",
          "Code": "6 HS92",
          "Year": 1999,
          "CurrentGrossExport": "$24.6B",
          "Sector": "Vehicles"
        },
        {
          "Name": "Transport vehicles",
          "Code": "6 HS92",
          "Year": 2000,
          "CurrentGrossExport": "$30.2B",
          "Sector": "Vehicles"
        },
        {
          "Name": "Transport vehicles",
          "Code": "6 HS92",
          "Year": 2001,
          "CurrentGrossExport": "$30.3B",
          "Sector": "Vehicles"
        },
        {
          "Name": "Transport vehicles",
          "Code": "6 HS92",
          "Year": 2002,
          "CurrentGrossExport": "$30.1B",
          "Sector": "Vehicles"
        },
        {
          "Name": "Transport vehicles",
          "Code": "6 HS92",
          "Year": 2003,
          "CurrentGrossExport": "$29.4B",
          "Sector": "Vehicles"
        },
        {
          "Name": "Transport vehicles",
          "Code": "6 HS92",
          "Year": 2004,
          "CurrentGrossExport": "$30.5B",
          "Sector": "Vehicles"
        },
        {
          "Name": "Transport vehicles",
          "Code": "6 HS92",
          "Year": 2005,
          "CurrentGrossExport": "$32.3B",
          "Sector": "Vehicles"
        },
        {
          "Name": "Transport vehicles",
          "Code": "6 HS92",
          "Year": 2006,
          "CurrentGrossExport": "$41.1B",
          "Sector": "Vehicles"
        },
        {
          "Name": "Transport vehicles",
          "Code": "6 HS92",
          "Year": 2007,
          "CurrentGrossExport": "$44.9B",
          "Sector": "Vehicles"
        },
        {
          "Name": "Transport vehicles",
          "Code": "6 HS92",
          "Year": 2008,
          "CurrentGrossExport": "$44.8B",
          "Sector": "Vehicles"
        },
        {
          "Name": "Transport vehicles",
          "Code": "6 HS92",
          "Year": 2009,
          "CurrentGrossExport": "$35.4B",
          "Sector": "Vehicles"
        },
        {
          "Name": "Transport vehicles",
          "Code": "6 HS92",
          "Year": 2010,
          "CurrentGrossExport": "$54.0B",
          "Sector": "Vehicles"
        },
        {
          "Name": "Transport vehicles",
          "Code": "6 HS92",
          "Year": 2011,
          "CurrentGrossExport": "$65.3B",
          "Sector": "Vehicles"
        },
        {
          "Name": "Transport vehicles",
          "Code": "6 HS92",
          "Year": 2012,
          "CurrentGrossExport": "$74.8B",
          "Sector": "Vehicles"
        },
        {
          "Name": "Transport vehicles",
          "Code": "6 HS92",
          "Year": 2013,
          "CurrentGrossExport": "$80.2B",
          "Sector": "Vehicles"
        },
        {
          "Name": "Transport vehicles",
          "Code": "6 HS92",
          "Year": 2014,
          "CurrentGrossExport": "$88.4B",
          "Sector": "Vehicles"
        },
        {
          "Name": "Transport vehicles",
          "Code": "6 HS92",
          "Year": 2015,
          "CurrentGrossExport": "$94.6B",
          "Sector": "Vehicles"
        },
        {
          "Name": "Transport vehicles",
          "Code": "6 HS92",
          "Year": 2016,
          "CurrentGrossExport": "$92.5B",
          "Sector": "Vehicles"
        },
        {
          "Name": "Transport vehicles",
          "Code": "6 HS92",
          "Year": 2017,
          "CurrentGrossExport": "$103B",
          "Sector": "Vehicles"
        },
        {
          "Name": "Transport vehicles",
          "Code": "6 HS92",
          "Year": 2018,
          "CurrentGrossExport": "$113B",
          "Sector": "Vehicles"
        },
        {
          "Name": "Transport vehicles",
          "Code": "6 HS92",
          "Year": 2019,
          "CurrentGrossExport": "$125B",
          "Sector": "Vehicles"
        },
        {
          "Name": "Transport vehicles",
          "Code": "6 HS92",
          "Year": 2020,
          "CurrentGrossExport": "$100B",
          "Sector": "Vehicles"
        },
        {
          "Name": "Transport vehicles",
          "Code": "6 HS92",
          "Year": 2021,
          "CurrentGrossExport": "$116B",
          "Sector": "Vehicles"
        },
        {
          "Name": "Machinery and instruments",
          "Code": "7 HS92",
          "Year": 1995,
          "CurrentGrossExport": "$11.9B",
          "Sector": "Machinery"
        },
        {
          "Name": "Machinery and instruments",
          "Code": "7 HS92",
          "Year": 1996,
          "CurrentGrossExport": "$14.2B",
          "Sector": "Machinery"
        },
        {
          "Name": "Machinery and instruments",
          "Code": "7 HS92",
          "Year": 1997,
          "CurrentGrossExport": "$17.2B",
          "Sector": "Machinery"
        },
        {
          "Name": "Machinery and instruments",
          "Code": "7 HS92",
          "Year": 1998,
          "CurrentGrossExport": "$20.0B",
          "Sector": "Machinery"
        },
        {
          "Name": "Machinery and instruments",
          "Code": "7 HS92",
          "Year": 1999,
          "CurrentGrossExport": "$23.4B",
          "Sector": "Machinery"
        },
        {
          "Name": "Machinery and instruments",
          "Code": "7 HS92",
          "Year": 2000,
          "CurrentGrossExport": "$27.0B",
          "Sector": "Machinery"
        },
        {
          "Name": "Machinery and instruments",
          "Code": "7 HS92",
          "Year": 2001,
          "CurrentGrossExport": "$29.4B",
          "Sector": "Machinery"
        },
        {
          "Name": "Machinery and instruments",
          "Code": "7 HS92",
          "Year": 2002,
          "CurrentGrossExport": "$29.8B",
          "Sector": "Machinery"
        },
        {
          "Name": "Machinery and instruments",
          "Code": "7 HS92",
          "Year": 2003,
          "CurrentGrossExport": "$29.2B",
          "Sector": "Machinery"
        },
        {
          "Name": "Machinery and instruments",
          "Code": "7 HS92",
          "Year": 2004,
          "CurrentGrossExport": "$32.5B",
          "Sector": "Machinery"
        },
        {
          "Name": "Machinery and instruments",
          "Code": "7 HS92",
          "Year": 2005,
          "CurrentGrossExport": "$35.2B",
          "Sector": "Machinery"
        },
        {
          "Name": "Machinery and instruments",
          "Code": "7 HS92",
          "Year": 2006,
          "CurrentGrossExport": "$39.2B",
          "Sector": "Machinery"
        },
        {
          "Name": "Machinery and instruments",
          "Code": "7 HS92",
          "Year": 2007,
          "CurrentGrossExport": "$42.2B",
          "Sector": "Machinery"
        },
        {
          "Name": "Machinery and instruments",
          "Code": "7 HS92",
          "Year": 2008,
          "CurrentGrossExport": "$43.0B",
          "Sector": "Machinery"
        },
        {
          "Name": "Machinery and instruments",
          "Code": "7 HS92",
          "Year": 2009,
          "CurrentGrossExport": "$38.4B",
          "Sector": "Machinery"
        },
        {
          "Name": "Machinery and instruments",
          "Code": "7 HS92",
          "Year": 2010,
          "CurrentGrossExport": "$54.1B",
          "Sector": "Machinery"
        },
        {
          "Name": "Machinery and instruments",
          "Code": "7 HS92",
          "Year": 2011,
          "CurrentGrossExport": "$61.4B",
          "Sector": "Machinery"
        },
        {
          "Name": "Machinery and instruments",
          "Code": "7 HS92",
          "Year": 2012,
          "CurrentGrossExport": "$66.2B",
          "Sector": "Machinery"
        },
        {
          "Name": "Machinery and instruments",
          "Code": "7 HS92",
          "Year": 2013,
          "CurrentGrossExport": "$67.9B",
          "Sector": "Machinery"
        },
        {
          "Name": "Machinery and instruments",
          "Code": "7 HS92",
          "Year": 2014,
          "CurrentGrossExport": "$72.6B",
          "Sector": "Machinery"
        },
        {
          "Name": "Machinery and instruments",
          "Code": "7 HS92",
          "Year": 2015,
          "CurrentGrossExport": "$77.2B",
          "Sector": "Machinery"
        },
        {
          "Name": "Machinery and instruments",
          "Code": "7 HS92",
          "Year": 2016,
          "CurrentGrossExport": "$80.7B",
          "Sector": "Machinery"
        },
        {
          "Name": "Machinery and instruments",
          "Code": "7 HS92",
          "Year": 2017,
          "CurrentGrossExport": "$81.6B",
          "Sector": "Machinery"
        },
        {
          "Name": "Machinery and instruments",
          "Code": "7 HS92",
          "Year": 2018,
          "CurrentGrossExport": "$94.8B",
          "Sector": "Machinery"
        },
        {
          "Name": "Machinery and instruments",
          "Code": "7 HS92",
          "Year": 2019,
          "CurrentGrossExport": "$102B",
          "Sector": "Machinery"
        },
        {
          "Name": "Machinery and instruments",
          "Code": "7 HS92",
          "Year": 2020,
          "CurrentGrossExport": "$95.4B",
          "Sector": "Machinery"
        },
        {
          "Name": "Machinery and instruments",
          "Code": "7 HS92",
          "Year": 2021,
          "CurrentGrossExport": "$110B",
          "Sector": "Machinery"
        },
        {
          "Name": "Electronics",
          "Code": "8 HS92",
          "Year": 1995,
          "CurrentGrossExport": "$18.3B",
          "Sector": "Electronics"
        },
        {
          "Name": "Electronics",
          "Code": "8 HS92",
          "Year": 1996,
          "CurrentGrossExport": "$21.3B",
          "Sector": "Electronics"
        },
        {
          "Name": "Electronics",
          "Code": "8 HS92",
          "Year": 1997,
          "CurrentGrossExport": "$25.3B",
          "Sector": "Electronics"
        },
        {
          "Name": "Electronics",
          "Code": "8 HS92",
          "Year": 1998,
          "CurrentGrossExport": "$29.3B",
          "Sector": "Electronics"
        },
        {
          "Name": "Electronics",
          "Code": "8 HS92",
          "Year": 1999,
          "CurrentGrossExport": "$33.6B",
          "Sector": "Electronics"
        },
        {
          "Name": "Electronics",
          "Code": "8 HS92",
          "Year": 2000,
          "CurrentGrossExport": "$40.2B",
          "Sector": "Electronics"
        },
        {
          "Name": "Electronics",
          "Code": "8 HS92",
          "Year": 2001,
          "CurrentGrossExport": "$38.6B",
          "Sector": "Electronics"
        },
        {
          "Name": "Electronics",
          "Code": "8 HS92",
          "Year": 2002,
          "CurrentGrossExport": "$39.6B",
          "Sector": "Electronics"
        },
        {
          "Name": "Electronics",
          "Code": "8 HS92",
          "Year": 2003,
          "CurrentGrossExport": "$37.9B",
          "Sector": "Electronics"
        },
        {
          "Name": "Electronics",
          "Code": "8 HS92",
          "Year": 2004,
          "CurrentGrossExport": "$44.7B",
          "Sector": "Electronics"
        },
        {
          "Name": "Electronics",
          "Code": "8 HS92",
          "Year": 2005,
          "CurrentGrossExport": "$48.0B",
          "Sector": "Electronics"
        },
        {
          "Name": "Electronics",
          "Code": "8 HS92",
          "Year": 2006,
          "CurrentGrossExport": "$57.6B",
          "Sector": "Electronics"
        },
        {
          "Name": "Electronics",
          "Code": "8 HS92",
          "Year": 2007,
          "CurrentGrossExport": "$66.7B",
          "Sector": "Electronics"
        },
        {
          "Name": "Electronics",
          "Code": "8 HS92",
          "Year": 2008,
          "CurrentGrossExport": "$67.6B",
          "Sector": "Electronics"
        },
        {
          "Name": "Electronics",
          "Code": "8 HS92",
          "Year": 2009,
          "CurrentGrossExport": "$57.7B",
          "Sector": "Electronics"
        },
        {
          "Name": "Electronics",
          "Code": "8 HS92",
          "Year": 2010,
          "CurrentGrossExport": "$69.8B",
          "Sector": "Electronics"
        },
        {
          "Name": "Electronics",
          "Code": "8 HS92",
          "Year": 2011,
          "CurrentGrossExport": "$71.6B",
          "Sector": "Electronics"
        },
        {
          "Name": "Electronics",
          "Code": "8 HS92",
          "Year": 2012,
          "CurrentGrossExport": "$73.9B",
          "Sector": "Electronics"
        },
        {
          "Name": "Electronics",
          "Code": "8 HS92",
          "Year": 2013,
          "CurrentGrossExport": "$75.4B",
          "Sector": "Electronics"
        },
        {
          "Name": "Electronics",
          "Code": "8 HS92",
          "Year": 2014,
          "CurrentGrossExport": "$74.6B",
          "Sector": "Electronics"
        },
        {
          "Name": "Electronics",
          "Code": "8 HS92",
          "Year": 2015,
          "CurrentGrossExport": "$79.5B",
          "Sector": "Electronics"
        },
        {
          "Name": "Electronics",
          "Code": "8 HS92",
          "Year": 2016,
          "CurrentGrossExport": "$79.0B",
          "Sector": "Electronics"
        },
        {
          "Name": "Electronics",
          "Code": "8 HS92",
          "Year": 2017,
          "CurrentGrossExport": "$93.6B",
          "Sector": "Electronics"
        },
        {
          "Name": "Electronics",
          "Code": "8 HS92",
          "Year": 2018,
          "CurrentGrossExport": "$96.3B",
          "Sector": "Electronics"
        },
        {
          "Name": "Electronics",
          "Code": "8 HS92",
          "Year": 2019,
          "CurrentGrossExport": "$92.0B",
          "Sector": "Electronics"
        },
        {
          "Name": "Electronics",
          "Code": "8 HS92",
          "Year": 2020,
          "CurrentGrossExport": "$87.3B",
          "Sector": "Electronics"
        },
        {
          "Name": "Electronics",
          "Code": "8 HS92",
          "Year": 2021,
          "CurrentGrossExport": "$89.6B",
          "Sector": "Electronics"
        },
        {
          "Name": "Other",
          "Code": "9 HS92",
          "Year": 1999,
          "CurrentGrossExport": "$249M",
          "Sector": "Other"
        },
        {
          "Name": "Other",
          "Code": "9 HS92",
          "Year": 2000,
          "CurrentGrossExport": "$5.75B",
          "Sector": "Other"
        },
        {
          "Name": "Other",
          "Code": "9 HS92",
          "Year": 2001,
          "CurrentGrossExport": "$5.73B",
          "Sector": "Other"
        },
        {
          "Name": "Other",
          "Code": "9 HS92",
          "Year": 2002,
          "CurrentGrossExport": "$5.80B",
          "Sector": "Other"
        },
        {
          "Name": "Other",
          "Code": "9 HS92",
          "Year": 2003,
          "CurrentGrossExport": "$5.83B",
          "Sector": "Other"
        },
        {
          "Name": "Other",
          "Code": "9 HS92",
          "Year": 2004,
          "CurrentGrossExport": "$6.59B",
          "Sector": "Other"
        },
        {
          "Name": "Other",
          "Code": "9 HS92",
          "Year": 2005,
          "CurrentGrossExport": "$6.62B",
          "Sector": "Other"
        },
        {
          "Name": "Other",
          "Code": "9 HS92",
          "Year": 2006,
          "CurrentGrossExport": "$7.22B",
          "Sector": "Other"
        },
        {
          "Name": "Other",
          "Code": "9 HS92",
          "Year": 2007,
          "CurrentGrossExport": "$8.69B",
          "Sector": "Other"
        },
        {
          "Name": "Other",
          "Code": "9 HS92",
          "Year": 2008,
          "CurrentGrossExport": "$8.26B",
          "Sector": "Other"
        },
        {
          "Name": "Other",
          "Code": "9 HS92",
          "Year": 2009,
          "CurrentGrossExport": "$7.51B",
          "Sector": "Other"
        },
        {
          "Name": "Other",
          "Code": "9 HS92",
          "Year": 2010,
          "CurrentGrossExport": "$7.75B",
          "Sector": "Other"
        },
        {
          "Name": "Other",
          "Code": "9 HS92",
          "Year": 2011,
          "CurrentGrossExport": "$7.62B",
          "Sector": "Other"
        },
        {
          "Name": "Other",
          "Code": "9 HS92",
          "Year": 2012,
          "CurrentGrossExport": "$8.61B",
          "Sector": "Other"
        },
        {
          "Name": "Other",
          "Code": "9 HS92",
          "Year": 2013,
          "CurrentGrossExport": "$8.57B",
          "Sector": "Other"
        },
        {
          "Name": "Other",
          "Code": "9 HS92",
          "Year": 2014,
          "CurrentGrossExport": "$18.1B",
          "Sector": "Other"
        },
        {
          "Name": "Other",
          "Code": "9 HS92",
          "Year": 2015,
          "CurrentGrossExport": "$17.9B",
          "Sector": "Other"
        },
        {
          "Name": "Other",
          "Code": "9 HS92",
          "Year": 2016,
          "CurrentGrossExport": "$16.3B",
          "Sector": "Other"
        },
        {
          "Name": "Other",
          "Code": "9 HS92",
          "Year": 2017,
          "CurrentGrossExport": "$15.5B",
          "Sector": "Other"
        },
        {
          "Name": "Other",
          "Code": "9 HS92",
          "Year": 2018,
          "CurrentGrossExport": "$18.1B",
          "Sector": "Other"
        },
        {
          "Name": "Other",
          "Code": "9 HS92",
          "Year": 2019,
          "CurrentGrossExport": "$19.5B",
          "Sector": "Other"
        },
        {
          "Name": "Other",
          "Code": "9 HS92",
          "Year": 2020,
          "CurrentGrossExport": "$17.8B",
          "Sector": "Other"
        },
        {
          "Name": "Other",
          "Code": "9 HS92",
          "Year": 2021,
          "CurrentGrossExport": "$30.0B",
          "Sector": "Other"
        },
        {
          "Name": "Services",
          "Code": "",
          "Year": 1995,
          "CurrentGrossExport": "$14.7B",
          "Sector": "Services"
        },
        {
          "Name": "Services",
          "Code": "",
          "Year": 1996,
          "CurrentGrossExport": "$16.6B",
          "Sector": "Services"
        },
        {
          "Name": "Services",
          "Code": "",
          "Year": 1997,
          "CurrentGrossExport": "$19.5B",
          "Sector": "Services"
        },
        {
          "Name": "Services",
          "Code": "",
          "Year": 1998,
          "CurrentGrossExport": "$11.5B",
          "Sector": "Services"
        },
        {
          "Name": "Services",
          "Code": "",
          "Year": 1999,
          "CurrentGrossExport": "$11.5B",
          "Sector": "Services"
        },
        {
          "Name": "Services",
          "Code": "",
          "Year": 2000,
          "CurrentGrossExport": "$13.5B",
          "Sector": "Services"
        },
        {
          "Name": "Services",
          "Code": "",
          "Year": 2001,
          "CurrentGrossExport": "$12.4B",
          "Sector": "Services"
        },
        {
          "Name": "Services",
          "Code": "",
          "Year": 2002,
          "CurrentGrossExport": "$12.3B",
          "Sector": "Services"
        },
        {
          "Name": "Services",
          "Code": "",
          "Year": 2003,
          "CurrentGrossExport": "$12.4B",
          "Sector": "Services"
        },
        {
          "Name": "Services",
          "Code": "",
          "Year": 2004,
          "CurrentGrossExport": "$13.7B",
          "Sector": "Services"
        },
        {
          "Name": "Services",
          "Code": "",
          "Year": 2005,
          "CurrentGrossExport": "$15.8B",
          "Sector": "Services"
        },
        {
          "Name": "Services",
          "Code": "",
          "Year": 2006,
          "CurrentGrossExport": "$16.0B",
          "Sector": "Services"
        },
        {
          "Name": "Services",
          "Code": "",
          "Year": 2007,
          "CurrentGrossExport": "$17.5B",
          "Sector": "Services"
        },
        {
          "Name": "Services",
          "Code": "",
          "Year": 2008,
          "CurrentGrossExport": "$18.0B",
          "Sector": "Services"
        },
        {
          "Name": "Services",
          "Code": "",
          "Year": 2009,
          "CurrentGrossExport": "$15.1B",
          "Sector": "Services"
        },
        {
          "Name": "Services",
          "Code": "",
          "Year": 2010,
          "CurrentGrossExport": "$15.5B",
          "Sector": "Services"
        },
        {
          "Name": "Services",
          "Code": "",
          "Year": 2011,
          "CurrentGrossExport": "$15.8B",
          "Sector": "Services"
        },
        {
          "Name": "Services",
          "Code": "",
          "Year": 2012,
          "CurrentGrossExport": "$16.4B",
          "Sector": "Services"
        },
        {
          "Name": "Services",
          "Code": "",
          "Year": 2013,
          "CurrentGrossExport": "$18.1B",
          "Sector": "Services"
        },
        {
          "Name": "Services",
          "Code": "",
          "Year": 2014,
          "CurrentGrossExport": "$21.2B",
          "Sector": "Services"
        },
        {
          "Name": "Services",
          "Code": "",
          "Year": 2015,
          "CurrentGrossExport": "$22.9B",
          "Sector": "Services"
        },
        {
          "Name": "Services",
          "Code": "",
          "Year": 2016,
          "CurrentGrossExport": "$24.2B",
          "Sector": "Services"
        },
        {
          "Name": "Services",
          "Code": "",
          "Year": 2017,
          "CurrentGrossExport": "$27.6B",
          "Sector": "Services"
        },
        {
          "Name": "Services",
          "Code": "",
          "Year": 2018,
          "CurrentGrossExport": "$29.0B",
          "Sector": "Services"
        },
        {
          "Name": "Services",
          "Code": "",
          "Year": 2019,
          "CurrentGrossExport": "$31.7B",
          "Sector": "Services"
        },
        {
          "Name": "Services",
          "Code": "",
          "Year": 2020,
          "CurrentGrossExport": "$17.0B",
          "Sector": "Services"
        },
        {
          "Name": "Services",
          "Code": "",
          "Year": 2021,
          "CurrentGrossExport": "$27.1B",
          "Sector": "Services"
        }
      ];
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
    return (
        <Flex direction="column">
            <Header />
            <Flex justifyContent="center">
                <Box>
                    <StackedAreaChart data={stackedDataNew} width={1500} height={650} />
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
