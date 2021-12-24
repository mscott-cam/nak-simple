import styled from "styled-components/native";
import { Text } from "react-native";

export function List() {
  return (
    <ListContainer>
      <Text>Test</Text>
    </ListContainer>
  );
}

export const ListContainer = styled.View`
  flex: 1;
`;
