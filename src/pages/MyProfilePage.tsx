import { useEffect, useState } from 'react'
import Nav from '../components/Nav/Nav'
import MyProfile from '../components/MyProfile/MyProfile'

import LoadingSpinner from '../common/LoadingSpinner'
import { checkLogin } from '../utils/checkLogin'

function MyProfilePage() {
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
        <MyProfile />
      </>
    )
  }

  return <>{toggleNeedToLogIn}</>
}

export default MyProfilePage
