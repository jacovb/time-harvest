import { render, screen } from "@testing-library/react";
import App from "./App";
import Reports from "./components/Reports";

test("renders Welcome link", () => {
  render(<Reports />);
  const linkElement = screen.getByText(/Reports/i);
  expect(linkElement).toBeInTheDocument();
});
