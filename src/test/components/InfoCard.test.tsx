import { render, screen } from '@testing-library/react';
import InfoCard from '@/components/cards/InfoCard';
import { Providers } from '@/app/Provider';

describe('InfoCard', () => {
    beforeEach(() => {
        render(
            <Providers>
                <InfoCard title="Contact Info" infos={mockInfos} />
            </Providers>
        );
    })
    const mockInfos = [
        { name: 'Email', value: 'john@example.com' },
        { name: 'Phone', value: '123-456-7890' },
    ];

    it('renders the title if provided', () => {

        expect(screen.getByText('Contact Info')).toBeInTheDocument();
        expect(screen.getByTestId('tile:Contact Info')).toBeInTheDocument();
    });


    it('renders all info items with correct names and values', () => {
        mockInfos.forEach((info) => {
            expect(screen.getByText(info.name)).toBeInTheDocument();
            expect(screen.getByText(info.value)).toBeInTheDocument();
            expect(screen.getByTestId(`infoName:${info.name}`)).toBeInTheDocument();
            expect(screen.getByTestId(`infoValue:${info.value}`)).toBeInTheDocument();
        });
    });

    it('applies a bottom border when showBorder is true', () => {
        const { container } = render(<InfoCard title="Border Test" infos={mockInfos} showBorder />);
        const wrapper = screen.getByTestId('tile:Border Test');
        expect(wrapper.className).toMatch(/border-b-2/);
        expect(container.firstChild).toHaveClass('pb-4');
    });

    it('does not apply a bottom border when showBorder is false or undefined', () => {
        const { container } = render(<InfoCard title="No Border" infos={mockInfos} />);
        const wrapper = screen.getByTestId('tile:No Border');
        expect(wrapper.className).not.toMatch(/border-b-2/);
        expect(container.firstChild).not.toHaveClass('pb-4');
    });
});
