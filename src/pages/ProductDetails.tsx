import { useCallback } from "react";

import { Container } from "@chakra-ui/react";
import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import Error from "../components/Error";
import Empty from "../components/Empty";
import Loader from "../components/Loader";
import { ProductSingleProps } from "../types";

function ProductDetails() {
  const { id } = useParams();
  console.log("YEs", id);
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

  if (isLoading) return <Loader />;

  if (isError) return <Error />;

  if (!data) return <Empty />;

  return <Container maxW="container.lg">{data?.title}</Container>;
}

export default ProductDetails;
