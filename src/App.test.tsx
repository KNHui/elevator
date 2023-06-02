import { render, screen } from '@testing-library/react';
import App from './App';

const LIST_LENGTH = 3;

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

test(`should have ${LIST_LENGTH} li tags inside nav`, () => {
  render(<App />);

  const listItems = screen.getAllByRole('listitem');
  expect(listItems).not.toBeNull();
  expect(listItems.length).toBe(LIST_LENGTH);
});
