import styled from 'styled-components/native'

export function ActionReminder({ text }: Props) {
  return (
    <Container testID="action-reminder">
      <ReminderText numberOfLines={1}>{text}</ReminderText>
    </Container>
  )
}

type Props = {
  text: string
}

const Container = styled.View`
  width: 100%;
`

const ReminderText = styled.Text`
  padding: 10px;
  font-weight: 400;
`
