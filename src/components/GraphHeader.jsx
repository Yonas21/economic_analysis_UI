import { Box, Flex, Text, Spacer } from "@chakra-ui/react";
import React from "react";

const GraphHeader = () => {
  // Calculate the total based on the desired amount at the end of the year
  const total = 349;

  return (
    <Box className="sc-22pzk4-7 fLBYsM">
      <Flex className="sc-22pzk4-11 bsEIEo">
        <Box className="sc-22pzk4-13 eNgDe">
          <Text className="sc-22pzk4-14 fWGEjT" color="orange">
            Exporter
          </Text>
        </Box>
        <Spacer />
        <Box className="sc-22pzk4-16 gJezlk" color="orange">
          <Text>Importer</Text>
        </Box>
        <Spacer />
        <Box className="sc-22pzk4-17 kxXlSK" color="orange">
          <Text>Product</Text>
        </Box>
        <Spacer />
        <Box className="sc-22pzk4-18 junBhr" color="orange">
          <Text>Year</Text>
        </Box>
        <Spacer />
      </Flex>
      <Flex className="sc-22pzk4-19 ibGynM">
        <Box className="sc-22pzk4-20 hZNNyR">
          <Text className="sc-22pzk4-9 dPZnzC">
            Ethiopia
          </Text>
        </Box>
        <Spacer />
        <Box className="sc-22pzk4-21 cFtDox">
          <Text>All countries</Text>
        </Box>
        <Spacer />
        <Box className="sc-22pzk4-22 jxUFHd">
          <Text>All products</Text>
        </Box>
        <Spacer />
        <Box className="sc-22pzk4-23 fqhGHY">
          <Text>1995</Text>
        </Box>
        <Spacer />
        <Box className="sc-22pzk4-25 cSnIOu" justifyContent="flex-end">
          <Text justifyContent="flex-end">{`$${total}`}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default GraphHeader;
