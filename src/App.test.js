import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import App from "./App";
import Reports from "./components/Reports";

test("renders Welcome link", () => {
  render(
    <MemoryRouter>
      <Reports />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/Reports/i);
  expect(linkElement).toBeInTheDocument();
});
