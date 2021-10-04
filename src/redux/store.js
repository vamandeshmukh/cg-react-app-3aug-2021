import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/CounterSlice';
import counter2Reducer from './counter2/Counter2Slice';

// import rootReducer from './rootReducer';

/*
guides for redux - 

https://redux.js.org/introduction/getting-started 
https://react-redux.js.org/introduction/getting-started 
https://redux-toolkit.js.org/introduction/getting-started 
https://www.fullstacklabs.co/blog/using-redux-toolkit-with-reactjs 
https://www.softkraft.co/how-to-setup-redux-with-redux-toolkit/
https://github.com/softkraftco/redux-tutorial-how-to-setup-redux 

*/


console.log('0 store');

const store = configureStore({
    reducer: {
        counter: counterReducer,
        counter2: counter2Reducer,
    },
})
export default store;


