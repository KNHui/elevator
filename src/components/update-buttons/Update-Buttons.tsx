import { Button } from "models/buttons";
import { UpdateMode } from "models/contents";

export function UpdateButtons(props: { buttons: Button<UpdateMode>[], onChangeMode: (value: UpdateMode) => void }) {
    const buttonTags = [];

    for (const button of props.buttons) {
        buttonTags.push(
            <li>
                <a
                    href={`/${button.value}`}
                    onClick={(event) => {
                        event.preventDefault();
                        props.onChangeMode(button.value);
                    }}>
                    {button.text}
                </a>
            </li>
        );
    }

    return (
        <ul className="list-center">
            {buttonTags}
        </ul>
    );
}
