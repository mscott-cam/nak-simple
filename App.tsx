import styled from 'styled-components/native'
import { Platform } from 'react-native'

import { List } from './src/pages'

export default function App() {
  return (
    <AppView>
      <List />
    </AppView>
  )
}

const AppView = styled.View`
  flex: 1;
  border-radius: 40px;
  margin-top: ${Platform.OS === 'ios' ? '32px' : 0};
`
