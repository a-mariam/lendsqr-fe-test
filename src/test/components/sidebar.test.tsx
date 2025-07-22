import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from '@/features/layout/sidebar';
import { Providers } from '@/app/Provider';
import { store } from '@/redux/store';
import { setShowMobileSidebar } from '@/redux/slice/layoutSlice';
import {act} from "react";

const renderSidebar = () =>
    render(
        <Providers>
            <Sidebar />
        </Providers>
    );

describe('Sidebar', () => {
    it('renders sidebar labels', () => {
        render(
            <Providers>
                <Sidebar />
            </Providers>
        )
        expect(screen.getByTestId('labelUsers')).toBeInTheDocument();
        expect(screen.getByTestId('labelGuarantors')).toBeInTheDocument();
    });

    it('does not show mobile sidebar by default', () => {
        render(
            <Providers>
                <Sidebar />
            </Providers>
        )
        expect(screen.queryByTestId('blurry')).not.toBeInTheDocument();
    });

    it('shows mobile sidebar when store says so', async () => {
        await act(async () => {
            store.dispatch(setShowMobileSidebar(true));
        });
        renderSidebar();
        expect(screen.getByTestId('blurry')).toBeInTheDocument();
    });

    it('closes mobile sidebar on background click', () => {
        store.dispatch(setShowMobileSidebar(true));
        renderSidebar();
        const backdrop = screen.getByTestId('blurry');
        fireEvent.click(backdrop);
        expect(store.getState().layout.showMobileSidebar).toBe(false);
    });

    it('dispatches current tab when sidebar item clicked', () => {
        renderSidebar();
        const label = screen.getByTestId('labelUsers');
        fireEvent.click(label);
        expect(store.getState().layout.currentTab).toBe('Users');
    });
});
