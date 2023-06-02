import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import aside from '../../assets/background/aside.mp4'

import { useInput } from '../../hooks/useInput'
import styled from 'styled-components'

import { VolumeUpIcon, VolumeOffIcon, PencilAltIcon } from '@heroicons/react/outline'

import { storage } from '../../utils/firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

import './Btns.css'

import { Flex, FormControl, FormLabel, Heading, Input, Stack, Avatar } from '@chakra-ui/react'
import { fetchApi } from '../../config/axiosInstance'

export default function MyProfile() {
  // const name = useInput('name')
  // const lastname = useInput('lastname')
  const name = useInput()
  const lastname = useInput()

  const navigate = useNavigate()

  const [user, setUser] = useState({ id: 1, pic: 'string' })

  const [userUpdated, setUpdatedUser] = useState({ pic: 'string' })

  const fetchUser = async () => {
    const res = await fetchApi({
      method: 'get',
      url: `/api/users/user/${user.id}`,
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
    setUpdatedUser(res.data)
    return res.data
  }

  useEffect(() => {
    fetchUser()
  }, [])

  // update profile
  const fetchUpdateProfile = async () => {
    const res = await fetchApi({
      method: 'put',
      url: `/api/users/profile/${user.id}`,
      body: {
        name: name.value,
        lastname: lastname.value,
      },
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
    return res.data
  }

  const fetchupdateProfileName = async () => {
    const res = await fetchApi({
      method: 'put',
      url: `/api/users/profile/${user.id}`,
      body: { name: name.value },
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
    return res.data
  }

  const fetchupdateProfileLastname = async () => {
    const res = await fetchApi({
      method: 'put',
      url: `/api/users/profile/${user.id}`,
      body: { lastname: lastname.value },
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
    return res.data
  }

  const fetchupdateProfilePicture = async () => {
    const res = await fetchApi({
      method: 'put',
      url: `/api/users/profile/${user.id}`,
      body: { pic: pic },
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
    return res.data
  }

  // submit
  const submitHandler = (e: any) => {
    e.preventDefault()

    if (name.value.length > 0 && lastname.value.length > 0) {
      fetchUpdateProfile()
      navigate('/home')
    } else if (name.value.length > 0) {
      fetchupdateProfileLastname()
      navigate('/home')
    } else if (lastname.value.length > 0) {
      fetchupdateProfileName()
      navigate('/home')
    } else if (user.pic !== pic) {
      fetchupdateProfilePicture()
      navigate('/home')
    }
  }

  // trailer sound toggle
  const [toggleMute, setToggleMute] = useState(true)

  const handleMute = (e: any) => {
    e.preventDefault()
    setToggleMute(!toggleMute)
  }

  // change img
  const [image, setImage] = useState(null)
  const [pic, setPic] = useState<string | null>(null)

  const handleImageChange = (e: any) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (image) {
      const imageRef = ref(storage, `image${user.id}`)
      uploadBytes(imageRef, image)
        .then(() => {
          getDownloadURL(imageRef)
            .then((pic) => {
              setPic(pic)
            })
            .catch((err) => {
              console.log(err.message, 'error getting the image url')
            })
          setImage(null)
        })
        .catch((err) => {
          console.log(err.message)
        })
    }
  }

  // toggle icon
  const [toggleIcon, setToggleIcon] = useState(false)

  const onHoverImg = () => {
    setToggleIcon(!toggleIcon)
  }

  return (
    <Stack className='' minH={'99.9vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack as={'form'} spacing={4} w={'full'} maxW={'md'} onSubmit={submitHandler}>
          <div className='flex justify-center mb-6'>
            <label htmlFor='chooseImg'>
              <Avatar
                onMouseEnter={onHoverImg}
                onMouseLeave={onHoverImg}
                className='absolute hover:opacity-90'
                size='2xl'
                src={pic ? pic : userUpdated.pic}
              >
                {toggleIcon ? (
                  <PencilAltIcon className='absolute text-black h-8' />
                ) : (
                  <PencilAltIcon className='absolute text-gray-700 h-8 opacity-100' />
                )}
              </Avatar>
            </label>
          </div>

          <div className='flex justify-center'>
            <input type='file' id='chooseImg' className='hidden' onChange={handleImageChange} />
            <button
              className='rounded bg-[#02468a] py-2 px-10 font-semibold hover:bg-[#051e51] mb-5'
              onClick={handleSubmit}
            >
              Cambiar imagen
            </button>
          </div>

          <Heading fontSize={'2xl'}>Edita tu perfil</Heading>
          <FormControl id='name'>
            <FormLabel>Nombre</FormLabel>
            <Input type='text' {...name} />
          </FormControl>
          <FormControl id='lastname'>
            <FormLabel>Apellido</FormLabel>
            <Input type='text' {...lastname} />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}
            >
              <Link
                to='/changepassword'
                color={'blue.500'}
                className='text-gray-400 hover:text-white'
              >
                Olvidates tu contraseña?
              </Link>
            </Stack>
            <button
              className='w-full rounded bg-[#02468a] py-3 font-semibold hover:bg-[#051e51]'
              type='submit'
            >
              Confirmar contraseña
            </button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Trailer src={aside} autoPlay muted={toggleMute} loop className='trailer' />
        {toggleMute ? (
          <VolumeOffIcon type='button' onClick={handleMute} className='upBtn' />
        ) : (
          <VolumeUpIcon type='button' onClick={handleMute} className='downBtn' />
        )}
      </Flex>
    </Stack>
  )
}

const Trailer = styled.video`
  height: 100%;
  width: 48.5vw;
  position: absolute;
  object-fit: cover;
  margin-top: 0;

  @media screen and (max-width: 2400px) {
    width: 48.3vw;
  }

  @media screen and (max-width: 2089px) {
    width: 48.2vw;
  }

  @media screen and (max-width: 1973px) {
    width: 48vw;
  }

  @media screen and (max-width: 1776px) {
    width: 47.8vw;
  }

  @media screen and (max-width: 1614px) {
    width: 47.6vw;
  }

  @media screen and (max-width: 1480px) {
    width: 47.3vw;
  }

  @media screen and (max-width: 1315px) {
    width: 47vw;
  }

  @media screen and (max-width: 1184px) {
    width: 46.7vw;
  }

  @media screen and (max-width: 1076px) {
    width: 46.4vw;
  }

  @media screen and (max-width: 988px) {
    width: 46vw;
  }

  @media screen and (max-width: 888px) {
    width: 45.7vw;
  }

  @media screen and (max-width: 826px) {
    width: 45.5vw;
  }

  @media screen and (max-width: 789px) {
    width: 45.2vw;
  }

  @media screen and (max-width: 768px) {
    height: 26vh;
    width: 100%;
  }
`
