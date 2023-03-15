import { FC, useState } from "react";

import { Box, Container, HStack, Heading, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import Cart from "./Cart";

export const Header: FC = () => {
  const navigate = useNavigate();
  const [isCartVisible, setCartVisible] = useState<Boolean>(false);

  return (
    <Box background="#fff" p="8">
      <Container maxW="container.lg">
        <HStack justifyContent="space-between">
          <Heading
            cursor="pointer"
            onClick={() => navigate("/")}
            size="lg"
            fontStyle="italic"
          >
            Shopbox
          </Heading>
          <Box cursor="pointer" onClick={() => setCartVisible(true)}>
            <Image src="./cart.svg" />
          </Box>
        </HStack>
      </Container>
      {isCartVisible && <Cart onClose={() => setCartVisible(false)} />}
    </Box>
  );
};
