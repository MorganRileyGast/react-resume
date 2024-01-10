import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../../components/HomePage.component';

describe('Home Page', () => {
    it('should mount', () => {
        render(<HomePage />);
        expect(screen.getByText(/Morgan Gast/i)).toBeInTheDocument();
        expect(screen.getByText('Front-End Web Developer', { exact: true })).toBeInTheDocument();
        expect(screen.getByText(/Hello, I am a front-end developer from Minnesota with 5 years of professional experience using JavaScript, HTML, and CSS./i)).toBeInTheDocument();
    });
});
