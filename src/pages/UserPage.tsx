import { useEffect, useState } from 'react'
import Nav from '../components/Nav/Nav'
import User from '../components/Users/User'
import { checkLogin } from '../utils/checkLogin'

import LoadingSpinner from '../common/LoadingSpinner'

function UserPage() {
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
        <User />
      </>
    )
  }

  return <>{toggleNeedToLogIn}</>
}

export default UserPage
