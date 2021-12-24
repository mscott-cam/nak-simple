import styled from 'styled-components/native'
import { ActionReminder } from '../../components'

export function List() {
  return (
    <ListContainer>
      <ActionReminder />
    </ListContainer>
  )
}

export const ListContainer = styled.View`
  flex: 1;
`
