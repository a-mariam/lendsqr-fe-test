import '@testing-library/react'
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '@/features/auth/login';
import '@testing-library/jest-dom';

jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push: jest.fn(),
    }),
}));

describe('Login Component', () => {
    test('renders welcome text and form', () => {
        render(<Login />);
        expect(screen.getByTestId('welcomeText')).toBeInTheDocument();
        expect(screen.getByTestId('loginForm')).toBeInTheDocument();
        expect(screen.getByTestId('loginButton')).toBeInTheDocument();
    });

    test('login button is disabled initially', () => {
        render(<Login />);
        const button = screen.getByTestId('loginButton');
        expect(button).toBeDisabled();
    });

    test('shows email validation message on invalid email', () => {
        render(<Login />);
        const emailInput = screen.getByTestId('userEmailInput');
        fireEvent.change(emailInput, { target: { value: 'invalidemail' } });

        expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();
    });

    test('enables login button when email and password are valid', () => {
        render(<Login />);
        const emailInput = screen.getByTestId('userEmailInput');
        const passwordInput = screen.getByTestId('userPasswordInput');

        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'ValidPass123' } });

        const button = screen.getByTestId('loginButton');
        expect(button).toBeEnabled();
    });

    test('navigates to /users on successful login click', () => {
        const pushMock = jest.fn();
        jest.mock('next/navigation', () => ({
            useRouter: () => ({
                push: pushMock,
            }),
        }));

        render(<Login />);
        const emailInput = screen.getByTestId('userEmailInput');
        const passwordInput = screen.getByTestId('userPasswordInput');
        const button = screen.getByTestId('loginButton');

        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'ValidPass123' } });

        fireEvent.click(button);
    });
});

