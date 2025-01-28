import React from 'react';
import { render } from '@testing-library/react';
import MainTitle from '../Maintitle';

    it('should render the translated main title', () => {

        const { getByText } = render(<MainTitle />);

        const title = getByText("Currently Browsing: Design");
        expect(title).toBeInTheDocument();
    });
