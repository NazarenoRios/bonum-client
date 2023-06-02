import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import aside from '../../assets/background/aside.mp4'
import { ExclamationCircleIcon } from '@heroicons/react/solid'

import { useInput } from '../../hooks/useInput'
// import { logOut } from '../../../../tmdb-front/src/state/user'
import styled from 'styled-components'

import { VolumeUpIcon, VolumeOffIcon } from '@heroicons/react/outline'

import { Flex, FormControl, FormLabel, Heading, Input, Stack } from '@chakra-ui/react'

import './Btns2.css'
import { fetchApi } from '../../config/axiosInstance'
import { UserContext } from '../../context/userContext'

export default function ChangePassword() {
  const password = useInput()
  const confirmPassword = useInput()

  const navigate = useNavigate()
  // const dispatch = useDispatch()

  const { user } = useContext(UserContext)

  // same password message
  const [message, setMessage] = useState(false)

  const toggleMessage = () => setMessage(true)

  // change PW
  const fetchChangePw = async () => {
    const res = await fetchApi({
      method: 'put',
      url: `/api/users/changePassword/${user.id}`,
      body: { password: password.value },
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
    return res.data
  }

  // submit
  const submitHandler = (e: any) => {
    e.preventDefault()

    if (password.value.length > 0) {
      if (password.value === confirmPassword.value) {
        fetchChangePw()
        // dispatch(logOut())
        navigate('/')
      }
    }
  }

  // trailer sound toggle
  const [toggleMute, setToggleMute] = useState(true)

  const handleMute = (e: any) => {
    e.preventDefault()
    setToggleMute(!toggleMute)
  }

  return (
    <Stack className='' minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex flex={1}>
        <Trailer src={aside} autoPlay loop muted={toggleMute} className='videoBg' />
        {toggleMute ? (
          <VolumeOffIcon type='button' onClick={handleMute} className='upBtn2' />
        ) : (
          <VolumeUpIcon type='button' onClick={handleMute} className='downBtn2' />
        )}
      </Flex>

      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack as={'form'} spacing={4} w={'full'} maxW={'md'} onSubmit={submitHandler}>
          <Heading fontSize={'2xl'}>Cambia tu contraseña</Heading>
          <FormControl id='name'>
            <FormLabel>Contraseña</FormLabel>
            <Input type='password' {...password} />
          </FormControl>
          <FormControl id='lastname'>
            <FormLabel>Confirmar contraseña</FormLabel>
            <Input type='password' {...confirmPassword} />
          </FormControl>

          <Meesage activeState={message}>
            {' '}
            <ExclamationCircleIcon style={{ height: '25px', width: '25px' }} /> Las contraseñas
            deben ser iguales
          </Meesage>

          <Stack spacing={6}>
            <button
              className='w-full rounded bg-[#02468a] py-3 font-semibold hover:bg-[#051e51]'
              type='submit'
              onClick={toggleMessage}
            >
              Confirmar
            </button>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  )
}

type MessageProps = {
  activeState: boolean
}

const Trailer = styled.video`
  height: 100%;
  width: 48.5vw;
  position: absolute;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    height: 34.5vh;
    width: 100%;
  }
`

const Meesage = styled.p<MessageProps>`
  display: ${(event: any) => (event.activeState ? 'flex' : 'none')};

  font-size: 17px;
  text-align: center;

  letter-spacing: 1px;
`
