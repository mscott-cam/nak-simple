import { render } from '@testing-library/react-native'
import { List } from './List'
import { testActions } from '../../../App'

test('if list page displays list of action reminders', () => {
  const { container, queryAllByTestId } = render(
    <List actions={testActions} numOfActionsToRender={testActions.length} />
  )
  expect(container).toBeDefined()

  const ActionReminders = queryAllByTestId('action-reminder')
  expect(ActionReminders.length).toBe(testActions.length)
})
