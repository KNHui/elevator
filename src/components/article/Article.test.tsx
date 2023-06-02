import { render, screen } from '@testing-library/react';
import { Article } from './Article';


test('Article tag must show title and body.', () => {
    const title = 'Welcome';;
    const body = 'Hello, React Web';

    render(<Article title={title} body={body} />);
    const headingElement = screen.getByRole('heading', { name: 'Welcome' });
    expect(headingElement).toBeInTheDocument();

    const helloText = screen.getByText('Hello, React Web');
    expect(helloText).toBeInTheDocument();
});
