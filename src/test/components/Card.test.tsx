import { render, screen } from '@testing-library/react';
import Card, { CardProps } from '@/components/cards/card';
import { Providers } from '@/app/Provider';

const mockProps: CardProps = {
    name: 'Users',
    id: 'card-users',
    imageUrl: '/icons/user.svg',
    imageBackgroundColor: '#F5F5F5',
    itemAmount: '1250',
};

describe('Card component', () => {
    beforeEach(() => (
        render(
            <Providers>
                <Card {...mockProps} />
            </Providers>
        )
    ))
    it('renders the card with correct text and formatting', () => {
        expect(screen.getByText('Users')).toBeInTheDocument();
        expect(screen.getByText('1,250')).toBeInTheDocument();
        expect(screen.getByAltText('Users')).toBeInTheDocument();
        expect(screen.getByTestId('card-users')).toBeInTheDocument();
    });

    it('applies the correct background color to the image wrapper', () => {
        const imageWrapper = screen.getByAltText('Users').parentElement;
        expect(imageWrapper).toHaveStyle({ backgroundColor: '#F5F5F5' });
    });
});
