import { FC } from "react";

import { Box, Container, HStack, Heading, Image } from "@chakra-ui/react";

export const Header: FC = () => {
  return (
    <Box background="#fff" p="8">
      <Container maxW="container.lg">
        <HStack justifyContent="space-between">
          <Heading size="lg" fontStyle="italic">
            Shopbox
          </Heading>
          <Box cursor="pointer">
            <Image src="./cart.svg" />
          </Box>
        </HStack>
      </Container>
    </Box>
  );
};
