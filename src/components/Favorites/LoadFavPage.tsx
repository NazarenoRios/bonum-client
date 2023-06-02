import Loading from '../../common/Loading'
import { Center, Flex } from '@chakra-ui/react'

const LoadFavPage = () => {
  return (
    <Flex width={'100vw'} height={'100vh'} alignContent={'center'} justifyContent={'center'}>
      <Center>
        <Loading />
      </Center>
    </Flex>
  )
}

export default LoadFavPage
