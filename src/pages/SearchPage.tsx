import { useEffect, useState } from 'react'
import Footer from '../common/Footer'
import PreFooter from '../common/PreFooter'
import Nav from '../components/Nav/Nav'
import Search from '../components/Search/Search'
import LoadingSpinner from '../common/LoadingSpinner'
import { checkLogin } from '../utils/checkLogin'

function SearchDetail() {
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
        <Search />
        <PreFooter />
        <Footer />
      </>
    )
  }

  return <>{toggleNeedToLogIn}</>
}

export default SearchDetail
