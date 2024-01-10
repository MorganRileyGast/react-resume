import React from 'react';
import { render, screen } from '@testing-library/react';
import Divider from '../../components/Divider.component';

describe('Divider', () => {
    it('should mount', () => {
        const { container } = render(<Divider />);
        expect(container.getElementsByClassName('divider')).toHaveLength(1);
        expect(container.getElementsByClassName('divider-box')).toHaveLength(1);
    });
});
