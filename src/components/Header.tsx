import { FC, Fragment } from "react";

import {
  Box,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  VStack,
  Button,
} from "@chakra-ui/react";

import { useViewport } from "../helpers/useViewPort";

export const Header: FC = () => {
  const { isMobile } = useViewport();

  return (
    <Fragment>
      <Box background="#fff" p="8">
        <Container maxW="container.lg">
          <HStack justifyContent="space-between">
            <Heading size="lg" fontStyle="italic">
              Shopbox
            </Heading>
            <Heading size="md">{new Date().toISOString().slice(0, 10)}</Heading>
          </HStack>
        </Container>
      </Box>
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
              <Image src="./images/ShopLogo.png" w="260px" height="auto" />
            </VStack>
          </Flex>
        </Container>
      </Box>
    </Fragment>
  );
};
