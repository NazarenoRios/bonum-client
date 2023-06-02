import { Image } from '@chakra-ui/react'
import styled from 'styled-components'
import logo from '../../assets/logo/butterLogo3.png'

function RegisterNav() {
  return (
    <Nav>
      <a href='/'>
        <Image
          className='nav__logo cursor-pointer object-contain'
          src={logo}
          width={100}
          height={100}
          alt='Butterflix Logo'
        />
      </a>
    </Nav>
  )
}

const Nav = styled.nav`
  height: 100px;
`

export default RegisterNav
