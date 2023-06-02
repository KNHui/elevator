import { render, screen } from '@testing-library/react';
import { Create } from "./Create";

test('Create must have a button and a title.', () => {
    render(<Create onCreate={() => null} />);

    const header = screen.getByRole('columnheader');
    expect(header).toHaveTextContent('Create');

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
});
