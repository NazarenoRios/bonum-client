import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../common/Footer'
import Devices from '../components/Home/Devices'
import LoginBanner from '../components/Home/LoginBanner'
import LoginNav from '../components/Home/LoginNav'
import LoginPhotos from '../components/Home/LoginPhotos'
import LoginStream from '../components/Home/LoginStream'
import PreFooter from '../common/PreFooter'

function HomePage() {
  // const navigate = useNavigate()
  // const token = localStorage.getItem('token')

  // useEffect(() => {
  //   if (token) {
  //     navigate('/home')
  //   }
  // }, [token])

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

export default HomePage
