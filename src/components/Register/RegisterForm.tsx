import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchApi } from '../../config/axiosInstance'

import { useForm } from 'react-hook-form'

import Loading from '../../common/Loading'

import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
  Icon,
  Center,
} from '@chakra-ui/react'

const avatars = [
  {
    name: 'Ryan Florence',
    url: 'https://bit.ly/ryan-florence',
  },
  {
    name: 'Segun Adebayo',
    url: 'https://bit.ly/sage-adebayo',
  },
  {
    name: 'Kent Dodds',
    url: 'https://bit.ly/kent-c-dodds',
  },
  {
    name: 'Prosper Otemuyiwa',
    url: 'https://bit.ly/prosper-baba',
  },
  {
    name: 'Christian Nwamba',
    url: 'https://bit.ly/code-beast',
  },
]

export default function RegisterForm() {
  const [invalidAccount, setInvalidAccount] = useState('')

  const [showLoading, setShowLoading] = useState<any | null>(null)
  const [showLoadingText, setShowLoadingText] = useState<string | null>(null)

  const navigate = useNavigate()

  // login with db Acc
  const fetchRegister = async (data: any) => {
    try {
      const res = await fetchApi({
        method: 'post',
        url: '/api/users/register',
        body: {
          email: data.email,
          password: data.password,
          name: data.name,
          lastname: data.lastname,
        },
      })

      if (res.status === 201) {
        setShowLoading(null)
        setShowLoadingText(null)
        setInvalidAccount('')
      }

      return res.data
    } catch (err: any) {
      if (err.response && err.response.status === 401) {
        setShowLoading(null)
        setShowLoadingText(null)
        setInvalidAccount('Email already registered, try another')
      }
      throw err
    }
  }

  const onSubmit = (data: any) => {
    setInvalidAccount('')
    setShowLoading(<Loading />)
    setShowLoadingText('Loading..')
    fetchRegister(data)
      .then(() => {
        navigate('/login')
      })
      .catch((err) => console.log('ERROR', err))
  }

  // React-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <Box className='mt-52' position={'relative'}>
      <Center>{showLoading}</Center>
      <Center fontWeight='bold' color='#5ddcff'>
        {showLoadingText}
      </Center>
      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading lineHeight={1.1} fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
            <Text className='text-white'>Regístrate ahora</Text>
            <Text as={'span'} bgGradient='linear(to-r, blue.400,pink.400)' bgClip='text'>
              &
            </Text>{' '}
            <Text className='text-white'>Accede a todo nuestro catalogo</Text>
          </Heading>
          <Stack direction={'row'} spacing={4} align={'center'}>
            <AvatarGroup>
              {avatars.map((avatar) => (
                <Avatar
                  key={avatar.name}
                  name={avatar.name}
                  src={avatar.url}
                  position={'relative'}
                  zIndex={2}
                  _before={{
                    content: '""',
                    width: 'full',
                    height: 'full',
                    rounded: 'full',
                    transform: 'scale(1.125)',
                    bgGradient: 'linear(to-bl, blue.400,pink.400)',
                    position: 'absolute',
                    zIndex: -1,
                    top: 0,
                    left: 0,
                  }}
                />
              ))}
            </AvatarGroup>
            <Text
              className='text-white'
              fontFamily={'heading'}
              fontSize={{ base: '4xl', md: '6xl' }}
            >
              +
            </Text>
            <Flex
              align={'center'}
              justify={'center'}
              fontFamily={'heading'}
              fontSize={{ base: 'sm', md: 'lg' }}
              bg={'gray.800'}
              color={'white'}
              rounded={'full'}
              width={useBreakpointValue({ base: '44px', md: '60px' })}
              height={useBreakpointValue({ base: '44px', md: '60px' })}
              position={'relative'}
              _before={{
                content: '""',
                width: 'full',
                height: 'full',
                rounded: 'full',
                transform: 'scale(1.125)',
                bgGradient: 'linear(to-bl, orange.400,yellow.400)',
                position: 'absolute',
                zIndex: -1,
                top: 0,
                left: 0,
              }}
            >
              TU
            </Flex>
          </Stack>
        </Stack>
        <Stack
          className='bg-[#06070c]'
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Stack spacing={4}>
            <Heading
              className='text-white'
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
            >
              Registrate Gratis
              <Text as={'span'} bgGradient='linear(to-r, blue.400,pink.400)' bgClip='text'>
                !
              </Text>
            </Heading>
            <Text color={'gray.400'} fontSize={{ base: 'sm', sm: 'md' }}>
              Después de registrarse, ¡podrá acceder a una gran variedad de películas y series que
              no puede perderse!
            </Text>
          </Stack>
          <Box as={'form'} mt={10}>
            <Stack spacing={4}>
              <Input
                placeholder='Nombre'
                id='name'
                type='text'
                borderTop={0}
                borderRight={0}
                borderLeft={0}
                className='placeholder:text-center'
                _placeholder={{
                  color: 'gray.500',
                }}
                {...register('name', { required: true })}
              />
              {errors.name?.type === 'required' && (
                <span className='text-red-500 ml-8 sm:ml-0'>* Name field cant be empty </span>
              )}
              <Input
                placeholder='Apellido'
                id='lastname'
                type='text'
                borderTop={0}
                borderRight={0}
                borderLeft={0}
                className='placeholder:text-center'
                _placeholder={{
                  color: 'gray.500',
                }}
                {...register('lastname', { required: true })}
              />
              {errors.lastname?.type === 'required' && (
                <span className='text-red-500 ml-8 sm:ml-0'>* Lastname field cant be empty </span>
              )}
              <Input
                placeholder='nombre@ejemplo.com'
                id='email'
                type='email'
                borderTop={0}
                borderRight={0}
                borderLeft={0}
                className='placeholder:text-center'
                _placeholder={{
                  color: 'gray.500',
                }}
                {...register('email', { required: true })}
              />
              {errors.email?.type === 'required' && (
                <span className='text-red-500 ml-8 sm:ml-0'>* Email field cant be empty </span>
              )}
              <Input
                placeholder='Contraseña...'
                id='password'
                type='password'
                borderTop={0}
                borderRight={0}
                borderLeft={0}
                className='placeholder:text-center'
                _placeholder={{
                  color: 'gray.500',
                }}
                {...register('password', { required: true })}
              />
              {errors.password?.type === 'required' && (
                <span className='text-red-500 ml-8 sm:ml-0'>* Password field cant be empty </span>
              )}
              <Center color='red'>{invalidAccount}</Center>
            </Stack>
            <Button
              type='submit'
              fontFamily={'heading'}
              mt={8}
              w={'full'}
              bgGradient='linear(to-r, blue.400,pink.400)'
              color={'white'}
              _hover={{
                bgGradient: 'linear(to-r, blue.400,pink.400)',
                boxShadow: 'xl',
              }}
            >
              Confirmar
            </Button>
          </Box>
        </Stack>
      </Container>
      <Blur position={'absolute'} top={-10} left={-10} style={{ filter: 'blur(70px)' }} />
    </Box>
  )
}

export const Blur = (props: IconProps) => {
  return (
    <Icon
      width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height='560px'
      viewBox='0 0 528 560'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <circle cx='71' cy='61' r='111' fill='#F56565' />
      <circle cx='244' cy='106' r='139' fill='#ED64A6' />
      <circle cy='291' r='139' fill='#ED64A6' />
      <circle cx='80.5' cy='189.5' r='101.5' fill='#ED8936' />
      <circle cx='196.5' cy='317.5' r='101.5' fill='#ECC94B' />
      <circle cx='70.5' cy='458.5' r='101.5' fill='#48BB78' />
      <circle cx='426.5' cy='-0.5' r='101.5' fill='#4299E1' />
    </Icon>
  )
}
