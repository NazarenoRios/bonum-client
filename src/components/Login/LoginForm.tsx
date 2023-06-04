import { useContext, useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { useForm } from 'react-hook-form'

import { GoogleLogin } from '@react-oauth/google'

import Loading from '../../common/Loading'
import logo from '../../assets/logo/butterLogo3.png'
import styled from 'styled-components'

import {
  Box,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  useBreakpointValue,
  IconProps,
  Icon,
  Image,
  Center,
} from '@chakra-ui/react'
import { fetchApi } from '../../config/axiosInstance'
import { UserContext } from '../../context/userContext'

export default function LoginForm() {
  const [invalidAccount, setInvalidAccount] = useState('')
  const [showLoading, setShowLoading] = useState<any | null>(null)
  const [showLoadingText, setShowLoadingText] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const { setUser } = useContext(UserContext)

  // google login
  const fetchGoogleLogin = async (tokenResponse: any) => {
    try {
      const { status, data } = await fetchApi({
        method: 'put',
        url: '/api/users/googlelogin',
        body: { credential: tokenResponse.credential },
      })

      if (status === 201) {
        setShowLoading(null)
        setShowLoadingText(null)
        localStorage.setItem('token', data.token)
      }

      const res = await fetchApi({
        method: 'get',
        url: `/api/users/persistence/${data.id}`,
      })

      await navigate('/home')

      return res.data
    } catch (err: any) {
      if (err.response.status === 401) {
        setShowLoading(null)
        setShowLoadingText(null)
        setInvalidAccount('Incorrect email or password, please try again')
      }
    }
  }

  const sucessGoogleResponse = (tokenResponse: any) => {
    setShowLoading(<Loading />)
    setShowLoadingText('Loading..')
    fetchGoogleLogin(tokenResponse)
  }

  // login with db Acc
  const fetchLogin = async (info: any) => {
    try {
      const response = await fetchApi({
        method: 'post',
        url: '/api/users/login',
        body: {
          email: info.email,
          password: info.password,
        },
      }).catch((err: any) => {
        if (err.response?.status === 401) {
          setShowLoading(null)
          setShowLoadingText(null)
          setInvalidAccount('Incorrect email or password, please try again')
        }
      })

      if (response?.status === 201) {
        setShowLoading(null)
        setShowLoadingText(null)
        setLoading(false)
        localStorage.setItem('token', response.data?.user.token)
      }

      const res = await fetchApi({
        method: 'get',
        url: '/api/users/me',
        headers: { Authorization: `Bearer ${response?.data?.user.token}` },
      })

      localStorage.setItem('userId', res.data.id)
      localStorage.setItem('userPic', res.data.pic)

      return setUser(res.data)
    } catch (e) {
      console.log('LOGINERROR', e)
    }
  }

  const token = localStorage.getItem('token')

  useEffect(() => {
    if (token) navigate('/home')
  }, [token])

  // React-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (info: any) => {
    setInvalidAccount('')
    setShowLoading(<Loading />)
    setShowLoadingText('Loading..')
    fetchLogin(info)
  }

  return (
    <Box className='mt-52' position={'relative'}>
      <Nav>
        <a href='/'>
          <Image
            className='nav__logo cursor-pointer object-contain'
            src={logo}
            width={200}
            height={200}
            alt='Butterflix Logo'
            marginTop={200}
          />
        </a>
      </Nav>
      <br></br>
      <Home>Inicio</Home>

      <Container as={SimpleGrid} py={{ base: 10, sm: 20, lg: 32 }}>
        <Stack
          className='bg-[#090b13]'
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Stack spacing={4}>
            <Center>{showLoading}</Center>
            <Center fontWeight='bold' color='#5ddcff'>
              {showLoadingText}
            </Center>
            <Heading
              className='text-white text-center'
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
            >
              Inicia Sesion
              <Text as={'span'} bgGradient='linear(to-r, blue.400,pink.400)' bgClip='text'>
                !
              </Text>
            </Heading>
            <Text color={'gray.400'} fontSize={{ base: 'sm', sm: 'md' }}>
              ¡Inicia sesión para acceder a una gran variedad de películas y series que no te puedes
              perder!
            </Text>
          </Stack>
          <Box as={'form'} mt={10}>
            <Stack spacing={4}>
              <Input
                placeholder='nombre@ejemplo.com'
                id='email'
                type='email'
                borderTop={0}
                borderRight={0}
                borderLeft={0}
                className='placeholder:text-center'
                // onKeyDown={handleKeyDown1}
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
                // onKeyDown={handleKeyDown2}
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
              // onClick={(e) => changeState(e)}
              _hover={{
                bgGradient: 'linear(to-r, red.400,pink.400)',
                boxShadow: 'xl',
              }}
            >
              Confirmar
            </Button>
            <br />
            <br />
          </Box>

          <div className='text-[gray] text-center'>
            Nuevo en Butterflix?{' '}
            <Link to='/register'>
              <button className='cursor-pointer text-white hover:underline' type='submit'>
                Regístrate ahora
              </button>
            </Link>
          </div>

          <div className='flex justify-center'>
            <GoogleLogin
              onSuccess={sucessGoogleResponse}
              onError={() => {
                console.log('Login Failed')
              }}
            />
          </div>
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

const Nav = styled.nav`
  height: 100px;
`

const Home = styled.span`
  color: 'white';
  font-size: 35px;
  margin-left: 2.5em;

  @media screen and (max-width: 1025px) {
    margin-left: 1.8em;
  }
`
