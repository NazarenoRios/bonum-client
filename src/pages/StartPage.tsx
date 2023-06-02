import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../common/Footer'
import Devices from '../components/Start/Devices'
import LoginBanner from '../components/Start/LoginBanner'
import LoginNav from '../components/Start/LoginNav'
import LoginPhotos from '../components/Start/LoginPhotos'
import LoginStream from '../components/Start/LoginStream'
import PreFooter from '../common/PreFooter'
import { UserContext } from '../context/UserContext'

function StartPage() {
  // const navigate = useNavigate()
  // const token = localStorage.getItem('token')

  // useEffect(() => {
  //   if (token) {
  //     navigate('/home')
  //   }
  // }, [token])

  const userContext = useContext(UserContext)
  console.log(userContext)

  return (
    <>
      <Main>
        <LoginNav />
        <LoginBanner />
        <LoginStream />
        <LoginPhotos />
        <Devices />
        <PreFooter />
        <Footer />
      </Main>
    </>
  )
}

const Main = styled.main`
  width: auto;
  height: auto;
  overflow: auto;
  background: #050714;
`

export default StartPage
