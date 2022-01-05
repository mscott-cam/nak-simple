import { FlatList } from 'react-native'
import styled from 'styled-components/native'
import 'react-native-get-random-values'

import { ActionReminder } from '../../components'
export function List({ actions, numOfActionsToRender = 20 }: Props) {
  return (
    <ListContainer testID="list">
      <FlatList
        data={actions}
        renderItem={({ item: { key, text } }) => (
          <ActionReminder key={key} text={text} />
        )}
        initialNumToRender={numOfActionsToRender}
      />
    </ListContainer>
  )
}

export type Props = {
  actions: Action[]
  // used to set how many are rendered before you want to virtualize the rest
  numOfActionsToRender?: number
}

type Action = {
  key: string
  text: string
}

export const ListContainer = styled.View`
  margin: 0;
  margin-top: 50px;
  /* border: 1px solid blue; */
`
