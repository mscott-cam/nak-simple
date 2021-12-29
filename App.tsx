import { useState } from 'react'
import styled from 'styled-components/native'

import { List } from './src/pages'

export default function App() {
  const [actions, setActions] = useState([])
  return (
    <AppView>
      <List actions={actions} />
    </AppView>
  )
}

const AppView = styled.View`
  flex: 1;
  border-radius: 40px;
  background-color: #a0a58d;
`
