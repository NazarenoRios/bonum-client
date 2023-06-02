import { useContext, useEffect, useState } from 'react'
import Nav from '../components/Nav/Nav'

import TvDetail from '../components/MoviesAndSeries/TvDetail'
import LoadingSpinner from '../common/LoadingSpinner'
import { UserContext } from '../context/userContext'
import { checkLogin } from '../utils/checkLogin'

function TvPage() {
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
        <TvDetail />
      </>
    )
  }

  return <>{toggleNeedToLogIn}</>
}

export default TvPage
