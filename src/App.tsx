import React from 'react';
import logo from './logo.svg';
import './App.scss';

function Header(): JSX.Element {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>
        <a href="/">
          React WEB
        </a>
      </h1>
    </header>
  );
}

function Navigation(): JSX.Element {
  return (
    <nav>
      <ul>
        <li> <a href="/read/1">html</a> </li>
        <li> <a href="/read/2">scss</a> </li>
        <li> <a href="/read/3">js</a> </li>
      </ul>
    </nav>
  );
}

function Article(): JSX.Element {
  return (
    <article>
      <h1>Welcome</h1>
    </article>
  );
}

function App(): JSX.Element {
  return (
    <div className="App">
      <Header></Header>
      <Navigation></Navigation>
      <Article></Article>
    </div>
  );
}

export default App;
