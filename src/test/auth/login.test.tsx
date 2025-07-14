
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '@/features/auth/login'; // adjust path based on where your file is
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
}));

describe('Login Component', () => {
    const pushMock = jest.fn();

    beforeEach(() => {
        (useRouter as jest.Mock).mockReturnValue({ push: pushMock });
    });

    it('renders welcome message', () => {
        render(<Login />);
        const welcomeText = screen.getByTestId('welcomeText');
        expect(welcomeText).toBeInTheDocument();
        expect(welcomeText).toHaveTextContent('Welcome!');
    });

    it('renders login form and input fields', () => {
        render(<Login />);
        const form = screen.getByTestId('loginForm');
        expect(form).toBeInTheDocument();

        const emailInput = screen.getByTestId('userEmailInput');
        const passwordInput = screen.getByTestId('userPasswordInput');

        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
    });

    it('renders forgot password text', () => {
        render(<Login />);
        expect(screen.getByText(/forgot password/i)).toBeInTheDocument();
    });

    it('navigates to home on login button click', () => {
        render(<Login />);
        const loginButton = screen.getByRole('button', { name: /log in/i });

        fireEvent.click(loginButton);

        expect(pushMock).toHaveBeenCalledWith('/');
    });
});
