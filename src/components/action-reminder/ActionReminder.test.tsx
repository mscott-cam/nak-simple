import { render } from '@testing-library/react-native'
import { ActionReminder } from './ActionReminder'

test('', () => {
  const { container } = render(<ActionReminder />)
  expect(container).toBeDefined()
})
