import { useState } from 'react'
import Nav from '../components/Nav/Nav'
import Users from '../components/Users/Users'

import LoadingSpinner from '../common/LoadingSpinner'

function UsersPage() {
  const [toggleNeedToLogIn, setToggleNeedToLogIn] = useState(<LoadingSpinner />)

  // const user = useSelector((state) => state.users)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(checkLogin(setToggleNeedToLogIn))
  // }, [])

  const [user, setUser] = useState({ id: 1 })

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
