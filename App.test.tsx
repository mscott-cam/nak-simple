import { render } from '@testing-library/react-native'

import App from './App'

test('App component exists', () => {
  const { container } = render(<App />)
  expect(container).toBeDefined()
})
