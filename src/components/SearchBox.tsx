import { FC, useRef, MutableRefObject } from "react";

import {
  Icon,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import { CloseIcon, SearchIcon } from "@chakra-ui/icons";

interface SearchBoxProps {
  onSearch: (query: string) => void;
}

export const SearchBox: FC<SearchBoxProps> = ({ onSearch }) => {
  const searchRef: MutableRefObject<HTMLInputElement | null> = useRef(null);

  const onClear = () => {
    if (searchRef?.current) {
      searchRef.current.value = "";
    }
    onSearch("");
  };

  return (
    <InputGroup
      maxW="600px"
      h="50px"
      mt="-25px"
      background="#fff"
      boxShadow="sm"
      borderRadius="lg"
    >
      <InputLeftElement
        children={<Icon as={SearchIcon} fontSize="md" mt="2" />}
        opacity={0.6}
        _hover={{
          cursor: "pointer",
          opacity: 0.8,
        }}
      />
      <Input
        ref={searchRef}
        variant="unstyled"
        placeholder="Search"
        onChange={() => {
          onSearch(searchRef?.current?.value || "");
        }}
      />
      <InputRightElement
        children={<Icon as={CloseIcon} fontSize="xs" mt="2" />}
        onClick={() => onClear()}
        opacity={0.6}
        _hover={{
          cursor: "pointer",
          opacity: 0.8,
        }}
      />
    </InputGroup>
  );
};
