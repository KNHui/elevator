import { Topic } from 'models/contents';
import './Create.scss';

export function Create(props: { onCreate: (topic: Omit<Topic, 'id'>) => void }): JSX.Element {
    return (
        <article>
            <h2 role="columnheader">Create</h2>
            <form action="" method="post" onSubmit={(event) => {
                event.preventDefault();
                const { elements } = event.currentTarget;
                const title = (elements.namedItem('title') as HTMLInputElement).value;
                const body = (elements.namedItem('body') as HTMLInputElement).value;

                props.onCreate({ title, body });
            }}>
                <p><input type="text" name="title" placeholder="title" /></p>
                <p><textarea name="body" placeholder="body"></textarea></p>
                <p><input type="submit" value="Create" /></p>
            </form>
        </article>
    );
}
