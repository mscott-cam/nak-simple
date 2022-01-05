import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'

export function ActionReminder({ text }: Props) {
  return (
    <Container testID="action-reminder" style={shadows.actionShadow}>
      <ReminderText numberOfLines={1}>{text}</ReminderText>
    </Container>
  )
}

type Props = {
  text: string
}

// trying to figure out box shadow
const shadows = StyleSheet.create({
  actionShadow: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
})

const Container = styled.View`
  margin: 20px 10px;
  /* border: 1px solid red; */
  border-radius: 10px;
  box-shadow: 5px 5px 10px #000;
`

const ReminderText = styled.Text`
  padding: 10px;
  font-weight: 400;
  font-size: 18px;
`
