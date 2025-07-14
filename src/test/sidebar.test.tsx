import React from 'react';
import { render, screen } from '@testing-library/react';
import Sidebar from '@/features/layout/sidebar';
import '@testing-library/jest-dom';

describe('Sidebar Component', () => {
    test('renders sidebar headings', () => {
        render(<Sidebar />);
        expect(screen.getByText('Customers')).toBeInTheDocument();
        expect(screen.getByText('Decision Models')).toBeInTheDocument();
        expect(screen.getByText('Businesses')).toBeInTheDocument();
        expect(screen.getByText('Settings')).toBeInTheDocument();
    });

    test('renders all major sidebar items', () => {
        const labels = [
            'Users',
            'Guarantors',
            'Loans',
            'Savings',
            'Loan Requests',
            'Whitelist',
            'Karma',
            'Organization',
            'Loan Products',
            'Savings Products',
            'Fees and Charges',
            'Transactions',
            'Services',
            'Service Account',
            'Settlements',
            'Reports',
            'Preferences',
            'Fees and Pricing',
            'Audit Logs',
        ];

        render(<Sidebar />);

        labels.forEach((label) => {
            const element = screen.getByTestId(`label${label}`);
            expect(element).toBeInTheDocument();
        });
    });

    test('checks that active item has correct styles', () => {
        render(<Sidebar />);
        const activeItem = screen.getByTestId('labelUsers').closest('a');
        expect(activeItem).toHaveClass('bg-[#f3fcfc]');
        expect(activeItem).toHaveClass('border-l-[#39CDCC]');
    });
});
