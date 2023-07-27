import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import { useState } from 'react';
import PageNotFound from '../PageNotFound/PageNotFound.jsx';
import Profile from '../Profile/Profile.jsx';
import Movies from '../Movies/Movies.jsx';
import SavedMovies from '../SavedMovies/SavedMovies.jsx'
import GeneralForm from '../GeneralForm/GeneralForm.jsx';
import Landing from "../Landing/Landing";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const path = useLocation().pathname;
  const isLanding = path === '/';
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedIn(false)
    navigate('/', { replace: true })
  }

  return (
    <>
      <Routes>
        <Route element={<Header isLanding={isLanding} loggedIn={loggedIn} />}>
          <Route path='/' element={<Landing loggedIn={loggedIn} />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/saved-movies' element={<SavedMovies />} />
          <Route path='/profile' element={<Profile onSignOut={handleLogout} />} />
        </Route>
        <Route path='/signup' element={<GeneralForm setLoggedIn={setLoggedIn} />} />
        <Route path='/signin' element={<GeneralForm setLoggedIn={setLoggedIn} />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>

    </>
  );
}

export default App;
