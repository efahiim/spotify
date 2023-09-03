import { render, screen } from "@testing-library/react";
import { Provider, useDispatch } from "react-redux";
import { store } from '../../store';
import { spotifyConstant } from '../../constant/spotify'
import { setSearchParams } from "../../actions";
import Artists from "../Artists";
import { artistsMockData, artistsNullMockData } from "./MockData/MockData";

const MockAppComponent = ({artists, viewMode}) => {
    return (
        <Provider store={store}>
           <MockArtistsComponent artists={artists} viewMode={viewMode} />
        </Provider>
    );
}

const MockArtistsComponent = ({artists, viewMode}) => {

    if (viewMode === spotifyConstant.VIEW_MODE_ARTISTS) {
        const dispatch = useDispatch();
        dispatch(setSearchParams('test see all'));
    }

    return (
        <Artists artists={artists} viewMode={viewMode} />
    );
}

it('testing artists Component name', () => {

    render(<MockAppComponent artists={artistsMockData} viewMode={spotifyConstant.VIEW_MODE_ALL} />);
    const artist1Element = screen.getByText(/test artist 1/i);
    const artist2Element = screen.getByText(/test artist 2/i);
    expect(artist1Element).toBeInTheDocument;
    expect(artist2Element).toBeInTheDocument;
});

it('testing see all Artists', () => {
    render(<MockAppComponent artists={artistsMockData} viewMode={spotifyConstant.VIEW_MODE_ARTISTS} />);
    const titleElement = screen.getByText(/All artists for "test see all"/i);
    expect(titleElement).toBeInTheDocument;
});

it('testing artists no result', () => {
    render(<MockAppComponent artists={artistsNullMockData} viewMode={spotifyConstant.VIEW_MODE_ALL} />);
    const titleElement = screen.getByText(/No Artists/i);
    expect(titleElement).toBeInTheDocument;
});