import ntl1 from '../../assets/404/ntl1.png'
import './NeedToLogin.css'
import './HereButton.css'

import { Flex, Image, Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function NotFoundInfo() {
  return (
    <>
      <div className='flex justify-center'>
        <h1 className='absolute msg'>NOT FOUND</h1>
      </div>
      <Stack direction={{ base: 'column', md: 'row' }}>
        <Flex flex={1}>
          <Image className='ntl1' src={ntl1} alt='ntl1' />
        </Flex>

        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack as={'div'} spacing={4} w={'full'}>
            <div className='text-container'>
              <h1 className='title'>AWWW...DON’T CRY.</h1>
              <br />
              <p className='subtitle'>
                You can back, just click{' '}
                <Link className='here-button' to='/'>
                  Here!
                </Link>
              </p>
            </div>
          </Stack>
        </Flex>
      </Stack>
    </>
  )
}
