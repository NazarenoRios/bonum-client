import { useEffect, useState } from 'react'
import Nav from '../components/Nav/Nav'

import TvDetail from '../components/MoviesAndSeries/TvDetail'
import LoadingSpinner from '../common/LoadingSpinner'
import { checkLogin } from '../utils/checkLogin'

function TvPage() {
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
        <TvDetail />
      </>
    )
  }

  return <>{toggleNeedToLogIn}</>
}

export default TvPage
