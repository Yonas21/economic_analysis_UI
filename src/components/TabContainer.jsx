import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, useColorModeValue, TabIndicator, Heading } from "@chakra-ui/react";

import  { useState } from "react";
import SettingFooter from "./SettingFooter";
import Setting from "./Setting";
import Visualization from "./Visualization";

const TabContainer = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const activeTabBorderColor = useColorModeValue("blue.500", "blue.200");

  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  return (
    <Box flex="1" bg="white" mt={24} p="4" boxShadow="md" borderColor="gray.300" borderWidth="1px" position="fixed" right="0" bottom="0" width="390px" height="790px">
      <Tabs variant="enclosed" mt={24} colorScheme="teal" isFitted height="100%">
        <TabList mb="1em" justifyContent="space-between" height="auto" colorScheme="orange">
          <Tab
            onClick={() => handleTabChange(0)}
            borderBottom={selectedTab === 0 ? `9px solid ${activeTabBorderColor}` : "none"}
            _hover={{ border: "none" }}
            _focus={{ outline: "none" }}
          >
            BUILD VISUALIZATION
          </Tab>
          <Tab
            onClick={() => handleTabChange(1)}
            borderBottom={selectedTab === 1 ? `2px solid ${activeTabBorderColor}` : "none"}
            _hover={{ border: "none" }}
            _focus={{ outline: "none" }}
          >
            SETTINGS
          </Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="5px"
          bg="orange.500"
          borderRadius="1px"
        />
        <TabPanels>
          <TabPanel>
            {selectedTab === 0 &&
              <Box mt="5">
                <Heading textAlign="center">
                  Please select one:
                </Heading>
                <Visualization/>
                <SettingFooter />
              </Box>}
          </TabPanel>
          <TabPanel>
            {selectedTab === 1 && <Box>
              <Setting/>
              <SettingFooter />
            </Box>}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default TabContainer;
