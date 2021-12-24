import { render } from '@testing-library/react-native'
import { List } from './List'

test('if list page displays list of action reminders', () => {
  const { container, getAllByTestId } = render(<List />)
  expect(container).toBeDefined()
  expect(getAllByTestId('action-reminder').length).toBeGreaterThanOrEqual(1)
})
