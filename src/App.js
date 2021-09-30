import React from 'react';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Sample from './components/Sample';

const App = () => {
  return (
    <div className="App">
      <h1>App Component</h1>
      <p>This is App component.</p>
      <Sample firstName="Sonu" salary="25000"/>
    </div>
  );
}

export default App;

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
