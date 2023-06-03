import { useEffect, useState } from 'react'
import Nav from '../components/Nav/Nav'
import Users from '../components/Users/Users'
import { checkLogin } from '../utils/checkLogin'

import LoadingSpinner from '../common/LoadingSpinner'

function UsersPage() {
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
        <Users />
      </>
    )
  }

  return <>{toggleNeedToLogIn}</>
}

export default UsersPage
