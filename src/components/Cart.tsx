import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

interface CartProps {
  onClose: () => void;
}

function Cart({ onClose }: CartProps) {
  return (
    <Drawer isOpen placement="right" size="lg" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Cart</DrawerHeader>

        <DrawerBody>Empty</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default Cart;
