import "./Article.scss";
import { Topic } from "models/contents";

export function Article(props: Omit<Topic, 'id'>): JSX.Element {
    return (
        <article>
            <h1>{props.title}</h1>
            {props.body}
        </article>
    );
}
