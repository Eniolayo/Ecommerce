import {
  Button,
  Image,
  Input,
  Icon,
  InputGroup,
  InputLeftElement,
  HStack,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import Logo from "../assets/Logo.png";
function Header() {
  return (
    <HStack w="85%" mx="auto" justifyContent={"space-between"}>
      <Image src={Logo} alt="ecommerce logo" />
      <InputGroup maxW={"574px"} borderColor="#f4f5f64d">
        <InputLeftElement
          pointerEvents="none"
          py="6"
          children={<FiSearch color="white" />}
        />
        <Input
          type="text"
          placeholder="Search"
          color="secondary.lightGrey"
          borderRadius={"16px"}
          opacity={1}
          py="6"
          _placeholder={{ opacity: 1, color: "secondary.lightGrey" }}
        />
      </InputGroup>
      <HStack spacing={"6"}>
        <Box pos="relative">
          <Icon as={AiOutlineMail} boxSize={"26"} color="white" />
          <Box
            as="span"
            w="3"
            h="3"
            borderRadius={"2xl"}
            bg="red.500"
            right={"-1"}
            top={"-1"}
            pos="absolute"
          />
        </Box>
        <Box pos="relative">
          <Icon as={FiShoppingBag} boxSize={"26"} color="white" />
          <Box
            as="span"
            w="3"
            h="3"
            borderRadius={"2xl"}
            bg="red.500"
            right={"-1"}
            top={"-1"}
            pos="absolute"
          />
        </Box>
      </HStack>
      <Button
        color="white"
        bg="transparent"
        borderWidth={1}
        borderColor={"secondary.white"}
        _hover={{ bg: "tranparent" }}
        px="10"
        py="6"
        borderRadius={"2xl"}
      >
        Sign In
      </Button>
    </HStack>
  );
}

export default Header;
