import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from "models/buttons";
import { UpdateMode } from "models/contents";
import { UpdateButtons } from "./Update-Buttons";

test('renders Header link', () => {
    let mode = null;
    let buttonValue: UpdateMode = 'CREATE';
    const buttons: Button<UpdateMode>[] = [
        { text: 'Create', value: buttonValue },
    ];
    render(
        <UpdateButtons
            buttons={buttons}
            onChangeMode={(nextMode) => {
                mode = nextMode;
            }}
        />
    );

    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();

    fireEvent.click(link);
    expect(mode).toBe(buttonValue);
});
