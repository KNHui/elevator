import { Button } from "models/buttons";
import { UpdateMode } from "models/contents";

export function UpdateButtons(props: { buttons: Button<UpdateMode>[], onChangeMode: (value: UpdateMode) => void }) {
    const buttonTags = [];

    for (const button of props.buttons) {
        buttonTags.push(
            <li>
                <input
                    type="button"
                    value={button.text}
                    onClick={(event) => {
                        props.onChangeMode(button.value);
                    }}
                />
            </li>
        );
    }

    return (
        <ul className="list-center">
            {buttonTags}
        </ul>
    );
}
