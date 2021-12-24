import { render } from "@testing-library/react-native";

import App from "./App";

test("App component displays list page by default", () => {
  const { container, getByText } = render(<App />);
  expect(container).toBeDefined();
  expect(getByText("Test")).toBeTruthy();
});
