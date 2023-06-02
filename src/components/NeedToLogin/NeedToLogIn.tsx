import ntl1 from '../../assets/404/ntl1.png'
import './NeedToLogin.css'

import { Flex, Image, Stack } from '@chakra-ui/react'

export default function NeedToLogin() {
  return (
    <>
      <div className='flex justify-center'>
        <h1 className='absolute msg'>YOU NEED TO BE LOGGED</h1>
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
                You need to be logged! <br />
                If you don’t have an account, you can register for free to access all our content
                <br />
                <br />
              </p>
            </div>
          </Stack>
        </Flex>
      </Stack>
    </>
  )
}
