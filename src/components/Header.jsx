import { Box, Flex, Spacer, Image, Link } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Box bg="white.400" w="100%" py={2} px={4} color="white" style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}>
      <Flex alignItems="center" h="100%">
        <Box ml={8}>
          <Image
            src="/src/assets/GL_logo_black.b45326f74d0a4cea0d2fbfd1e7e1c53e.png"
            alt="Website Logo"
            style={{ width: "200px", height: "auto" }}
          />
        </Box>
        <Spacer />
        <Box p="2" _hover={{ color: "teal", bg: "teal"}}>
          <Link href="/home" mr={5} color="black" _hover={{ color: "white"}} height="100%">Explore</Link>
        </Box>
        <Box p="2" _hover={{ color: "teal", bg: "teal"}}>
          <Link href="/home" mr={5} color="black" _hover={{ color: "white"}} height="100%">Countries</Link>
        </Box>        
        <Box p="2" _hover={{ color: "teal", bg: "teal"}}>
          <Link href="/home" mr={5} color="black" _hover={{ color: "white"}} height="100%">Data</Link>
        </Box>
        <Box p="2" _hover={{ color: "teal", bg: "teal"}}>
          <Link href="/home" mr={5} color="black" _hover={{ color: "white"}} height="100%">Learn</Link>
        </Box>
        <Box p="2" _hover={{ color: "teal", bg: "teal"}}>
          <Link href="/home" mr={5} color="black" _hover={{ color: "white"}} height="100%">Publications</Link>
        </Box>
        <Box p="2" _hover={{ color: "teal", bg: "teal"}}>
          <Link href="/home" mr={5} color="black" _hover={{ color: "white"}} height="100%">About</Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
