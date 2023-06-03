import { Center, Flex, Text } from '@chakra-ui/react'

const NoMovies = () => {
  return (
    <Flex width={'100vw'} height={'100vh'} alignContent={'center'} justifyContent={'center'}>
      <Center>
        <Text
          fontSize={{
            base: '24px',
            sm: '28px',
            md: '36px',
            lg: '46px',
            xl: '56px',
          }}
          className='text-white'
        >
          No tienes ninguna película o serie en favoritos.
        </Text>
      </Center>
    </Flex>
  )
}

export default NoMovies
