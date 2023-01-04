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
  Checkbox,
  Select,
} from "@chakra-ui/react";
import React from "react";
import {
  AiOutlineCaretDown,
  AiOutlineEye,
  AiOutlineMail,
} from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { Link } from "react-router-dom";

function Register() {
  return (
    <VStack my="20" spacing={"5"}>
      <Box
        bg="white"
        w={{ base: "80vw", xl: "772px" }}
        py="40px"
        borderRadius={"16"}
      >
        <HStack justify={"center"} spacing="7">
          <Link to="/sign-in">
            <Heading
              fontSize={"18px"}
              fontWeight="700"
              color={"secondary.grey"}
            >
              Sign in
            </Heading>
          </Link>
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
            Register
          </Heading>
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
          <InputGroup borderColor="secondary.grey" mt="4">
            <InputLeftElement pointerEvents="none" py="6">
              <Icon as={BsTelephone} boxSize={"26"} color="primary.dark" />
            </InputLeftElement>
            <Input
              type="tel"
              placeholder="Phone number"
              color="secondary.grey"
              borderRadius={"16px"}
              opacity={1}
              py="6"
              _placeholder={{ opacity: 1, color: "secondary.grey" }}
            />
          </InputGroup>
          <Select
            icon={<AiOutlineCaretDown />}
            placeholder="Select Country"
            borderRadius={"16px"}
            mt="4"
          >
            <option value="option1">United State</option>
            <option value="option2">Canada</option>
            <option value="option3">Norway</option>
          </Select>
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

          <Checkbox>
            <Text color={"primary.dark"} fontSize="12" fontWeight={"400"}>
              I accepted{" "}
              <Text fontWeight={"600"} as="span">
                Terms & Privacy Policy
              </Text>
            </Text>
          </Checkbox>
          <Button
            w="full"
            borderRadius="16px"
            bg="primary.green"
            _hover={{ bg: "primary.green" }}
            py="10"
            mt="40px"
            color={"white"}
          >
            Register
          </Button>
        </form>
      </Box>
    </VStack>
  );
}

export default Register;
