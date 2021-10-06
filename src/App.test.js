import { render } from '@testing-library/react';
import { screen, p, button, getByTestId, getByText } from '@testing-library/dom';
import Emp from './components/Emp';
import Counter from './redux/counter/Counter';
import store from './redux/store';
import { Provider } from 'react-redux';

// guide: https://www.npmjs.com/package/@testing-library/jest-dom
// guide: https://github.com/testing-library/jest-dom 
// https://jestjs.io/docs/getting-started


