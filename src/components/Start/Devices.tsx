// styles
import styled from 'styled-components'

// imgs
import img1 from '../../assets/Login2/Devices/Computer.png'
import img2 from '../../assets/Login2/Devices/TV.png'
import img3 from '../../assets/Login2/Devices/XBOX.png'
import img4 from '../../assets/Login2/Devices/mobile.png'

function Devices() {
  return (
    <>
      <Section>
        <Container>
          <Title>
            <h1>Disponible en tus dispositivos favoritos</h1>
          </Title>
          <GridImg>
            <Image>
              <img src={img1} alt='Computer' />
              <h2>Computadora</h2>
              <p>
                Chrome OS <br /> MacOS <br /> WindowsPC
              </p>
            </Image>

            <Image>
              <img src={img2} alt='TV' />
              <h2>TV</h2>
              <p>
                Amazon <br /> Fire TV <br /> Android TV <br /> Apple TV <br /> Chromecast <br /> LG
                TV <br /> Roku <br /> Samsung
              </p>
            </Image>

            <Image>
              <img src={img3} alt='XBOX' />
              <h2>XBOX</h2>
              <p>
                PS4 <br /> PS5 <br /> Xbox One <br /> Xbox Series X <br /> Xbox Series S <br />
              </p>
            </Image>

            <Image>
              <img src={img4} alt='mobile' />
              <h2>Celular</h2>
              <p>
                Amazon Fire Tablets <br /> Android Phones & Tablets <br /> iPhone & iPad <br />
              </p>
            </Image>
          </GridImg>
        </Container>
      </Section>
    </>
  )
}

const Section = styled.section`
  padding: 3vh 0 0vh 0;
  position: relative;
  margin-bottom: 100px;
`
const Container = styled.div`
  width: 95%;
  margin: 0 auto;
`
const Title = styled.div`
  text-align: center;
  margin-bottom: 0 0 4vh 0;

  h1 {
    font-size: 3rem;
    margin-bottom: 40px;

    @media screen and (max-width: 850px) {
      font-size: 1.5rem;
    }

    @media screen and (max-width: 435px) {
      font-size: 1.2rem;
    }
  }
`
const GridImg = styled.div`
  display: grid;
  gap: 15px 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`
const Image = styled.div`
  width: 100%;
  padding: 0 0 0 0;
  text-align: center;
  border-radius: 4px;

  @media screen and (max-width: 768px) and (max-width: 991px) {
    width: 100%;
  }

  img {
    width: 100%;
    height: 115px;
    object-fit: contain;
    margin-top: 50px;

    @media screen and (max-width: 768px) and (max-width: 991px) {
      height: 85px;
    }

    @media screen and (max-width: 550px) and (max-width: 767px) {
      height: 75px;
    }

    @media screen and (max-width: 280px) and (max-width: 550px) {
      height: 55px;
    }
  }

  h2 {
    font-weight: bold;
    margin: 25px 0;
    @media screen and (max-width: 280px) and (max-width: 550px) {
      font-size: 0.9rem;
    }
  }

  p {
    font-weight: 200;
  }
`

export default Devices
