import { Topic } from "models/contents";
import { useState } from "react";

export function Update(props: { title: string, body: string, onUpdate: (topic: Omit<Topic, 'id'>) => void }) {
    const [title, setTitle] = useState(props.title);
    const [body, setBody] = useState(props.body);
    return (
        <article>
            <h2 role="columnheader">Update</h2>
            <form action="" method="post" onSubmit={(event) => {
                event.preventDefault();
                const { elements } = event.currentTarget;
                const title = (elements.namedItem('title') as HTMLInputElement).value;
                const body = (elements.namedItem('body') as HTMLInputElement).value;

                props.onUpdate({ title, body });
            }}>
                <p>
                    <input
                        type="text"
                        name="title"
                        placeholder="title"
                        value={title}
                        onChange={event => setTitle(event.target.value)} />
                </p>
                <p>
                    <textarea
                        name="body"
                        placeholder="body"
                        value={body}
                        onChange={event => setBody(event.target.value)} />
                </p>
                <p>
                    <input type="submit" value="Update" />
                </p>
            </form>
        </article>
    )
}
