import { Routes, Route } from 'react-router-dom'
import StartPage from './pages/StartPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import NotFound from './pages/NotFound'
import SearchPage from './pages/SearchPage'
import TvPage from './pages/TvPage'
import MoviePage from './pages/MoviePage'
import MyProfilePage from './pages/MyProfilePage'
import Disney from './components/Home/Categories/Category/Disney'
import Marvel from './components/Home/Categories/Category/Marvel'
import NatGeo from './components/Home/Categories/Category/NatGeo'
import Pixar from './components/Home/Categories/Category/Pixar'
import StarWars from './components/Home/Categories/Category/StarWars'
import NeedToLoginPage from './pages/NeedToLoginPage'
import ChangePasswordPage from './pages/ChangePasswordPage'
import FavoritesPage from './pages/FavoritesPage'
import UsersPage from './pages/UsersPage'
import UserPage from './pages/UserPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<StartPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/search' element={<SearchPage />} />
      <Route path='/tv/:id' element={<TvPage />} />
      <Route path='/movie/:id' element={<MoviePage />} />
      <Route path='/myprofile' element={<MyProfilePage />} />
      <Route path='/users' element={<UsersPage />} />
      <Route path='/user/:id' element={<UserPage />} />
      <Route path='/changepassword' element={<ChangePasswordPage />} />
      <Route path='/Disney' element={<Disney />} />
      <Route path='/Marvel' element={<Marvel />} />
      <Route path='/NatGeo' element={<NatGeo />} />
      <Route path='/Pixar' element={<Pixar />} />
      <Route path='/StarWars' element={<StarWars />} />
      <Route path='/needToLogin' element={<NeedToLoginPage />} />
      <Route path='/favorites' element={<FavoritesPage />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  )
}

export default App
