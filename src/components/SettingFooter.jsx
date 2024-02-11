import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, useColorModeValue, TabIndicator,Flex, Text, Spacer } from "@chakra-ui/react";
import React, { useState } from "react";

const SettingFooter = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const activeTabBorderColor = useColorModeValue("blue.500", "blue.200");

  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  return (
    <Box flex="1" bg="gray.500" mt={4} p="4" boxShadow="md" borderColor="gray.300" borderWidth="1px" position="fixed" right="0" bottom="0" width="390px" height="40px">
      <Flex className="sc-22pzk4-11 bsEIEo">
        <Box className="sc-22pzk4-13 eNgDe" mb={4}>
          <Text className="sc-22pzk4-14 fWGEjT" mb={4} color="white">
            Guide
          </Text>
        </Box>
        <Spacer />
        <Box className="sc-22pzk4-16 gJezlk" mb={4} color="white">
          <Text>Data Notes</Text>
        </Box>
        <Spacer />
        <Box className="sc-22pzk4-17 kxXlSK" mb={4} color="white">
          <Text>Glossary</Text>
        </Box>
        <Spacer />
      </Flex>

    </Box>
  );
};

export default SettingFooter;
