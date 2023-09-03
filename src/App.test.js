import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from 'react-redux';
import {store} from './store';

it('test App', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const inputElement = screen.getByPlaceholderText(/Artists, songs, or podcasts/i);
  expect(inputElement).toBeInTheDocument;
});