import { screen } from '@testing-library/react';
import { renderWithRouter } from './utils/test-utils';
import App from './App';

test('the title is rendered', () => {
  renderWithRouter(<App />);
  const title = screen.getByText(/Timesheet-App/i);
  expect(title).toBeInTheDocument();
});
