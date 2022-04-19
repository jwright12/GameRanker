import React from "react";
import { Box, Image } from "@chakra-ui/react";

export default function Logo(props) {
  return (
    <Box {...props}>
      <Image src="/logo192.png" />
    </Box>
  );
}
