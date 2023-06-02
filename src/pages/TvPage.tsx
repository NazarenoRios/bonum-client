import { useState } from 'react'
import Nav from '../components/Nav/Nav'

import TvDetail from '../components/MoviesAndSeries/TvDetail'
import LoadingSpinner from '../common/LoadingSpinner'

function TvPage() {
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
        <TvDetail />
      </>
    )
  }

  return <>{toggleNeedToLogIn}</>
}

export default TvPage
