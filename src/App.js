import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import Routes from './Routes';

const App = () => {
  return (
      <div className="bg-light">
        <Routes />
      </div>
  );
}
export default App;


// const App = () => {
//   return (
//     <Provider store={store}>
//       <div className="bg-light">
//         <Routes />
//       </div>
//     </Provider>
//   );
// }
// export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
