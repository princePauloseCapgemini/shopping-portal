import { FC } from "react";

import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  VStack,
  Button,
} from "@chakra-ui/react";

import { useIsMobile } from "../helpers/useIsMobile";

export const Banner: FC = () => {
  const { isMobile } = useIsMobile();

  return (
    <Box w="100%" background="#fadae9" p="8" pb="12">
      <Container maxW="container.lg">
        <Flex
          flexDirection={isMobile ? "column" : "row"}
          justifyContent={isMobile ? "center" : "space-between"}
        >
          <VStack alignItems={isMobile ? "center" : "flex-start"} spacing="8">
            <Heading maxW="400px" size="lg" fontWeight="md">
              Making amazing products a part of your life
            </Heading>

            <Button
              _hover={{ opacity: 0.8 }}
              background="#f55995"
              borderRadius="full"
              color="#fff"
              onClick={() =>
                document
                  ?.getElementById?.("products-list-wrapper")
                  ?.scrollIntoView()
              }
            >
              Shop Now
            </Button>
          </VStack>
          <VStack>
            <Image src="./ShopLogo.png" w="260px" height="auto" />
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};
