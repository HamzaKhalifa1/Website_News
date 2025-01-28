import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CustomPagination from '../Pagination';

describe('CustomPagination Component', () => {
    const mockOnPaginatedDataUpdate = jest.fn();
    const initialData = Array.from({ length: 20 }, (_, i) => i + 1);

    beforeEach(() => {
        mockOnPaginatedDataUpdate.mockClear();
    });

    it('should render the pagination component', () => {
        const { getByRole } = render(
            <CustomPagination initialData={initialData} onPaginatedDataUpdate={mockOnPaginatedDataUpdate} />
        );

        const pagination = getByRole('navigation');
        expect(pagination).toBeInTheDocument();
    });

    it('should call onPaginatedDataUpdate with the correct data on page change', () => {
        const { getAllByRole } = render(
            <CustomPagination initialData={initialData} onPaginatedDataUpdate={mockOnPaginatedDataUpdate} />
        );

        expect(mockOnPaginatedDataUpdate).toHaveBeenCalledWith(initialData.slice(0, 6));

        const paginationButtons = getAllByRole('button');
        fireEvent.click(paginationButtons[2]);

        expect(mockOnPaginatedDataUpdate).toHaveBeenLastCalledWith(initialData.slice(6, 12));
    });

});
