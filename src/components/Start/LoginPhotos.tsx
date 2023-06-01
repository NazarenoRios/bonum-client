// styles
import styled from 'styled-components'

// imgs
import img1 from '../../assets/Login2/loginPhotos/1.jpeg'
import img2 from '../../assets/Login2/loginPhotos/2.jpeg'
import img3 from '../../assets/Login2/loginPhotos/3.jpeg'
import img4 from '../../assets/Login2/loginPhotos/4.jpeg'
import img5 from '../../assets/Login2/loginPhotos/5.jpeg'
import img6 from '../../assets/Login2/loginPhotos/6.jpeg'
import img7 from '../../assets/Login2/loginPhotos/7.jpeg'
import img8 from '../../assets/Login2/loginPhotos/8.jpeg'
import img9 from '../../assets/Login2/loginPhotos/9.jpeg'

function LoginPhotos() {
  const IMG_CONTAINER = [
    { imgSrc: img1 },
    { imgSrc: img2 },
    { imgSrc: img3 },
    { imgSrc: img4 },
    { imgSrc: img5 },
    { imgSrc: img6 },
    { imgSrc: img7 },
    { imgSrc: img8 },
    { imgSrc: img9 },
  ]

  return (
    <>
      <Section>
        <Container>
          <Title>
            <h1>Originales exclusivos de Bonum</h1>
            <p>
              Mira películas, series, cortos y más nunca antes vistos de los mejores narradores del
              mundo, solo disponible en Bonum+
            </p>
          </Title>
          <GridImg>
            {IMG_CONTAINER.map((value, i) => (
              <Image key={i}>
                <img src={value.imgSrc} alt='grid/img' />
              </Image>
            ))}
          </GridImg>
        </Container>
      </Section>
    </>
  )
}

const Section = styled.section`
  padding: 5vh 0;
  position: relative;
`
const Container = styled.div`
  width: 95%;
  margin: 0 auto;
`
const Title = styled.div`
  text-align: center;
  margin-bottom: 3vh;

  h1 {
    font-size: 5rem;

    @media screen and (max-width: 1150px) {
      font-size: 3rem;
    }

    @media screen and (max-width: 700px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1rem;

    @media screen and (max-width: 550px) {
      font-size: 0.8rem;
    }
  }
`
const GridImg = styled.div`
  display: grid;
  gap: 15px 25px;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media screen and (max-width: 991px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`
const Image = styled.div`
  width: 100%;
  padding: 0;
  border-radius: 0.245rem;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`

export default LoginPhotos
