import React from 'react';
import { Link, Box, Flex, Text, Button, Stack } from "@chakra-ui/react";
import Logo from "./Logo";

const NavBar = (props) => {
    // Functional component that uses state to toggle Chakra props
    const [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <NavBarContainer {...props}>
        <Logo w="75px"/>
        <MenuToggle toggle={toggle} isOpen={isOpen} />
        <MenuLinks isOpen={isOpen} />
      </NavBarContainer>
    );
  };

  const CloseIcon = () => (
    <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>Close</title>
      <path
        fill="white"
        d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
      />
    </svg>
  );
  
  const MenuIcon = () => (
    <svg
      width="24px"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
    >
      <title>Menu</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
  );
  
  // Only active on tablet and mobile
  // Renders a div with a close or hamburger
  const MenuToggle = ({ toggle, isOpen }) => {
    return (
        // Chakra allows us to pass css as Component props. Hence 
        // Break this.
      <Box display={{ base: "block", md: "none" }} onClick={toggle}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </Box>
    );
  };
  
  const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
    return (
      <Link href={to}>
        <Text color="white" display="block" {...rest}>
          {children}
        </Text>
      </Link>
    );
  };
  
  // Menu Links receive if the menu button state
  // If open, the box renders using Block display
  // Else the box is overriden by the Stack
  const MenuLinks = ({ isOpen }) => {
    return (
      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Stack
          spacing={8}
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]} // This makes the MenuItems group in specific directions based on the size of the screen
          pt={[4, 4, 0, 0]}
        >
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/about">About </MenuItem>
          <MenuItem to="/contact" isLast>
            <Button
              size="sm"
              rounded="md"
              color={["primary.700"]}
              bg={["white"]}
              _hover={{
                bg: ["primary.300"]
              }}
            >
              Contact Us
            </Button>
          </MenuItem>
        </Stack>
      </Box>
    );
  };
  
  const NavBarContainer = ({ children, ...props }) => {
    return (
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        mb={8}
        p={8}
        bg={["primary.700"]}
        color={["primary.700"]}
        {...props}
      >
        {children}
      </Flex>
    );
  };
  
  export default NavBar;