import {
  AbsoluteCenter,
  Box,
  Button,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { colors } from "../data";
import Header from "../components/Header";
import CustomInput from "../components/CustomInput";

function Login() {

  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Header />
      <AbsoluteCenter marginTop="300px" width={500}>
        <Stack spacing={6} p={4} borderRadius="md" bg="white" shadow="md" >
          <Text color={colors.terracotta} fontSize="lg" fontWeight="bold" textAlign="center">
            Sign In
          </Text>
          <CustomInput placeholder="Username"  />
          <CustomInput placeholder="Password" type="password"  />
          <Button mt={6} type="button" color={colors.white} bg={colors.light}>
            Login
          </Button>
        </Stack>
      </AbsoluteCenter>
    </Box>
  );
}

export default Login;
