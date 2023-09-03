import { render, screen } from "@testing-library/react";
import Album from "../Album";
import { albumMockData } from './MockData/MockData'


it('testing Album Component name', () => {

    render(<Album album={albumMockData} />);
    const nameElement = screen.getByText(/test album/i);
    expect(nameElement).toBeInTheDocument;
});

it('testing Album Component artist', () => {

    render(<Album album={albumMockData} />);
    const artistElement = screen.getByText(/artist 1, artist 2/i);
    expect(artistElement).toBeInTheDocument;
});