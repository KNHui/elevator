import { useState } from 'react';
import logo from './logo.svg';
import './App.scss';

type Topic = { id: number; title: string; body: string; };
type AppMode = 'READ' | 'WELCOME' | 'CREATE';

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

export function Navigation(props: { topics: Topic[], onChangeMode: (id: number) => void }): JSX.Element {
  const lis = [];
  for (const t of props.topics) {
    lis.push(
      <li key={t.id}>
        <a id={t.id.toString()} href={'/read/' + t.id} onClick={(event) => {
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
      <ol>
        {lis}
      </ol>
    </nav>
  );
}

function Article(props: Omit<Topic, 'id'>): JSX.Element {
  return (
    <article>
      <h1>{props.title}</h1>
      {props.body}
    </article>
  );
}

function Create(props: { onCreate: (topic: Omit<Topic, 'id'>) => void }): JSX.Element {
  return (
    <article>
      <h2>Create</h2>
      <form action="" method="post" onSubmit={(event) => {
        event.preventDefault();
        const { elements } = event.currentTarget;
        const title = (elements.namedItem('title') as HTMLInputElement).value;
        const body = (elements.namedItem('body') as HTMLInputElement).value;

        props.onCreate({ title, body });
      }}>
        <p><input type="text" name="title" placeholder='title' /></p>
        <p><textarea name="body" placeholder="body"></textarea></p>
        <p><input type="submit" value="Create" /></p>
      </form>
    </article>
  );
}

function App(): JSX.Element {
  const [mode, setMode] = useState<AppMode>('WELCOME');
  const [id, setId] = useState<number | null>(null);
  const [topics, setTopics] = useState<Topic[]>([
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'scss', body: 'scss is ...' },
    { id: 3, title: 'js', body: 'js is ...' },
  ]);
  const [nextId, setNextId] = useState<number>(topics.length + 1);

  let contents: Record<AppMode, JSX.Element | null> = {
    WELCOME: <Article title="Welcome" body="Hello, React Web"></Article>,
    READ: null,
    CREATE: <Create onCreate={(topic: Omit<Topic, 'id'>): void => {
      const newTopic: Topic = {
        id: nextId,
        title: topic.title,
        body: topic.body
      };
      const newTopics = [...topics];

      newTopics.push(newTopic);
      setTopics(newTopics);
      setMode('READ');
      setId(nextId);
      setNextId(nextId + 1);
    }}></Create>
  };

  if (mode === 'READ') {
    const topic = topics.find((topic) => topic.id === id);
    contents[mode] = <Article title={topic?.title ?? '-'} body={topic?.body ?? '-'}></Article>;
  }
  return (
    <div className="App">
      <Header title="React WEB" onChangeMode={() => setMode('WELCOME')}></Header>
      <a href="/create" onClick={(event) => {
        event.preventDefault();
        setMode('CREATE');
      }}>Create</a>
      <Navigation topics={topics} onChangeMode={(_id) => {
        setMode('READ');
        setId(_id);
      }}></Navigation>
      {contents[mode]}
    </div>
  );
}

export default App;
