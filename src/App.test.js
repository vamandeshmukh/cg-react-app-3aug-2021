import { render, screen } from '@testing-library/react';
import App from './App';
import Home from './components/Home';
import Emp from './components/Emp';

// guide for JestJS Tests : https://jestjs.io/docs/tutorial-react

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('render emp data', () => {
  render(<Emp />);
  expect(
    getByTestId(document.documentElement, 'firstName'),
  ).toBeInTheDocument()
});

test('not to render emp data', () => {
  render(<Emp />);
  expect(
    getByTestId(document.documentElement, 'lastName'),
  ).not.toBeInTheDocument()
});
