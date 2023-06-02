import { useState } from 'react'
import Nav from '../components/Nav/Nav'
import User from '../components/Users/User'

import LoadingSpinner from '../common/LoadingSpinner'

function UserPage() {
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
        <User />
      </>
    )
  }

  return <>{toggleNeedToLogIn}</>
}

export default UserPage
