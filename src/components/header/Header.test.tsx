import { render, screen } from '@testing-library/react';
import { Header } from './Header';

test('renders Header link', () => {
    const title = 'Header Test';
    render(<Header title={title} onChangeMode={() => null} />);

    const header = screen.getByText(title);
    expect(header).toBeInTheDocument();
});
