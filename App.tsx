import styled from 'styled-components/native'

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
  margin: 10px;
  border-radius: 40px;
  border: 10px solid red;
`
