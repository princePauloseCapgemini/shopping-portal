import { Flex, Spinner } from "@chakra-ui/react";

function Loader() {
  return (
    <Flex justifyContent="center" my="8">
      <Spinner />
    </Flex>
  );
}

export default Loader;
