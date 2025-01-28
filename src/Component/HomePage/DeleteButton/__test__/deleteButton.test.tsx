import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BlogService from '../../../../services/BlogService';
import DeleteButton from '../DeleteButton';

jest.mock('../../../../services/BlogService', () => ({
    deleteBlogs: jest.fn(),
}));

jest.mock("js-cookie", () => ({
    get: jest.fn(() => 'en'),
}));

jest.mock('react-redux', () => ({
    useDispatch: () => jest.fn(),
}));

describe('DeleteButton Component', () => {
    it('should render the delete icon', () => {
        const { getByTestId } = render(
            <DeleteButton id={1} onDelete={jest.fn()} />
        );

        const icon = getByTestId('delete-icon');
        expect(icon).toBeInTheDocument();
    });

    it('should call BlogService.deleteBlogs and onDelete when clicked', () => {
        const mockOnDelete = jest.fn();

        const { getByTestId } = render(
            <DeleteButton id={1} onDelete={mockOnDelete} />
        );

        const icon = getByTestId('delete-icon');
        fireEvent.click(icon);

        expect(BlogService.deleteBlogs).toHaveBeenCalledWith(1, 'en');

        setTimeout(() => {
            expect(mockOnDelete).toHaveBeenCalledWith(1);
        }, 1000);
    });
});
