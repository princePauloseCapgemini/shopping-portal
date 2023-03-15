import { useCallback, useMemo, useState } from "react";

import { Box, Flex, Container } from "@chakra-ui/react";
import axios from "axios";
import _ from "lodash";
import { useQuery } from "react-query";

import { SearchBox } from "../components/SearchBox";
import { ProductsList } from "../components/ProductsList";
import { ProductListProps } from "../types";
import { Banner } from "../components/Banner";

function Home() {
  const [query, setQuery] = useState("");

  const fetchProducts = useCallback(async () => {
    return await axios
      .get("https://fakestoreapi.com/products?limit=50")
      .then((res) => {
        return res.data;
      });
  }, []);

  const { isLoading, isError, data }: ProductListProps = useQuery(
    "products",
    () => fetchProducts()
  );

  const products = useMemo(() => {
    const result: any[] = _.filter(
      data,
      _.flow(
        _.partial(_.omit, _, ["id", "image", "rating", "price"]),
        _.partial(
          _.some,
          _,
          _.flow(_.toLower, _.partial(_.includes, _, _.toLower(query), 0))
        )
      )
    );
    return result || [];
  }, [query, data]);

  return (
    <Box>
      <Banner />
      <Container maxW="container.lg">
        <Flex justifyContent="center">
          <SearchBox onSearch={(query) => setQuery(query)} />
        </Flex>
      </Container>
      <Box id="products-list-wrapper">
        <ProductsList
          isLoading={!!isLoading}
          isError={!!isError}
          data={products}
        />
      </Box>
    </Box>
  );
}

export default Home;
