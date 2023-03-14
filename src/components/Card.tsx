import { FC, memo } from "react";

import { Box, HStack, Image, Flex, Text } from "@chakra-ui/react";

import { ProductProps } from "../types";

interface CardProps {
  item: ProductProps;
}

export const Card: FC<CardProps> = memo(function Card({ item }) {
  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Image w="auto" height="150px" src={item.image} objectFit="contain" />
      <Box p="4">
        <HStack>
          <Text fontSize="md" fontWeight="semibold">
            {item.title}
          </Text>
        </HStack>
      </Box>
    </Flex>
  );
});
