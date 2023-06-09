import { useCallback, useMemo } from "react";

import {
  Container,
  Box,
  HStack,
  Image,
  Flex,
  Text,
  Icon,
  Button,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";

import Error from "../components/Error";
import Empty from "../components/Empty";
import Loader from "../components/Loader";
import { ProductProps, ProductSingleProps } from "../types";
import { cartState } from "../helpers/state";

function ProductDetails() {
  const { id } = useParams();
  const [cartItems, setCartItem] = useRecoilState(cartState);

  const fetchProducts = useCallback(async () => {
    return await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        return res.data;
      });
  }, [id]);

  const { isLoading, isError, data }: ProductSingleProps = useQuery(
    `product${id}`,
    () => fetchProducts()
  );

  const isAddedToCart = useMemo(
    () => !!cartItems.find((item: ProductProps) => item?.id === data?.id),
    [cartItems, data]
  );

  if (isLoading) return <Loader />;

  if (isError) return <Error />;

  if (!data) return <Empty />;

  return (
    <Container maxW="container.lg">
      <Flex w="100%" flexDirection="row">
        <Image w="40%" src={data.image} objectFit="contain" />
        <Box p="4" ml="4">
          <Text fontSize="md" fontWeight="bold">
            {data.title}
          </Text>
          <Text fontSize="sm" fontWeight="semibold">
            {data.category}
          </Text>
          <Flex mt="4">
            <Icon mt="1" as={StarIcon} color="yellow" />
            <Text ml="2">{`${data.rating.rate} (${data.rating.count})`}</Text>
          </Flex>
          <Text fontSize="sm" my="4">
            {data.description}
          </Text>
          <HStack justifyContent="space-between">
            <Text
              fontSize="lg"
              mt="4"
              fontWeight="bold"
            >{`$ ${data.price}`}</Text>
          </HStack>
          {isAddedToCart ? (
            <Button my="4" isDisabled>
              Added to cart
            </Button>
          ) : (
            <Button
              my="4"
              onClick={() => {
                setCartItem([...cartItems, data]);
                alert("Added to cart");
              }}
            >
              Add to cart
            </Button>
          )}
        </Box>
      </Flex>
    </Container>
  );
}

export default ProductDetails;
