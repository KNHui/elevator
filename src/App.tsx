import { useState } from 'react';
import './App.scss';
import { Header } from './components/header/Header';
import { AppMode, Topic, UpdateMode } from 'models/contents';
import { Navigation } from 'components/navigation/Navigation';
import { Article } from 'components/article/Article';
import { Create } from 'components/create/Create';
import { Button } from 'models/buttons';
import { UpdateButtons } from 'components/update-buttons/Update-Buttons';
import { Update } from 'components/update/Update';

function App(): JSX.Element {
  const [mode, setMode] = useState<AppMode>('WELCOME');
  const [id, setId] = useState<number | null>(null);
  const [topics, setTopics] = useState<Topic[]>([
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'scss', body: 'scss is ...' },
    { id: 3, title: 'js', body: 'js is ...' },
  ]);
  const [nextId, setNextId] = useState<number>(topics.length + 1);
  const topic = topics.find((topic) => topic.id === id);

  let contents: Record<AppMode, JSX.Element | null> = {
    WELCOME: <Article
      title="Welcome"
      body="Hello, React Web"
    />,
    READ: null,
    CREATE: <Create
      onCreate={(topic: Omit<Topic, 'id'>): void => {
        const newTopic: Topic = {
          id: nextId,
          title: topic.title,
          body: topic.body
        };

        setTopics([...topics, newTopic]);
        setMode('READ');
        setId(nextId);
        setNextId(nextId + 1);
      }}
    />,
    UPDATE: <Update
      title={topic?.title ?? ''}
      body={topic?.body ?? ''}
      onUpdate={({ title, body }) => {
        const newTopics = [...topics];

        for (const topic of newTopics) {
          if (topic.id === id) {
            topic.title = title;
            topic.body = body;
            break;
          }
        }
        setTopics(newTopics);
        setMode('READ');
      }}
    />
  };

  const createButton: Button<UpdateMode> = { text: 'Create', value: 'CREATE' };
  const updateButton: Button<UpdateMode> = { text: 'Update', value: 'UPDATE' };
  let buttons: Button<UpdateMode>[] = [createButton];
  if (mode === 'READ') {
    contents[mode] = <Article
      title={topic?.title ?? '-'}
      body={topic?.body ?? '-'}
    />;
    buttons = [createButton, updateButton];
  }


  return (
    <div className="App">
      <Header title="React WEB" onChangeMode={() => setMode('WELCOME')}></Header>
      <UpdateButtons buttons={buttons} onChangeMode={(value) => {
        setMode(value);
      }}></UpdateButtons>
      <Navigation topics={topics} onChangeMode={(_id) => {
        setMode('READ');
        setId(_id);
      }}></Navigation>
      {contents[mode]}
    </div>
  );
}

export default App;
