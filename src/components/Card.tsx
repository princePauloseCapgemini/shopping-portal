import { FC, memo } from "react";

import {
  Box,
  HStack,
  Image,
  Flex,
  Text,
  Icon,
  Tooltip,
  Button,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

import { ProductProps } from "../types";

interface CardProps {
  item: ProductProps;
}

export const Card: FC<CardProps> = memo(function Card({ item }) {
  const navigate = useNavigate();

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
          <Flex>
            <Icon as={StarIcon} color="yellow" />
            <Text ml="2">{`${item.rating.rate} (${item.rating.count})`}</Text>
          </Flex>
        </HStack>
        <HStack justifyContent="space-between">
          <Text
            fontSize="xs"
            mt="4"
            fontWeight="bold"
          >{`$ ${item.price}`}</Text>
          <Button
            background="#fadae9"
            onClick={() => navigate(`/product/${item.id}`)}
            id="view-item-button"
          >
            View Item
          </Button>
        </HStack>
      </Box>
    </Flex>
  );
});
