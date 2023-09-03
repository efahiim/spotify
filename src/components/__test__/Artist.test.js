import { render, screen } from "@testing-library/react";
import Artist from "../Artist";
import { artistMockData } from './MockData/MockData'

it('testing Artist Component name', () => {
    render(<Artist artist={artistMockData} />);
    const nameElement = screen.getByText(/test artist/i);
    expect(nameElement).toBeInTheDocument;
});