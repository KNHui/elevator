import React from 'react';
import logo from './logo.svg';
import './App.scss';

function Header({ title }: { title: string }): JSX.Element {

  return (
    <header>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>
        <a href="/">
          {title}
        </a>
      </h1>
    </header>
  );
}

function Navigation({ topics }: { topics: { id: number, title: string, body: string }[] }): JSX.Element {
  const lis = [];
  for (const t of topics) {
    lis.push(<li key={t.id}><a href={'/read/' + t.id}>{t.title}</a></li>);
  }
  return (
    <nav>
      <ul>
        {lis}
      </ul>
    </nav>
  );
}

function Article({ title, body }: { title: string, body: string }): JSX.Element {
  console.log({ title, body });
  return (
    <article>
      <h1>{title}</h1>
      {body}
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
      <Header title="React WEB"></Header>
      <Navigation topics={topics}></Navigation>
      <Article title="Welcome" body="Hello, React Web"></Article>
    </div>
  );
}

export default App;
