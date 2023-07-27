import React from 'react';
import './Main.css';
import Landing from '../Landing/Landing';
import Movies from '../Movies/Movies';

const Main = ({ loggedIn, setLoggedIn }) => {
  return (
    <main className='main'>
      {loggedIn ? (
        <>
          <Movies loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        </>
      ) : (
        <>
          <Landing />
        </>
      )}
    </main>
  );
};

export default Main;
