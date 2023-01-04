import {
  Box,
  Heading,
  Text,
  Icon,
  HStack,
  Button,
  VStack,
  Image,
  Input,
  IconButton,
  Stack,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";
import BG from "../assets/BG.png";
import { AiFillEye, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import MOMO from "../assets/Avatar.png";
import LUBIN from "../assets/lubin.png";
import KIERRA from "../assets/kierra.png";
import CARTER from "../assets/carter.png";

function Livestream() {
  const currentComments = [
    {
      imgUrl: LUBIN,
      User: "Miracle Lubin",
      Comment: "+4567889981. Please give me 2 chair and...",
    },
    {
      imgUrl: CARTER,
      User: "Carter Dias",
      Comment: "Hello, please check inbox",
    },
    {
      imgUrl: KIERRA,
      User: "Kierra Bergson",
      Comment: "Oh, cool",
    },
  ];
  function Comments({ imgUrl, user, comment }) {
    return (
      <HStack>
        <Image src={imgUrl} alt="lubin's image" borderRadius={"lg"} />
        <Stack spacing={0}>
          <Heading fontSize={"12"} fontWeight="600" color="white">
            {user}
          </Heading>
          <Text fontSize={"12"} fontWeight="400" color="white">
            {comment}
          </Text>
        </Stack>
      </HStack>
    );
  }
  return (
    <Box bg="primary.dark" py="4">
      <Header />
      <Flex w="65%" gap="5" alignItems={"center"} ml="auto" py="10">
        <VStack
          bgImage={BG}
          maxW={"380px"}
          h="580px"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize={"cover"}
          borderRadius="lg"
          alignItems={"flex-start"}
          justifyContent="space-between"
          p="7"
        >
          <Box w="100%">
            <HStack justifyContent={"space-between"}>
              <Heading
                as="h2"
                fontSize={"22px"}
                fontWeight="700"
                color="secondary.white"
              >
                Sale off 50% all items
              </Heading>
              <HStack bg="secondary.white" py="1" px="3" borderRadius={"lg"}>
                <Icon as={AiFillEye} boxSize="5" />
                <Text color="secondary.dark" fontSize={"10"} fontWeight={"600"}>
                  4,5k
                </Text>
              </HStack>
            </HStack>
            <HStack mt="3">
              <HStack>
                <Image src={MOMO} alt="momo.store" />
                <Text fontSize={"12"} fontWeight="600" color="secondary.white">
                  momo.store
                </Text>
              </HStack>
              <Button
                bg="secondary.black"
                color="secondary.white"
                pt="1"
                fontSize={"12"}
                fontWeight="600"
                px="3"
                borderRadius={"lg"}
                h="30px"
                _hover={{ bg: "secondary.black", color: "secondary.white" }}
              >
                Follow
              </Button>
            </HStack>
          </Box>
          <Stack w="100%" pos="relative">
            <IconButton
              variant={"ghost"}
              _hover={{ bg: "transparent" }}
              pos="absolute"
              right={"0.5"}
            >
              <Icon as={AiFillHeart} boxSize="7" color="white" />
            </IconButton>
            <IconButton
              variant={"ghost"}
              _hover={{ bg: "transparent" }}
              pos="absolute"
              right={"0.5"}
              top="4"
            >
              <Icon as={AiFillHeart} boxSize="7" color="white" />
            </IconButton>
            <IconButton
              variant={"ghost"}
              _hover={{ bg: "transparent" }}
              pos="absolute"
              right={"0.5"}
              top="10"
            >
              <Icon as={AiFillHeart} boxSize="7" color="white" />
            </IconButton>

            {currentComments.map((each, index) => (
              <Comments
                imgUrl={each.imgUrl}
                user={each.User}
                key={index}
                comment={each.Comment}
              />
            ))}
            <HStack>
              <Input
                type="text"
                placeholder="Type something"
                color="secondary.lightGrey"
                borderRadius={"16px"}
                opacity={1}
                py="4"
                borderWidth={2}
                _placeholder={{ opacity: 1, color: "white" }}
              />
              <IconButton variant={"ghost"} _hover={{ bg: "transparent" }}>
                <Icon as={AiOutlineHeart} boxSize="7" color="white" />
              </IconButton>
            </HStack>
          </Stack>
        </VStack>
        <VStack
          bgImage={BG}
          maxW={"275px"}
          h="422px"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize={"cover"}
          borderRadius="lg"
          alignItems={"flex-start"}
          justifyContent="space-between"
          p="4"
        >
          <Box w="100%">
            <HStack justifyContent={"space-between"}>
              <HStack bg="red.500" py="1" px="3" borderRadius={"md"}>
                <Box
                  as="span"
                  w="1"
                  h="1"
                  borderRadius={"2xl"}
                  bg="secondary.white"
                />
                <Text
                  color="secondary.white"
                  fontSize={"12"}
                  fontWeight={"600"}
                  textTransform="uppercase"
                >
                  Live
                </Text>
              </HStack>
              <HStack bg="secondary.white" py="1" px="3" borderRadius={"lg"}>
                <Icon as={AiFillEye} boxSize="5" />
                <Text color="secondary.dark" fontSize={"12"} fontWeight={"600"}>
                  4,5k
                </Text>
              </HStack>
            </HStack>
            <HStack mt="3">
              <HStack>
                <Image src={MOMO} alt="momo.store" />
                <Text fontSize={"12"} fontWeight="600" color="secondary.white">
                  momo.store
                </Text>
              </HStack>
              <Button
                bg="secondary.black"
                color="secondary.white"
                pt="1"
                fontSize={"12"}
                fontWeight="600"
                px="3"
                borderRadius={"lg"}
                h="30px"
                _hover={{ bg: "secondary.black", color: "secondary.white" }}
              >
                Follow
              </Button>
            </HStack>
          </Box>
          <Stack w="100%" pos="relative">
            <IconButton
              variant={"ghost"}
              _hover={{ bg: "transparent" }}
              pos="absolute"
              right={"0.5"}
            >
              <Icon as={AiFillHeart} boxSize="7" color="white" />
            </IconButton>
            <IconButton
              variant={"ghost"}
              _hover={{ bg: "transparent" }}
              pos="absolute"
              right={"0.5"}
              top="4"
            >
              <Icon as={AiFillHeart} boxSize="7" color="white" />
            </IconButton>
            <IconButton
              variant={"ghost"}
              _hover={{ bg: "transparent" }}
              pos="absolute"
              right={"0.5"}
              top="10"
            >
              <Icon as={AiFillHeart} boxSize="7" color="white" />
            </IconButton>

            {currentComments.map((each, index) => (
              <Comments
                imgUrl={each.imgUrl}
                user={each.User}
                key={index}
                comment={each.Comment}
              />
            ))}
            <HStack>
              <Input
                type="text"
                placeholder="Type something"
                color="secondary.lightGrey"
                borderRadius={"16px"}
                opacity={1}
                py="4"
                borderWidth={2}
                _placeholder={{ opacity: 1, color: "white" }}
              />
              <IconButton variant={"ghost"} _hover={{ bg: "transparent" }}>
                <Icon as={AiOutlineHeart} boxSize="7" color="white" />
              </IconButton>
            </HStack>
          </Stack>
        </VStack>
      </Flex>
    </Box>
  );
}

export default Livestream;
