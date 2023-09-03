import { render, screen } from "@testing-library/react";
import { Provider, useDispatch } from "react-redux";
import { store } from '../../store';
import Albums from "../Albums";
import { spotifyConstant } from '../../constant/spotify'
import { setSearchParams } from "../../actions";
import { albumsMockData, albumsNullMockData } from "./MockData/MockData";

const MockAppComponent = ({albums, viewMode}) => {
    return (
        <Provider store={store}>
           <MockAlbumsComponent albums={albums} viewMode={viewMode} />
        </Provider>
    );
}

const MockAlbumsComponent = ({albums, viewMode}) => {

    if (viewMode === spotifyConstant.VIEW_MODE_ALBUMS) {
        const dispatch = useDispatch();
        dispatch(setSearchParams('test see all'));
    }

    return (
        <Albums albums={albums} viewMode={viewMode} />
    );
}

it('testing Album Component name', () => {

    render(<MockAppComponent albums={albumsMockData} viewMode={spotifyConstant.VIEW_MODE_ALL} />);
    const album1Element = screen.getByText(/test album 1/i);
    const album2Element = screen.getByText(/test album 2/i);
    expect(album1Element).toBeInTheDocument;
    expect(album2Element).toBeInTheDocument;
});

it('testing see all Album', () => {
    render(<MockAppComponent albums={albumsMockData} viewMode={spotifyConstant.VIEW_MODE_ALBUMS} />);
    const titleElement = screen.getByText(/All albums for "test see all"/i);
    expect(titleElement).toBeInTheDocument;
});

it('testing Album no result', () => {
    render(<MockAppComponent albums={albumsNullMockData} viewMode={spotifyConstant.VIEW_MODE_ALL} />);
    const titleElement = screen.getByText(/No Albums/i);
    expect(titleElement).toBeInTheDocument;
});