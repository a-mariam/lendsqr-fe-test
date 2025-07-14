import { render, screen } from '@testing-library/react';
import Topbar from '@/features/layout/topbar';
import '@testing-library/jest-dom';

describe('Topbar component', () => {
    test('renders logo image', () => {
        render(<Topbar />);
        const logo = screen.getByTestId('lendsqrLogo');
        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute('alt', 'Logo');
    });

    test('renders search input', () => {
        render(<Topbar />);
        const searchInput = screen.getByTestId('searchInput');
        expect(searchInput).toBeInTheDocument();
        expect(searchInput).toHaveAttribute('placeholder', 'Search for anything');
    });

    test('renders notification icon', () => {
        render(<Topbar />);
        const bellIcon = screen.getByTestId('notificationIcon');
        expect(bellIcon).toBeInTheDocument();
    });

    test('renders user name', () => {
        render(<Topbar />);
        const userName = screen.getByTestId('userName');
        expect(userName).toBeInTheDocument();
        expect(userName).toHaveTextContent('Adedeji');
    });
});
