import { Link } from 'react-router-dom'

import { Box, Center, Heading, Text, Stack, Image } from '@chakra-ui/react'

export default function UserInfoCard({ movie }: any) {
  const baseURL = 'https://image.tmdb.org/t/p/original/'

  return (
    <Link to={`/movie/${movie.code}`}>
      <Center py={20}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          className='bg-[#131728]'
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}
        >
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${baseURL}${movie.poster_path || movie.backdrop_path})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}
          >
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={`${baseURL}${movie.poster_path || movie.backdrop_path}`}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              {movie.title}
            </Text>
            <Heading color={'white'} fontSize={'xl'} fontFamily={'body'} fontWeight={500} py={3}>
              {movie.release_date}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <span className='text-gray-500' color={'black'} fontWeight={800} fontSize={'xl'}>
                Raiting
              </span>
            </Stack>
            <p
              className='text-white'
              style={{
                fontSize: '20px',
                fontWeight: 'bold',
                letterSpacing: '2px',
              }}
            >
              {movie.raiting.toFixed(1)}
            </p>
          </Stack>
        </Box>
      </Center>
    </Link>
  )
}
