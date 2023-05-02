"use client";
import {
  ChakraProvider,
  Box,
  HStack,
  Icon,
  Text,
  Flex,
} from "@chakra-ui/react";
import Feature1icon from "../icons/Feature1icon";
import Feature2icon from "../icons/Feature2icon";
import Feature3icon from "../icons/Feature3icon";

export default function Features() {
  return (
    <ChakraProvider>
      <Box maxW={"800px"} m="auto" mt={"57px"}>
        <Flex direction={{ base: "column", md: "column", lg: "row" }} px="20px">
          <HStack mb={"20px"}>
            <Icon as={Feature1icon} />
            <Text fontWeight={"bold"}>30 days money back Guarantee</Text>
          </HStack>
          <HStack mb={"20px"}>
            <Icon as={Feature2icon} />
            <Text fontWeight={"bold"}>No setup fees 100% hassle-free</Text>
          </HStack>
          <HStack mb={"20px"}>
            <Icon as={Feature3icon} />
            <Text fontWeight={"bold"}>
              No monthly subscription Pay once and for all
            </Text>
          </HStack>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}
