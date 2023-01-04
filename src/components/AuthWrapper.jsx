import { Box, Image, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import FG from "../assets/Pattern.svg";
import Logo from "../assets/Logo.png";

function AuthWrapper() {
  return (
    <Stack bg="primary.dark">
      <Link to="/">
        <Image src={Logo} alt="ecommerce logo" mx="auto" py="23px" />
      </Link>
      <VStack bgImage={FG} h="100%">
        <Outlet />
      </VStack>
    </Stack>
  );
}

export default AuthWrapper;
