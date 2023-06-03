import { useEffect, useState } from 'react'
import Nav from '../components/Nav/Nav'
import Favorites from '../components/Favorites/Favorites'

import LoadingSpinner from '../common/LoadingSpinner'
import { checkLogin } from '../utils/checkLogin'

function FavoritesPage() {
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
        <Favorites />
      </>
    )
  }

  return <>{toggleNeedToLogIn}</>
}

export default FavoritesPage
