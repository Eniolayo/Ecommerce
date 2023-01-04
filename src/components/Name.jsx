import {
  IconButton,
  Text,
  Icon,
  Stack,
  Image,
  Box,
  Flex,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { BiHomeAlt, BiTrendingUp } from "react-icons/bi";
import { AiOutlineGift } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { FiShoppingBag, FiSearch, FiBook } from "react-icons/fi";
import { BsLayoutTextSidebarReverse } from "react-icons/bs";
import EcoLogo from "../assets/eco.svg";

function Name() {
  const [navRoute, setNavRoute] = React.useState("Dashboard");
  const navBarItems = [
    { url: "/", name: "Dashboard", iconName: BiHomeAlt },
    { url: "/orders", name: "Orders", iconName: BsLayoutTextSidebarReverse },
    { url: "/", name: "Products", iconName: FiShoppingBag },
    { url: "/", name: "Customers", iconName: BsPerson },
    { url: "/", name: "Advanced Reports", iconName: BiTrendingUp },
    { url: "/", name: "Search Queries", iconName: FiSearch },
    { url: "/", name: "Forecast", iconName: FiBook },
    { url: "/", name: "Campaigns", iconName: AiOutlineGift },
  ];
  return (
    <HStack>
      <Stack h="100%" w="160px" spacing={"24"} py="10" bg="brand.100">
        <Image src={EcoLogo} alt="Ecommerce logo" w="62px" h="22px" mx="auto" />
        <Stack alignItems={"center"}>
          {navBarItems.map((each, index) => (
            <NavLink
              to={each.url}
              // className={({ isActive }) =>
              //   isActive ? activeClassName : undefined
              // }
            >
              <IconButton
                _hover={{
                  bg: navRoute === each.name ? "accent.100" : "brand.200",
                }}
                bg={navRoute === each.name ? "accent.100" : "brand.200"}
                w="fit-content"
                border="none"
                key={index}
              >
                <Icon as={each.iconName} w="12" h="27" color="white" />
              </IconButton>
            </NavLink>
          ))}
        </Stack>
      </Stack>
      <Box flex="1">
        <Outlet context={{ setNavRoute }} />
      </Box>
    </HStack>
  );
}
export default Name;
