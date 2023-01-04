import {
  Box,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Text,
  VStack,
  Button,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineEye, AiOutlineMail } from "react-icons/ai";

import { BiLockAlt } from "react-icons/bi";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <VStack my="20" spacing={"5"}>
      <Box
        bg="white"
        w={{ base: "80vw", xl: "772px" }}
        py="40px"
        borderRadius={"16"}
      >
        <HStack justify={"center"} spacing="7">
          <Heading
            fontSize={"22px"}
            fontWeight="700"
            color={"primary.dark"}
            position="relative"
            zIndex={"3"}
            _before={{
              content: `""`,
              width: "100%",
              height: 2,
              backgroundColor: "primary.pink",
              position: "absolute",
              zIndex: "-1",
              bottom: 1,
            }}
          >
            Sign in
          </Heading>
          <Link to="/register">
            <Heading
              fontSize={"18px"}
              fontWeight="700"
              color={"secondary.grey"}
            >
              Register
            </Heading>
          </Link>
        </HStack>
        <form
          style={{
            width: "374px",
            margin: "0 auto",
          }}
        >
          <InputGroup borderColor="secondary.grey" mt="60px">
            <InputLeftElement pointerEvents="none" py="6">
              <Icon as={AiOutlineMail} boxSize={"26"} color="primary.dark" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Email"
              color="secondary.grey"
              borderRadius={"16px"}
              opacity={1}
              py="6"
              _placeholder={{ opacity: 1, color: "secondary.grey" }}
            />
          </InputGroup>
          <InputGroup borderColor="secondary.grey" mt="4" mb="2">
            <InputLeftElement pointerEvents="none" py="6">
              <Icon as={BiLockAlt} boxSize={"26"} color="primary.dark" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Password"
              color="secondary.grey"
              borderRadius={"16px"}
              opacity={1}
              py="6"
              _placeholder={{ opacity: 1, color: "secondary.grey" }}
            />
            <InputRightElement pointerEvents="none" py="6">
              <Icon as={AiOutlineEye} boxSize={"26"} color="primary.dark" />
            </InputRightElement>
          </InputGroup>

          <Link
            to="/"
            style={{
              textAlign: "right",
            }}
          >
            <Text color={"primary.dark"} fontSize="12" fontWeight={"600"}>
              Forgot password?
            </Text>
          </Link>
          <Button
            w="full"
            borderRadius="16px"
            bg="primary.green"
            _hover={{ bg: "primary.green" }}
            py="10"
            color={"white"}
            mt="60px"
          >
            Sign In
          </Button>
        </form>
      </Box>
      <Text color="secondary.lightGrey">Or sign in with</Text>
      <HStack>
        <IconButton
          bg="teal.900"
          _hover={{ bg: "teal.900" }}
          w="44px"
          h="44px"
          borderRadius={"12"}
        >
          <Icon as={FiFacebook} boxSize="6" color="white" />
        </IconButton>
        <IconButton
          bg="teal.900"
          _hover={{ bg: "teal.900" }}
          w="44px"
          h="44px"
          borderRadius={"12"}
        >
          <Icon as={AiOutlineMail} boxSize="6" color="white" />
        </IconButton>
        <IconButton
          bg="teal.900"
          _hover={{ bg: "teal.900" }}
          w="44px"
          h="44px"
          borderRadius={"12"}
        >
          <Icon as={FiTwitter} boxSize="6" color="white" />
        </IconButton>
      </HStack>
    </VStack>
  );
}

export default SignIn;
