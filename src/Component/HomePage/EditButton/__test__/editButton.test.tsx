import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import EditButton from '../EditButton';

jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
}));

jest.mock('react-redux', () => ({
    useDispatch: () => jest.fn(),
}));

describe('EditButton Component', () => {
    it('should render the edit icon', () => {
        const { getByTestId } = render(<EditButton id={1} />);

        const icon = getByTestId('edit-icon');
        expect(icon).toBeInTheDocument();
    });

    it('should navigate to "CreateEditBlog" with correct state when clicked', () => {
        const mockNavigate = jest.fn();
        (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

        const { getByTestId } = render(<EditButton id={1} />);

        const icon = getByTestId('edit-icon');
        fireEvent.click(icon);

        expect(mockNavigate).toHaveBeenCalledWith('CreateEditBlog', {
            state: { isVisited: true, id: 1 },
        });
    });
});
