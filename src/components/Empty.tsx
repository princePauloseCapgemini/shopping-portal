import { Flex, Spinner, Text } from "@chakra-ui/react";

function Empty() {
  return (
    <Flex my="8" justifyContent="center">
      <Text>No results found...</Text>
    </Flex>
  );
}

export default Empty;
