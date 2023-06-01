// style
import { Image } from '@chakra-ui/react'
import styled from 'styled-components'

// img
import gif from '../assets/gif/colorful-loader-gif-transparent.gif'

function LoadingSpinner() {
  return (
    <Loading>
      <Image src={gif} alt='this slowpoke moves' width='250' style={{ marginTop: '40vh' }} />
    </Loading>
  )
}

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default LoadingSpinner
