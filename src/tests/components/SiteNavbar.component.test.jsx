import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HashRouter } from 'react-router-dom';
import SiteNavbar from '../../components/SiteNavbar.component';
import { act } from 'react-dom/test-utils';

describe('Site Navbar', () => {
    it('should navigate to homepage', () => {
        render(
            <HashRouter>
                <SiteNavbar />
            </HashRouter>
        );
        expect(screen.getByText(/Home/i)).toBeInTheDocument();
        act(() => {
            userEvent.click(screen.getByText(/Home/i));
        });
        expect(screen.getByText(/Home/i)).toHaveClass('active');
    });

    it('should navigate to skills page', () => {
        render(
            <HashRouter>
                <SiteNavbar />
            </HashRouter>
        );
        expect(screen.getByText(/Skills/i)).toBeInTheDocument();
        act(() => {
            userEvent.click(screen.getByText(/Skills/i));
        });
        expect(screen.getByText(/Skills/i)).toHaveClass('active');
    });

    it('should navigate to career page', () => {
        render(
            <HashRouter>
                <SiteNavbar />
            </HashRouter>
        );
        expect(screen.getByText(/Career/i)).toBeInTheDocument();
        act(() => {
            userEvent.click(screen.getByText(/Career/i));
        });
        expect(screen.getByText(/Career/i)).toHaveClass('active');
    });

    it('should navigate to education page', () => {
        render(
            <HashRouter>
                <SiteNavbar />
            </HashRouter>
        );
        expect(screen.getByText(/Education/i)).toBeInTheDocument();
        act(() => {
            userEvent.click(screen.getByText(/Education/i));
        });
        expect(screen.getByText(/Education/i)).toHaveClass('active');
    });

    it('should navigate to contact page', () => {
        render(
            <HashRouter>
                <SiteNavbar />
            </HashRouter>
        );
        expect(screen.getByText(/Contact/i)).toBeInTheDocument();
        act(() => {
            userEvent.click(screen.getByText(/Contact/i));
        });
        expect(screen.getByText(/Contact/i)).toHaveClass('active');
    });

    it('should navigate to credits page', () => {
        render(
            <HashRouter>
                <SiteNavbar />
            </HashRouter>
        );
        expect(screen.getByText(/Credits/i)).toBeInTheDocument();
        act(() => {
            userEvent.click(screen.getByText(/Credits/i));
        });
        expect(screen.getByText(/Credits/i)).toHaveClass('active');
    });

    it('should toggle mobile menu', () => {
        render(
            <HashRouter>
                <SiteNavbar />
            </HashRouter>
        );

        expect(screen.getByLabelText('Toggle navigation')).toBeInTheDocument();
        expect(screen.getByLabelText('Toggle navigation')).toHaveClass('collapsed');
        act(() => {
            userEvent.click(screen.getByLabelText('Toggle navigation'));
        });
        expect(screen.getByLabelText('Toggle navigation')).not.toHaveClass('collapsed');
        act(() => {
            userEvent.click(screen.getByLabelText('Toggle navigation'));
        });
        expect(screen.getByLabelText('Toggle navigation')).toHaveClass('collapsed');
    });
});
