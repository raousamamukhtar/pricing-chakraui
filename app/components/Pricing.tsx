"use client";
import {
  ChakraProvider,
  Box,
  Heading,
  Text,
  Flex,
  Button,
  HStack,Icon
} from "@chakra-ui/react";
import CheckIcon from "../icons/CheckIcon";

export default function Pricing() {
  return (
 <>
    <ChakraProvider>
      <Box maxW={"994px"} mx={{base: "20px", md: "20px", lg: "auto"}} borderRadius="12px" overflow={"hidden"} mt={"-120px"} boxShadow="dark-lg">
        <Flex direction={{base: "column", md: "column", lg: "row"}}>
          <Box
            textAlign={"center"}
            p="48px"
            bg={"#d0bff3"}
            color={"black"}
          >
            <Text fontWeight={"bold"}>Premium PRO</Text>
            <Heading fontSize={"60px"}>$329</Heading>
            <Button mt={"37px"} w="282px" bg={"#805AD5"} color="white">
              Get Started
            </Button>
          </Box>
          <Box p="48px" bg={"white"}>
            <Text>
              Access these features when you get this pricing package for your
              business.
            </Text>
            <HStack pt={"16px"}>
              <Icon as={CheckIcon} />
              <Text>International calling and messaging API</Text>
            </HStack>
            <HStack pt={"16px"}>
              <Icon as={CheckIcon} />
              <Text>Additional phone numbers</Text>
            </HStack>
            <HStack pt={"16px"}>
              <Icon as={CheckIcon} />
              <Text>Automated messages via Zapier</Text>
            </HStack>
            <HStack pt={"16px"}>
              <Icon as={CheckIcon} />
              <Text>24/7 support and consulting</Text>
            </HStack>
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
 </>
  );
}
