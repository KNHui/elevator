import "./Navigation.scss";
import { Topic } from "models/contents";

export function Navigation(props: { topics: Topic[], onChangeMode: (id: number) => void }): JSX.Element {
    const lis = [];
    for (const t of props.topics) {
        lis.push(
            <li key={t.id}>
                <a
                    id={t.id.toString()}
                    href={'/read/' + t.id}
                    onClick={(event) => {
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
