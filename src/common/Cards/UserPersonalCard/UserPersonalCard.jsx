import { Link } from 'react-router-dom'

import { Box, Center, Heading, Text, Stack, Image } from '@chakra-ui/react'

export default function UserPersonalCard({ user }) {
  return (
    <Link to={`/user/${user.id}`}>
      <Center py={20}>
        <Box
          role={'group'}
          p={6}
          w={'full'}
          className='bg-[#131728]'
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}
          mt={5}
        >
          <Box
            className='flex justify-center'
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
              backgroundImage: `url(${user.pic})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}
          >
            <Image rounded={'lg'} height={230} width={282} objectFit={'cover'} src={user.pic} />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              {user.name} {user.lastname}
            </Text>
            <Heading color={'white'} fontSize={'xl'} fontFamily={'body'} fontWeight={500}>
              {user.email}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <span className='text-gray-500' color={'black'} fontWeight={800} fontSize={'xl'}>
                Last Activity
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
              {new Date(user.lastActivity).toLocaleDateString()}
            </p>
          </Stack>
        </Box>
      </Center>
    </Link>
  )
}
