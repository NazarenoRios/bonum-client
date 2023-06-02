import { useState } from 'react'
import Nav from '../components/Nav/Nav'

import MovieDetail from '../components/MoviesAndSeries/MovieDetail'
import LoadingSpinner from '../common/LoadingSpinner'

function MoviePage() {
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
        <MovieDetail />
      </>
    )
  }

  return <>{toggleNeedToLogIn}</>
}

export default MoviePage
