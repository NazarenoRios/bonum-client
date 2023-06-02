import { useEffect, useState } from 'react'
import Footer from '../common/Footer'
import PreFooter from '../common/PreFooter'
import Nav from '../components/Nav/Nav'
import Search from '../components/Search/Search'
import LoadingSpinner from '../common/LoadingSpinner'

function SearchDetail() {
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
        <Search />
        <PreFooter />
        <Footer />
      </>
    )
  }

  return <>{toggleNeedToLogIn}</>
}

export default SearchDetail
