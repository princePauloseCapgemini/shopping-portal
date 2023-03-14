import { FC, memo } from "react";

import {
  Box,
  HStack,
  Image,
  Flex,
  Text,
  Icon,
  Tooltip,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

import { ProductProps } from "../types";

interface CardProps {
  item: ProductProps;
}

export const Card: FC<CardProps> = memo(function Card({ item }) {
  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Image w="auto" height="150px" src={item.image} objectFit="contain" />
      <Box p="4">
        <HStack justifyContent="space-between">
          <Tooltip label={item.title}>
            <Text noOfLines={2} w="50%" fontSize="md" fontWeight="semibold">
              {item.title}
            </Text>
          </Tooltip>
          <Icon as={StarIcon} color="yellow" />
          <Text>{`${item.rating.rate} (${item.rating.count})`}</Text>
        </HStack>
        <Text fontSize="xs" mt="4" fontWeight="bold">{`$ ${item.price}`}</Text>
      </Box>
    </Flex>
  );
});
