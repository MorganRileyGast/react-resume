import React from 'react';
import { render, screen } from '@testing-library/react';
import CreditsPage from '../../components/CreditsPage.component';

describe('Credits Page', () => {
    it('should mount', () => {
        render(<CreditsPage />);
        expect(screen.getByText(/Freepik/i)).toBeInTheDocument();
    });
});
