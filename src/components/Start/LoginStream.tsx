// style
import { Image } from '@chakra-ui/react'
import styled from 'styled-components'

// imgs
import imgStream from '../../assets/Login2/stream.png'

function LoginStream() {
  return (
    <>
      <Section>
        <Container>
          <TextInfo>
            <h1 className='butterflix-titles'>Mire con Premier Access el</h1>
            <h1 className='butterflix-titles'>el mismo día está en los cines</h1>
            <p>
              Disponible el 28 de mayo. Obtenga acceso Premier a Cruella por $ 19.99 con una
              suscripción a Bonum y mire tantas veces como desee antes de que esté disponible para
              todos los suscriptores de Bonum en una fecha posterior.
            </p>
            <button type='button' className='btn-effect btn-theme-butterflix'>
              <span>OBTÉN EL PAQUETE AQUÍ</span>
              <i></i>
            </button>
          </TextInfo>
          <ImgInfo>
            <Image src={imgStream} alt='img/stream' className='imgStream' />
          </ImgInfo>
        </Container>
      </Section>
    </>
  )
}

const Section = styled.section`
  padding: 50px 5%;
  position: relative;
  background: transparent;
  height: 100vh;
  background: #050714;

  @media screen and (max-width: 991px) {
    padding: 35px 50px;
  }

  @media screen and (max-width: 767px) {
    padding: 25px;
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;

  @media screen and (max-width: 991px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`

const TextInfo = styled.div`
  width: 48%;
  flex: 0 auto;
  opacity: 1;
  z-index: 1500;
  position: relative;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 991px) {
    width: 100%;
    padding: 0;
  }

  h1 {
    text-align: center;
    font-size: 38px;

    @media screen and (max-width: 1426px) {
      font-size: 25px;
    }
  }

  p {
    font-size: 1rem;
    font-weight: 100;
    margin: 1vh 0;
    text-align: center;
    color: #fff;

    @media screen and (max-width: 1426px) {
      font-size: 15px;
    }

    @media screen and (max-width: 375px) and (max-width: 550px) {
      font-size: 0.85rem;
      line-height: 1rem;
    }

    @media screen and (max-width: 280px) and (max-width: 375px) {
      font-size: 0.7rem;
      line-height: 1rem;
      margin-top: 1vh;
    }
  }
`

const ImgInfo = styled.div`
  width: 48%;
  flex: 0 auto;
  opacity: 1;
  z-index: 1500;
  position: relative;
  display: flex;

  @media screen and (max-width: 991px) {
    width: 100%;
    padding: 0;
    justify-content: center;
  }

  .imgStream {
    width: 100%;
    height: auto;

    @media screen and (max-width: 500px) and (max-width: 1200px) {
      height: auto;
      width: 100%;
      object-fit: contain;
    }

    @media screen and (max-width: 280px) and (max-width: 500px) {
      height: 31vh;
      width: 100%;
      object-fit: contain;
    }
  }
`

export default LoginStream
