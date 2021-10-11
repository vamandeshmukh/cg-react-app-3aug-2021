import { render, screen } from '@testing-library/react';
import { getByTestId, getByText } from '@testing-library/dom';
import Emp from './components/Emp';
import App from './App';
import Counter from './redux/counter/Counter';
import store from './redux/store';
import { Provider } from 'react-redux';

// guiding principles: https://testing-library.com/docs/guiding-principles/ 
// guide: https://www.npmjs.com/package/@testing-library/jest-dom
// guide: https://github.com/testing-library/jest-dom 
// https://jestjs.io/docs/getting-started

// check code in Emp - line 68 
test('find eid in Emp', () => {
  render(
    <Provider store={store}>
      <Emp />
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'eid')).toBeInTheDocument();
});

test('find submit in Emp', () => {
  render(
    <Provider store={store}>
      <Emp />
    </Provider>
  );
  expect(getByTestId(document.documentElement, 'submit')).toBeInTheDocument();
});

// sample test 1
test('test 10 == 10', () => {
  expect(10).toBe(10);
});

// sample test 2
test('test 10 != 11', () => {
  expect(10).not.toBe(11);
});
