import { render, screen } from "@testing-library/react";
import { Provider, useDispatch } from "react-redux";
import { store } from '../../store';
import { setSearchParams } from "../../actions";
import Body from "../Body";
import { playlistMockData, playlistNullMockData } from "./MockData/MockData";

const MockAppComponent = ({playlist, viewMode}) => {
    return (
        <Provider store={store}>
           <MockBodyComponent playlist={playlist} viewMode={viewMode} />
        </Provider>
    );
}

const MockBodyComponent = ({playlist, viewMode}) => {

    if (viewMode === 'no-result') {
        const dispatch = useDispatch();
        dispatch(setSearchParams('test see all'));
    }

    return (
        <Body playlist={playlist}/>
    );
}

it('testing body Component complete', () => {

    render(<MockAppComponent playlist={playlistMockData} viewMode='all' />);
    const artistElement = screen.getByText(/test artist 1/i);
    const albumElement = screen.getByText(/test album 1/i);
    expect(artistElement).toBeInTheDocument;
    expect(albumElement).toBeInTheDocument;
});

it('testing body Component New Search', () => {

    render(<MockAppComponent playlist={playlistNullMockData} viewMode='all' />);
    const titleElement = screen.getByText(/Use the search bar to find the music of your taste/i);
    expect(titleElement).toBeInTheDocument;
});

it('testing body Component Not Result', () => {

    render(<MockAppComponent playlist={playlistNullMockData} viewMode='no-result' />);
    const titleElement = screen.getByText(/No results found for "test see all"/i);
    expect(titleElement).toBeInTheDocument;
});