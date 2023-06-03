import { useEffect, useState } from 'react'
import Nav from '../components/Nav/Nav'

import MovieDetail from '../components/MoviesAndSeries/MovieDetail'
import LoadingSpinner from '../common/LoadingSpinner'
import { checkLogin } from '../utils/checkLogin'

function MoviePage() {
  const token = localStorage.getItem('token')

  const [toggleNeedToLogIn, setToggleNeedToLogIn] = useState(<LoadingSpinner />)

  const getUser = async () => {
    try {
      await checkLogin(setToggleNeedToLogIn)
    } catch (err) {
      console.log('ERR', err)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  if (token) {
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
