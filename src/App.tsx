import { useState } from 'react';
import './App.scss';
import { Header } from './components/header/Header';
import { AppMode, Topic } from 'models/contents';
import { Navigation } from 'components/navigation/Navigation';
import { Article } from 'components/article/Article';
import { Create } from 'components/create/Create';

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
