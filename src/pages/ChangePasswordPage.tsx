import { useEffect, useState } from 'react'
import Nav from '../components/Nav/Nav'

import ChangePassword from '../components/MyProfile/ChangePassword'
import LoadingSpinner from '../common/LoadingSpinner'
import { checkLogin } from '../utils/checkLogin'

function ChangePasswordPage() {
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
        <ChangePassword />
      </>
    )
  }

  return <>{toggleNeedToLogIn}</>
}

export default ChangePasswordPage
