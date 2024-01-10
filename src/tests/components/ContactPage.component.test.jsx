import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactPage from '../../components/ContactPage.component';
import { act } from 'react-dom/test-utils';

describe('Contact Page', () => {
    it('should hide contact info until user clicks buttons', () => {
        render(<ContactPage />);
        expect(screen.getByText(/to reveal my email address/i)).toBeInTheDocument();
        expect(screen.queryByText(/morganrileygast@gmail.com/i)).not.toBeInTheDocument();
        expect(screen.queryAllByRole('link', { name: '(612) 354-6199' })).toHaveLength(0);
    });

    it('should reveal all info when email button is clicked', () => {
        render(<ContactPage />);
        expect(screen.getByText(/to reveal my email address/i)).toBeInTheDocument();
        act(() => {
            userEvent.click(screen.getAllByText(/Click here/i)[0]);
        });
        expect(screen.getByText(/morganrileygast@gmail.com/i)).toBeInTheDocument();
        expect(screen.getByText(/morganrileygast@gmail.com/i)).toHaveAttribute('href', 'mailto:morganrileygast@gmail.com');
        expect(screen.getAllByRole('link', { name: '(612) 354-6199' })).toHaveLength(2);
        expect(screen.getAllByRole('link', { name: '(612) 354-6199' })[0]).toHaveAttribute('href', 'sms:612-354-6199');
        expect(screen.getAllByRole('link', { name: '(612) 354-6199' })[1]).toHaveAttribute('href', 'tel:612-354-6199');
    });

    it('should reveal all info when text button is clicked', () => {
        render(<ContactPage />);
        expect(screen.getAllByText(/to reveal my phone number/i)).toHaveLength(2);
        act(() => {
            userEvent.click(screen.getAllByText(/Click here/i)[1]);
        });
        expect(screen.getByText(/morganrileygast@gmail.com/i)).toBeInTheDocument();
        expect(screen.getByText(/morganrileygast@gmail.com/i)).toHaveAttribute('href', 'mailto:morganrileygast@gmail.com');
        expect(screen.getAllByRole('link', { name: '(612) 354-6199' })).toHaveLength(2);
        expect(screen.getAllByRole('link', { name: '(612) 354-6199' })[0]).toHaveAttribute('href', 'sms:612-354-6199');
        expect(screen.getAllByRole('link', { name: '(612) 354-6199' })[1]).toHaveAttribute('href', 'tel:612-354-6199');
    });

    it('should reveal all info when call button is clicked', () => {
        render(<ContactPage />);
        expect(screen.getAllByText(/to reveal my phone number/i)).toHaveLength(2);
        act(() => {
            userEvent.click(screen.getAllByText(/Click here/i)[2]);
        });
        expect(screen.getByText(/morganrileygast@gmail.com/i)).toBeInTheDocument();
        expect(screen.getByText(/morganrileygast@gmail.com/i)).toHaveAttribute('href', 'mailto:morganrileygast@gmail.com');
        expect(screen.getAllByRole('link', { name: '(612) 354-6199' })).toHaveLength(2);
        expect(screen.getAllByRole('link', { name: '(612) 354-6199' })[0]).toHaveAttribute('href', 'sms:612-354-6199');
        expect(screen.getAllByRole('link', { name: '(612) 354-6199' })[1]).toHaveAttribute('href', 'tel:612-354-6199');
    });
});
