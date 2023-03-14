import { FC, memo } from "react";

import { Box, Container, SimpleGrid } from "@chakra-ui/react";

import { Card } from "./Card";
import Error from "./Error";
import Empty from "./Empty";
import Loader from "./Loader";
import { ProductProps } from "../types";

interface ProductsListProps {
  isLoading: boolean;
  isError: boolean;
  data: ProductProps[] | undefined;
}

export const ProductsList: FC<ProductsListProps> = memo(function ProductsList({
  isLoading,
  isError,
  data = [],
}) {
  if (isLoading) return <Loader />;

  if (isError) return <Error />;

  if (!data.length) return <Empty />;

  return (
    <Container maxW="container.lg">
      <SimpleGrid my="16" minChildWidth="260px" spacing="40px">
        {data.map((item) => (
          <Box
            background="#fff"
            boxShadow="xs"
            borderRadius="md"
            p="4"
            height="100%"
            key={`product${item.id}`}
          >
            <Card item={item} />
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
});
