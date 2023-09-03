import React, { useEffect } from 'react';
import './App.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setAccessToken } from './actions';
import ErrorBoundary from './ErrorBoundary';
import AuthService from './services/auth';
import Header from './components/Header';
import Body from './components/Body';

function App() {

  let token      = useSelector(state => state.token);
  const playlist = useSelector(state => state.spotify);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {

      let accessToken = getWithExpiry("access_token");

      if (accessToken) {
        dispatch(setAccessToken(accessToken.token, accessToken.expires_in));
        token = accessToken.token;
      }

      if (!accessToken) {
        AuthService.getToken().then((accessToken) => {
          dispatch(setAccessToken(accessToken.data.access_token, accessToken.data.expiry_at));
          const item = {
            token: accessToken.data.access_token,
            expiry: accessToken.data.expires_in,
          }
          window.localStorage.setItem("access_token", JSON.stringify(item));
        })
          .catch((error) => {
            console.log(error);
          });
      }
    }

    function getWithExpiry(key) {
      const itemStr = localStorage.getItem(key)
      if (!itemStr) {
        return null
      }
      const item = JSON.parse(itemStr)
      const now = new Date()
      if (now.getTime() > item.expiry) {
        localStorage.removeItem(key)
        return null
      }
      return item;
    }

  }, [token]);

  return (
    <ErrorBoundary>
      <div className="app">
      <Header token={token}/>
      <Body playlist={playlist} />
      </div>
    </ErrorBoundary>
  );
}

export default App;
