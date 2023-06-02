import { useEffect, useState } from 'react'
import Nav from '../components/Nav/Nav'
import MyProfile from '../components/MyProfile/MyProfile'

import LoadingSpinner from '../common/LoadingSpinner'

function MyProfilePage() {
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
        <MyProfile />
      </>
    )
  }

  return <>{toggleNeedToLogIn}</>
}

export default MyProfilePage
