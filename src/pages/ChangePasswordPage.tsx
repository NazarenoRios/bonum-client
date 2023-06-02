import { useState } from 'react'
import Nav from '../components/Nav/Nav'

// import { useDispatch, useSelector } from 'react-redux'
// import { checkLogin } from '../state/user'
import ChangePassword from '../components/MyProfile/ChangePassword'
import LoadingSpinner from '../common/LoadingSpinner'

function ChangePasswordPage() {
  const [toggleNeedToLogIn, setToggleNeedToLogIn] = useState(<LoadingSpinner />)

  //   const user = useSelector((state) => state.users)
  //   const dispatch = useDispatch()

  //   useEffect(() => {
  //     dispatch(checkLogin(setToggleNeedToLogIn))
  //   }, [])

  const [user, setUser] = useState({ id: 1 })

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
