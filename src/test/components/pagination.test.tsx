import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
// @ts-ignore
import Pagination from '@/components/table/Pagination.tsx';

describe('Pagination Component', () => {
    const mockPageChange = jest.fn();
    const mockPageSizeChange = jest.fn();

    beforeEach(() => {
        mockPageChange.mockClear();
        mockPageSizeChange.mockClear();
    });

    it('renders correctly with given props', () => {
        render(
            <Pagination
                currentPage={1}
                totalPages={5}
                pageSize={100}
                totalItems={500}
                onPageChange={mockPageChange}
                onPageSizeChange={mockPageSizeChange}
            />
        );

        expect(screen.getByText('Showing')).toBeInTheDocument();
        expect(screen.getByText('out of 500')).toBeInTheDocument();
        expect(screen.getByText('1')).toHaveClass('text-[#213F7D]');
        expect(screen.getByText('2')).toBeInTheDocument();
        expect(screen.getByText('5')).toBeInTheDocument();
    });

    it('calls onPageChange when clicking page number', () => {
        render(
            <Pagination
                currentPage={1}
                totalPages={5}
                pageSize={100}
                totalItems={500}
                onPageChange={mockPageChange}
                onPageSizeChange={mockPageSizeChange}
            />
        );

        fireEvent.click(screen.getByText('2'));
        expect(mockPageChange).toHaveBeenCalledWith(2);
    });

    it('calls onPageSizeChange when selecting new page size', () => {
        render(
            <Pagination
                currentPage={1}
                totalPages={5}
                pageSize={100}
                totalItems={500}
                onPageChange={mockPageChange}
                onPageSizeChange={mockPageSizeChange}
            />
        );

        fireEvent.change(screen.getByDisplayValue('100'), {
            target: { value: '50' },
        });

        expect(mockPageSizeChange).toHaveBeenCalledWith(50);
    });

    it('disables previous button on first page', () => {
        render(
            <Pagination
                currentPage={1}
                totalPages={5}
                pageSize={100}
                totalItems={500}
                onPageChange={mockPageChange}
                onPageSizeChange={mockPageSizeChange}
            />
        );

        const prevButton = screen.getAllByRole('button')[0];
        expect(prevButton).toBeDisabled();
    });

    it('disables next button on last page', () => {
        render(
            <Pagination
                currentPage={5}
                totalPages={5}
                pageSize={100}
                totalItems={500}
                onPageChange={mockPageChange}
                onPageSizeChange={mockPageSizeChange}
            />
        );

        const buttons = screen.getAllByRole('button');
        const nextButton = buttons[buttons.length - 1];
        expect(nextButton).toBeDisabled();
    });
});
