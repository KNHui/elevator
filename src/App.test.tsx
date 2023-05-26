import { fireEvent, render, screen, within } from '@testing-library/react';
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

test('Article tag should have "Hello, React Web" text and an h1 tag with text "Welcome"', () => {
  render(<App />);

  const headingElement = screen.getByRole('heading', { name: 'Welcome' });
  expect(headingElement).toBeInTheDocument();

  const helloText = screen.getByText('Hello, React Web');
  expect(helloText).toBeInTheDocument();
});

test('Header alert test', () => {
  render(<App />);

  const alertMock = jest.spyOn(window, 'alert').mockImplementation();
  const header = screen.getByText(/React WEB/);
  fireEvent.click(header);
  expect(alertMock).toHaveBeenCalledTimes(1);
});

test('List items alert test', () => {
  render(<App />);

  const alertMock = jest.spyOn(window, 'alert').mockImplementation();
  const listItems = screen.getAllByRole('listitem');

  for (const listItem of listItems) {
    const link = within(listItem).getByRole('link');
    fireEvent.click(link);
  }
  expect(alertMock).toHaveBeenCalledTimes(LIST_LENGTH);
});
