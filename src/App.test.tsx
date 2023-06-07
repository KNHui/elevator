import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Header link', () => {
  render(<App />);

  const header = screen.getByText(/React WEB/);
  expect(header).toBeInTheDocument();
});


test("renders a nav element", () => {
  render(<App />);

  const navElement = screen.getByRole("navigation");
  expect(navElement).toBeInTheDocument();
});

test(`should have li tags inside nav`, () => {
  render(<App />);

  const listItems = screen.getAllByRole('listitem');
  expect(listItems).not.toBeNull();
});
