
import '@testing-library/react'
import { render, screen ,fireEvent} from '@testing-library/react';
import Topbar from '@/features/layout/topbar';
import '@testing-library/jest-dom';
import {Providers} from "@/app/Provider";
import React from "react";
import { store } from '@/redux/store';

describe('Topbar component', () => {
    beforeEach(() => {
        render(
            <Providers>
                <Topbar />
            </Providers>
        )
    })
    test('renders logo image', () => {
        const logo = screen.getByTestId('lendsqrLogo');
        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute('alt', 'Logo');
    });

    test('renders search input', () => {
        const searchInput = screen.getByTestId('searchInput');
        expect(searchInput).toBeInTheDocument();
        expect(searchInput).toHaveAttribute('placeholder', 'Search for anything');
    });

    test('renders notification icon', () => {
        const bellIcon = screen.getByTestId('notificationIcon');
        expect(bellIcon).toBeInTheDocument();
    });

    // test('renders user name', () => {
    //     const userName = screen.getByTestId('userName');
    //     expect(userName).toBeInTheDocument();
    //     expect(userName).toHaveTextContent('Adedeji');
    // });
    it('dispatches setShowMobileSidebar when menu icon is clicked', () => {
        // const menuButton = screen.getByRole('button', { hidden: true });
        const menuButton = screen.getByTestId('menuBar')
        fireEvent.click(menuButton);
        expect(store.getState().layout.showMobileSidebar).toBe(true);
    });
});
