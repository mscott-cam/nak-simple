import { render } from '@testing-library/react-native'

import App from './App'

test('App component exists', () => {
  const { container, queryByTestId } = render(<App />)
  const ListComponent = queryByTestId('list')

  expect(container).toBeDefined()
  expect(ListComponent).not.toBeNull()
})
