import { useState } from 'react'
import Nav from '../components/Nav/Nav'
import Favorites from '../components/Favorites/Favorites'

import LoadingSpinner from '../common/LoadingSpinner'

function FavoritesPage() {
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
        <Favorites />
      </>
    )
  }

  return <>{toggleNeedToLogIn}</>
}

export default FavoritesPage
