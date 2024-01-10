import React from 'react';
import { render, screen } from '@testing-library/react';
import DATA from '../../services/Data.service.json';
import NotFoundPage from '../../components/NotFoundPage.component';

describe('Not Found Page', () => {
    it('should mount', () => {
        const { container } = render(<NotFoundPage data={DATA.CROWS} />);
        expect(container).toHaveTextContent('Holy Crow!');
        expect(screen.getByText(/mate for life/i)).toHaveClass('has-text-primary-extra-dark');
    });
});
