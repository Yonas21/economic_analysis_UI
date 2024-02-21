import { Box, Flex, Spacer, Image, Link } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import { colors } from "../data";


const Header = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
			navigate('/'); 
  };
  return (
    <Box bg={colors.terracotta} zIndex={1}  w="100%" py={2} color={colors.white} style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}>
      <Flex alignItems="center" h="100%">
        <Box ml={8} onClick={handleNavigation}>
          <Image
            src="/src/assets/GL_logo_black.b45326f74d0a4cea0d2fbfd1e7e1c53e.png"
            alt="Website Logo"
            style={{ width: "200px", height: "auto" }}
          />
        </Box>
        <Spacer />
        <Box p="2" _hover={{ color: colors.light, cursor:"pointer"}}>
          <Link href="/" mr={5} _hover={{color: colors.light}}  height="100%">Homepage</Link>
        </Box>
        <Box p="2" _hover={{ color: colors.light, cursor:"pointer"}}>
          <Link href="/home" mr={5} _hover={{color: colors.light}} height="100%">Financial Strategies</Link>
        </Box>        
        <Box p="2" _hover={{ color: colors.light, cursor:"pointer"}}>
          <Link href="/home" mr={5} _hover={{color: colors.light}} height="100%">Data Visualization</Link>
        </Box>
        <Box p="2" _hover={{ color: colors.light, cursor:"pointer"}}>
          <Link href="/home" mr={5} _hover={{color: colors.light}} height="100%">Reports</Link>
        </Box>
        <Box p="2" _hover={{ color: colors.light, cursor:"pointer"}}>
          <Link href="/register" mr={5} _hover={{color: colors.light}} height="100%">Signup</Link>
        </Box>
        <Box p="2" _hover={{ color: colors.light, cursor:"pointer"}}>
          <Link href="/login" mr={5} _hover={{color: colors.light}} height="100%">Login</Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
