import { Flex, Text } from "@chakra-ui/react";

export function NotFound() {
  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Text fontWeight="semibold" fontSize="lg">
        Not Found
      </Text>
    </Flex>
  );
}
