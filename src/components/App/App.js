import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import Header from '../Header/Header.jsx';
import { useEffect, useState } from 'react';
import PageNotFound from '../PageNotFound/PageNotFound.jsx';
import Profile from '../Profile/Profile.jsx';
import Movies from '../Movies/Movies.jsx';
import SavedMovies from '../SavedMovies/SavedMovies.jsx'
import GeneralForm from '../GeneralForm/GeneralForm.jsx';
import Landing from "../Landing/Landing";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import * as api from '../../utils/MainApi';
import * as movieApi from '../../utils/MoviesApi.js';
import { SEARCH_KEY, TOKEN_KEY } from '../../utils/config';

function App() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem(TOKEN_KEY));
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState(false);
  const [isErrors, setIsErrors] = useState({ errors: false, errorsText: '' });
  const navigate = useNavigate();
  const path = useLocation().pathname;
  const isLanding = path === '/';

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (loggedIn) {
      Promise.all([api.getUser(token), movieApi.getMovies(token), api.getSavedMovies(token)])
        .then(([user, dataMovies, dataSavedMovie]) => {
          setCurrentUser(user)
          setMovies(dataMovies)
          setSavedMovies(dataSavedMovie)
        })
        .catch((err) => console.log(`ошибка ${err}`))
    }
  }, [loggedIn])

  useEffect(() => {
    checkToken();
  }, [])

  const handleInfoTooltip = () => {
    setIsInfoTooltipPopupOpen(true);
  }

  const closePopup = () => {
    setIsInfoTooltipPopupOpen(false);
  }

  const handleUpdateUser = (user) => {
    const token = localStorage.getItem(TOKEN_KEY);

    setIsLoading(true)
    api.updateUser(user, token)
      .then((user) => {
        setCurrentUser(user);
        handleInfoTooltip()
        setIsErrors({})
      })
      .catch((err) => {
        setIsErrors({ errors: true, errorsText: err })
        handleInfoTooltip();
      })
      .finally(() => setIsLoading(false))
  }

  const handleLogin = (email, password) => {
    setIsLoading(true)
    api
      .login(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          setIsErrors({})
          setLoggedIn(true);
          navigate('/movies');
        }
      })
      .catch((err) => {
        setIsErrors({ errors: true, errorsText: err })
        handleInfoTooltip()
      })
      .finally(() => {
        setIsLoading(false)
      })
  };

  const handleRegister = (email, password, name) => {
    setIsLoading(true)
    api
      .register(email, password, name)
      .then(() => {
        setIsErrors({})
        handleLogin(email, password)
      })
      .catch((err) => {
        setIsErrors({ errors: true, errorsText: err })
        handleInfoTooltip()
      })
      .finally(() => {
        setIsLoading(false)
      })
  };

  const handleLogout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(SEARCH_KEY)
    setLoggedIn(false);
    setCurrentUser({});
    navigate('/', { replace: true });
  }

  const checkToken = () => {
    const token = localStorage.getItem('token');

    if (token) {
      api.getUser(token)
        .then(() => {
          setLoggedIn(true);
        })
        .catch((err) => {
          console.log(err)
          localStorage.clear();
          setLoggedIn(false)
          navigate('/', { replace: true })
        })
    }
  }


  const handleLikeMovie = (movies) => {
    const token = localStorage.getItem(TOKEN_KEY);

    api.savedMovies(movies, token)
      .then((movie) => {
        setSavedMovies([...savedMovies, movie]);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleDeleteMovie = (movies) => {
    const token = localStorage.getItem(TOKEN_KEY);

    api.deleteMovie(movies._id, token)
      .then(() => {
        setSavedMovies((savedMovies) => savedMovies.filter((c) => c._id !== movies._id))
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route element={<Header isLanding={isLanding} loggedIn={loggedIn} />}>
          <Route path='/' element={<Landing />} />
          <Route
            path='/movies'
            element={
              <ProtectedRoute
                element={Movies}
                loggedIn={loggedIn}
                movies={movies}
                savedMovies={savedMovies}
                handleLikeMovie={handleLikeMovie}
                handleDeleteMovie={handleDeleteMovie}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path='/saved-movies'
            element={
              <ProtectedRoute
                element={SavedMovies}
                loggedIn={loggedIn}
                movies={savedMovies}
                savedMovies={savedMovies}
                handleDeleteMovie={handleDeleteMovie}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path='/profile'
            element={
              <ProtectedRoute
                element={Profile}
                loggedIn={loggedIn}
                onSignOut={handleLogout}
                onUpdateUser={handleUpdateUser}
                isLoading={isLoading}
              />
            }
          />
        </Route>
        <Route path='/signup' element={<GeneralForm onRegister={handleRegister} isLoading={isLoading} />} />
        <Route path='/signin' element={<GeneralForm onLogin={handleLogin} isLoading={isLoading} />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes >
      <InfoTooltip onClose={closePopup} isOpen={isInfoTooltipPopupOpen} isErrors={isErrors} />
    </CurrentUserContext.Provider>
  );
}

export default App;
