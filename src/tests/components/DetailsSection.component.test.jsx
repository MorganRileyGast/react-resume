import React from 'react';
import { render, screen } from '@testing-library/react';
import DetailsSection from '../../components/DetailsSection.component';

const data = [{
    title: 'Example',
    details: [
        { text: 'Hello, World!', highlight: 'Hello', id: 'hello' },
        { text: 'foobar', highlight: 'foo', id: 'foo' },
    ],
}];

describe('Details Section', () => {
    it('should mount', () => {
        const { container } = render(<DetailsSection data={data} />);
        expect(container).toHaveTextContent('Hello, World!');
        expect(screen.getByText(/foo/i)).toHaveClass('has-text-primary-extra-dark');
    });
});
