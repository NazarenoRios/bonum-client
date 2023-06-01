// dom
import { Link } from 'react-router-dom'

// styles
import styled from 'styled-components'
import { Image } from '@chakra-ui/react'
import '../../common/btnEffect.css'

// imgs
import logo2 from '../../assets/Login2/cta-logo-two.png'
import logo from '../../assets/logo/butterLogo3.png'
import background from '../../assets/Login2/banner.jpeg'
import backgroundMD from '../../assets/Login2/bannerMD.jpeg'

const LoginBanner = () => {
  return (
    <>
      <Background>
        <Container>
          <Content>
            <Image src={logo} alt='logo/img' className='img butter-logo' />
            <Link to='register'>
              <button type='button' className='btn-effect'>
                <span>REGISTRESE AQUI</span>
                <i></i>
              </button>
            </Link>
            <h4>Transmitir ahora: se aplican términos</h4>
            <Image src={logo2} alt='logo/img' className='img' />
            <button type='button' className='links'>
              Regístrese solo para Bonum
            </button>
            <button type='button' className='links text-muted'>
              $4.99/mes o $49.99/año
            </button>
          </Content>
        </Container>
      </Background>
    </>
  )
}

const Background = styled.section`
  background-image: url(${background});
  height: 100vh;
  margin-top: 70px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 1025px) {
    background-image: url(${backgroundMD});
    margin: 0;
  }

  @media screen and (max-width: 280px) and (max-width: 767px) {
    height: 75vh;
  }
`

const Container = styled.div`
  width: 85%;
  display: flex;
  margin-right: 71vw;

  @media screen and (max-width: 2160px) {
    margin-right: 68vw;
  }

  @media screen and (max-width: 1980px) {
    margin-right: 65vw;
  }

  @media screen and (max-width: 1780px) {
    margin-right: 62vw;
  }

  @media screen and (max-width: 1650px) {
    margin-right: 58vw;
  }

  @media screen and (max-width: 1460px) {
    margin-right: 55vw;
  }

  @media screen and (max-width: 1365px) {
    margin-right: 50vw;
  }

  @media screen and (max-width: 1230px) {
    margin-right: 41vw;
  }

  @media screen and (max-width: 1125px) {
    margin-right: 41vw;
  }

  @media screen and (max-width: 1025px) {
    margin: 0 0;
    margin-top: 35vh;
  }
`

const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 650px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 768px) and (max-width: 1200px) {
    max-width: 550px;
  }

  @media screen and (max-width: 550px) and (max-width: 767px) {
    max-width: 450px;
    margin-top: 13vh;
  }

  @media screen and (max-width: 375px) and (max-width: 550) {
    max-width: 350px;
    margin-top: 13vh;
  }

  @media screen and (max-width: 280px) and (max-width: 375px) {
    max-width: auto;
    margin-top: 13vh;
  }

  h4 {
    margin: 1vh 0;
  }

  .img {
    width: 100%;
    height: auto;
    display: block;
    max-width: 600px;
    object-fit: contain;
    margin-bottom: 1vh;
  }

  .butter-logo {
    height: 200px;
  }

  .links {
    outline: none;
    border: none;
    font-size: 19px;
    background: transparent;
    color: #f9f9f9;

    @media screen and (max-width: 280px) and (max-width: 550px) {
      font-size: 15px;
    }
  }

  .text-muted {
    color: gray;
  }
`

export default LoginBanner
