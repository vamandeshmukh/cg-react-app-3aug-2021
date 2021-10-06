import { render } from '@testing-library/react';
import { screen, p, button, getByTestId, getByText } from '@testing-library/dom';
import Emp from './components/Emp';
import Counter from './redux/counter/Counter';
import store from './redux/store';
import { Provider } from 'react-redux';

// guide: https://www.npmjs.com/package/@testing-library/jest-dom
// guide: https://github.com/testing-library/jest-dom 
// https://jestjs.io/docs/getting-started

// sample test 1
test('expect(10).toBe(10)', () => {
  expect(10).toBe(10);
});

// sample test 2
test('expect(10).not.toBe(12)', () => {
  expect(10).not.toBe(12);
});

test('render emp data', () => {
  render(
    <Provider store={store}>
      <Emp />
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'eid')).toBeInTheDocument();
});

test('render emp data 2', () => {
  render(
    <Provider store={store}>
      <Emp />
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'submit')).toBeInTheDocument();
});
