import { useContext, useEffect, useState } from 'react'
import Nav from '../components/Nav/Nav'
import Users from '../components/Users/Users'
import { UserContext } from '../context/userContext'
import { checkLogin } from '../utils/checkLogin'

import LoadingSpinner from '../common/LoadingSpinner'

function UsersPage() {
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
        <Users />
      </>
    )
  }

  return <>{toggleNeedToLogIn}</>
}

export default UsersPage
