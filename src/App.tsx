import React from 'react';
import logo from './logo.svg';
import './App.scss';

function Header(props: { title: string, onChangeMode: Function }): JSX.Element {

  return (
    <header>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>
        <a href="/" onClick={(event) => {
          event.preventDefault();
          props.onChangeMode();
        }}>
          {props.title}
        </a>
      </h1>
    </header>
  );
}

export function Navigation(props: { topics: { id: number, title: string }[], onChangeMode: (id: number) => void }): JSX.Element {
  const lis = [];
  for (const t of props.topics) {
    lis.push(
      <li key={t.id}>
        <a href={'/read/' + t.id} onClick={(event) => {
          event.preventDefault();
          props.onChangeMode(t.id);
        }}>
          {t.title}
        </a>
      </li>
    );
  }
  return (
    <nav>
      <ul>
        {lis}
      </ul>
    </nav>
  );
}

function Article(props: { title: string, body: string }): JSX.Element {
  return (
    <article>
      <h1>{props.title}</h1>
      {props.body}
    </article>
  );
}

function App(): JSX.Element {
  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'scss', body: 'scss is ...' },
    { id: 3, title: 'js', body: 'js is ...' },
  ];

  return (
    <div className="App">
      <Header title="React WEB" onChangeMode={() => alert('header')}></Header>
      <Navigation topics={topics} onChangeMode={(id) => alert(id)}></Navigation>
      <Article title="Welcome" body="Hello, React Web"></Article>
    </div>
  );
}

export default App;
