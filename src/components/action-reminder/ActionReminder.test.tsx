import { render } from '@testing-library/react-native'
import { ActionReminder } from './ActionReminder'

test('if action reminder displays properly', () => {
  const text = 'test action reminder text'
  const { container, queryByText } = render(<ActionReminder text={text} />)
  expect(container).toBeDefined()
  expect(queryByText(text)).not.toBeNull()
})
