import { useContext, useEffect, useState } from 'react'
import Nav from '../components/Nav/Nav'

// import { useDispatch, useSelector } from 'react-redux'
// import { checkLogin } from '../state/user'
import ChangePassword from '../components/MyProfile/ChangePassword'
import LoadingSpinner from '../common/LoadingSpinner'
import { UserContext } from '../context/userContext'
import { checkLogin } from '../utils/checkLogin'

function ChangePasswordPage() {
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
        <ChangePassword />
      </>
    )
  }

  return <>{toggleNeedToLogIn}</>
}

export default ChangePasswordPage
