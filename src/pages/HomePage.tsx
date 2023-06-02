import { useContext, useEffect, useState } from 'react'
import Footer from '../common/Footer'
import LoadingSpinner from '../common/LoadingSpinner'
import PreFooter from '../common/PreFooter'
import Banner from '../components/Home/Banner/Banner'
import Categories from '../components/Home/Categories/Categories'
import FavoriteRow from '../components/Home/FavoriteRow/FavoriteRow'
import Row from '../components/Home/Row/Row'
import Nav from '../components/Nav/Nav'
import { UserContext } from '../context/userContext'
import { checkLogin } from '../utils/checkLogin'
import requests from '../utils/requests'

const HomePage = () => {
  const [toggleNeedToLogIn, setToggleNeedToLogIn] = useState(<LoadingSpinner />)

  const { user, setUser } = useContext(UserContext)

  const getUser = async () => {
    try {
      const userData = await checkLogin(setToggleNeedToLogIn)
      setUser(userData)
    } catch (err) {
      console.log('ERR', err)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  if (user?.id) {
    return (
      <>
        <Nav />
        <Banner />
        <Categories />
        <FavoriteRow title={'Mis Favoritos'} />
        <Row title='Tendencia ahora' fetchUrl={requests.fetchTrending} />
        <Row title='Mejor votados' fetchUrl={requests.fetchTopRated} />
        <Row title='Viejo oeste' fetchUrl={requests.fetchWestern} />
        <Row title='Accion' fetchUrl={requests.fetchActionMovies} />
        <Row title='Animacion' fetchUrl={requests.fetchAnimation} />
        <Row title='Terror' fetchUrl={requests.fetchHorrorMovies} />
        <Row title='Romance' fetchUrl={requests.fetchRomanceMovies} />
        <Row title='Ciencia Ficcion' fetchUrl={requests.fetchScifi} />
        <Row title='Comedia' fetchUrl={requests.fetchComedyMovies} />
        <Row title='Documentales' fetchUrl={requests.fetchDocumantaries} />
        <PreFooter />
        <Footer />
      </>
    )
  }

  return <>{toggleNeedToLogIn}</>
}

export default HomePage
