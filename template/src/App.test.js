import { render, screen } from "@testing-library/react";
import App from "./App";

test("displays icon", () => {
  render(<App />);
  const icon = screen.getByRole("img");
  expect(icon).toBeInTheDocument();
});
