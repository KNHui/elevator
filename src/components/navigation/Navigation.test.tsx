import { render, screen } from '@testing-library/react';
import { Navigation } from './Navigation';
test("renders a nav element", () => {
    render(<Navigation topics={[]} onChangeMode={() => { }} />);

    const navElement = screen.getByRole("navigation");
    expect(navElement).toBeInTheDocument();
});
