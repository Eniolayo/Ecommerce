import { Box, Image, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import FG from "../assets/Pattern.svg";
import Logo from "../assets/Logo.png";

function AuthWrapper() {
  return (
    <Stack bg="primary.dark">
      <Image src={Logo} alt="ecommerce logo" mx="auto" py="23px" />
      <VStack bgImage={FG} h="100%">
        <Outlet />
      </VStack>
    </Stack>
  );
}

export default AuthWrapper;
