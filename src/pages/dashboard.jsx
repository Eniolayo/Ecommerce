import { Box, Heading, HStack } from "@chakra-ui/react";
import React from "react";
import { useOutletContext } from "react-router-dom";

function Dashboard() {
  const { setNavRoute } = useOutletContext();
  // setNavRoute("Dashboard");

  return (
    <Box>
      <Heading as={"h2"}>Dashboard</Heading>
      <HStack>Jan 01 - Jan 28</HStack>
      <div>Dashboard</div>
      <div>Dashboard</div>
    </Box>
  );
}

export default Dashboard;
