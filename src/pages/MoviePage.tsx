import { useContext, useEffect, useState } from 'react'
import Nav from '../components/Nav/Nav'

import MovieDetail from '../components/MoviesAndSeries/MovieDetail'
import LoadingSpinner from '../common/LoadingSpinner'
import { UserContext } from '../context/userContext'
import { checkLogin } from '../utils/checkLogin'

function MoviePage() {
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

  if (user.id) {
    return (
      <>
        <Nav />
        <MovieDetail />
      </>
    )
  }

  return <>{toggleNeedToLogIn}</>
}

export default MoviePage
