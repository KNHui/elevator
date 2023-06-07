import { render, screen } from '@testing-library/react';
import { Update } from './Update';
import { Topic } from 'models/contents';

test('renders a Update Button', () => {
    const title = 'Lorem';
    const body = 'ipsum';
    const topic: Topic = {
        id: 0,
        title: title,
        body: body
    };

    render(
        <Update
            title={topic.title}
            body={topic.body}
            onUpdate={({ title, body }) => {
                console.log(title, body);
            }}
        />
    );

    expect(screen.getByRole('columnheader')).toHaveTextContent('Update');
    expect(screen.getByRole('button')).toHaveAccessibleName('Update');
    expect(screen.getByText(body)).toBeInTheDocument();
});
