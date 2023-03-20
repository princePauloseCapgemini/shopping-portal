import {
  Box,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Image,
  VStack,
  Text,
  Divider,
  Button,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";

import { cartState } from "../helpers/state";
import Empty from "./Empty";

interface CartProps {
  onClose: () => void;
}

function Cart({ onClose }: CartProps) {
  const [cartItems, setCartItem] = useRecoilState(cartState);

  return (
    <Drawer isOpen placement="right" size="sm" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Cart</DrawerHeader>

        <DrawerBody>
          {!cartItems.length ? (
            <Empty />
          ) : (
            <Box>
              {cartItems.map((item) => (
                <Box key={`cartitem${item.id}`}>
                  <Flex>
                    <Image src={item.image} width="100px" />
                    <VStack ml="4">
                      <Text fontWeight="semibold">{item.title}</Text>
                      <Button
                        alignSelf="flex-end"
                        colorScheme="red"
                        onClick={() => {
                          setCartItem(
                            cartItems.filter((data) => data.id !== item.id)
                          );
                          alert("Removed from cart");
                        }}
                      >
                        Remove
                      </Button>
                    </VStack>
                  </Flex>
                  <Divider my="4" />
                </Box>
              ))}
            </Box>
          )}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default Cart;
