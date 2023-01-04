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
import BOTTLES from "../assets/bottles.png";
import LAMPS from "../assets/lamp.png";

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
  const likedPosition = [
    {
      bottom: "8",
      right: "2.5",
      opacity: "1",
    },
    {
      bottom: "16",
      right: "-0.5",
      opacity: "0.8",
    },
    {
      bottom: "90px",
      right: "23px",
      opacity: "0.7",
    },
    {
      bottom: "110px",
      right: "0px",
      opacity: "0.6",
    },
    {
      bottom: "140px",
      right: "-0.5px",
      opacity: "0.2",
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
      <Flex
        w="65%"
        gap="6"
        alignItems={"center"}
        ml="auto"
        py="10"
        overflow={"hidden"}
      >
        <VStack
          bgImage={BG}
          bgColor="tomato"
          minW={"380px"}
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
            {likedPosition.map((each, index) => (
              <IconButton
                variant={"ghost"}
                _hover={{ bg: "transparent" }}
                pos="absolute"
                right={each.right}
                bottom={each.bottom}
                opacity={each.opacity}
                key={index}
              >
                <Icon as={AiFillHeart} boxSize="7" color="white" />
              </IconButton>
            ))}
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
          bgImage={BOTTLES}
          minW={"275px"}
          bgColor="tomato"
          h="422px"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize={"cover"}
          borderRadius="lg"
          alignItems={"flex-start"}
          justifyContent="space-between"
          p="3"
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
          </Box>
          <Stack w="100%" pos="relative">
            <Text
              fontSize={"15px"}
              fontWeight="700"
              color="white"
              textAlign={"center"}
            >
              Sale off 50%
            </Text>
          </Stack>
        </VStack>
        <VStack
          bgImage={LAMPS}
          minW={"275px"}
          bgColor="tomato"
          h="422px"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize={"cover"}
          borderRadius="lg"
          alignItems={"flex-start"}
          justifyContent="space-between"
          p="3"
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
          </Box>
          <Stack w="100%" pos="relative">
            <Text
              fontSize={"15px"}
              fontWeight="700"
              color="white"
              textAlign={"center"}
            >
              Sale off 50%
            </Text>
          </Stack>
        </VStack>
      </Flex>
    </Box>
  );
}

export default Livestream;
