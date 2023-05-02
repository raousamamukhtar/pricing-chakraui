"use client";
import { ChakraProvider, Box, Heading, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <ChakraProvider>
      <Box
        textAlign={{base: "left", md: "left", lg: "center"}}
        bg={"#6B46C1"}
        color="white"
        pt={"88px"}
        pl="15px"
        pb="246px"
        height={"397px"}
      >
        <Heading pb={"16px"}>Simple pricing for your business</Heading>
        <Text>Plans that are carefully crafted to suit your business.</Text>
      </Box>
    </ChakraProvider>
  );
}
