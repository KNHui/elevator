import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);

  const linkElement = screen.getByText(/React WEB/);
  expect(linkElement).toBeInTheDocument();
});


test("renders a nav element", () => {
  render(<App />);

  const navElement = screen.getByRole("navigation");
  expect(navElement).toBeInTheDocument();
});

test('should have 3 li tags inside nav', () => {
  render(<App />);

  const listItems = screen.getAllByRole('listitem');
  expect(listItems).not.toBeNull();
  expect(listItems.length).toBe(3);
});

test('Article tag should have "Hello, React Web" text and an h1 tag with text "Welcome"', () => {
  render(<App />);

  const headingElement = screen.getByRole('heading', { name: 'Welcome' });
  expect(headingElement).toBeInTheDocument();

  const helloText = screen.getByText('Hello, React Web');
  expect(helloText).toBeInTheDocument();
});
