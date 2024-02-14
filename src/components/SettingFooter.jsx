import { QuestionOutlineIcon, WarningTwoIcon,SunIcon, DownloadIcon, ExternalLinkIcon, CalendarIcon } from "@chakra-ui/icons";
import { Box, useColorModeValue, Flex, Text, Spacer } from "@chakra-ui/react";
import  { useState } from "react";

const SettingFooter = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const activeTabBorderColor = useColorModeValue("blue.500", "blue.200");

  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  return (
    <Box flex="1" mt={4} boxShadow="md" borderColor="gray.300" borderWidth="1px" position="fixed" right="0" bottom="0" width="390px" height="80px">
       <Flex className="sc-22pzk4-11 bsEIEo" bg="white">
        <Box className="sc-22pzk4-13 eNgDe" >
          <Text className="sc-22pzk4-14 fWGEjT" mb={4} color="gray">
            <DownloadIcon color="gray"/> Data Download
          </Text>
        </Box>
        <Spacer />
        <Box className="sc-22pzk4-16 gJezlk" color="gray">
          <Text><CalendarIcon/> Image Download</Text>
        </Box>
        <Spacer />
        <Box className="sc-22pzk4-17 kxXlSK" color="gray">
          <Text><ExternalLinkIcon/>Share</Text>
        </Box>
        <Spacer />
      </Flex>

      <Flex p="4" className="sc-22pzk4-11 bsEIEo"  bg="gray.500">
        <Box className="sc-22pzk4-13 eNgDe">
          <Text className="sc-22pzk4-14 fWGEjT" color="white">
            <QuestionOutlineIcon/> Guide
          </Text>
        </Box>
        <Spacer />
        <Box className="sc-22pzk4-16 gJezlk"  color="white">
          <Text><WarningTwoIcon/> Data Notes</Text>
        </Box>
        <Spacer />
        <Box className="sc-22pzk4-17 kxXlSK" color="white">
          <Text><SunIcon/>Glossary</Text>
        </Box>
        <Spacer />
      </Flex>

    </Box>
  );
};

export default SettingFooter;
