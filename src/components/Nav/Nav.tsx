import { useState, useEffect, useContext } from 'react'
import { Image } from '@chakra-ui/react'
import './Nav.css'

import mainLogo from '../../assets/logo/butterLogo3.png'
import homeBtn from '../../assets/btnIcons/home-icon.svg'
import myListBtn from '../../assets/btnIcons/series-icon.svg'
import searchBtn from '../../assets/btnIcons/search-icon.svg'
import users from '../../assets/btnIcons/group-icon.svg'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { UserIcon, LogoutIcon } from '@heroicons/react/outline'
import { UserContext } from '../../context/userContext'
import { fetchApi } from '../../config/axiosInstance'
import DropMenuNav from './DropMenuNav'

function Nav() {
  // context
  const { user, setUser } = useContext(UserContext)

  const [updatedUser, setUpdatedUser] = useState({ pic: '' })

  const navigate = useNavigate()

  const logOut = async () => {
    localStorage.clear()

    const res = await fetchApi({
      method: 'post',
      url: '/api/users/logout',
    })

    if (res.status === 204) {
      navigate('/')
    }
  }

  // popup
  const [popUp, setPopUp] = useState(false)

  const togglePopUp = () => setPopUp(!popUp)

  // scroll
  const [show, handleShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else {
        handleShow(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // get updated user

  const fetchUser = async () => {
    try {
      const userResponse = await fetchApi({
        method: 'get',
        url: '/api/users/me',
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })

      const user = userResponse.data

      setUser(user)

      const res = await fetchApi({
        method: 'get',
        url: `/api/users/user/${user.id}`,
      })
      setUser(res.data)
      return res.data
    } catch (e) {
      console.log('')
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <nav className={`nav ${show && 'bg-[#090b13]'}`}>
      <div className='flex items-center space-x-2 md:space-x-10 sm:space-x-2'>
        <Link to='/home'>
          <Image
            className='nav__logo cursor-pointer object-contain'
            src={mainLogo}
            width={45}
            height={45}
            alt='Butterflix Logo'
          />
        </Link>

        <ul className='hidden space-x-4 md:flex'>
          <Link to='/home'>
            <li className=''>
              <div className='btn'>
                <img src={homeBtn} alt='' />
                <label>INICIO</label>
              </div>
            </li>
          </Link>

          <Link to='/search'>
            <li className=''>
              <div className='btn'>
                <img src={searchBtn} alt='' />
                <label>BUSCAR</label>
              </div>
            </li>
          </Link>

          <Link to='/users'>
            <li className=''>
              <div className='btn'>
                <img src={users} alt='' />
                <label>USUARIOS</label>
              </div>
            </li>
          </Link>

          <Link to='/favorites'>
            <li className=''>
              <div className='btn'>
                <img src={myListBtn} alt='' />
                <label>MI LISTA</label>
              </div>
            </li>
          </Link>
        </ul>
      </div>

      <div className='flex'>
        <UserProfile onClick={togglePopUp}>
          <img src={user.pic} style={{ height: '50px' }} alt='profileIcon' />
        </UserProfile>
      </div>

      <DropMenuNav popUp={popUp} togglePopUp={togglePopUp} />
    </nav>
  )
}

type dropMenuProps = {
  activeState: boolean
}

const UserProfile = styled.div`
  width: 50px;
  height: 50px;
  object-position: center;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 100px;
  }

  :hover {
    cursor: pointer;
  }
`

const DropMenu = styled.div<dropMenuProps>`
  background-color: #040714;
  border-radius: 0.345rem;
  border: 1.3px solid rgba(151, 151, 151, 1);
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 0px 0px;
  opacity: 0.85;

  margin-top: 20px;

  display: ${(event) => (event.activeState ? 'flex' : 'none')};
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  position: absolute;
  top: 4vh;
  right: 0.8rem;
`

export default Nav
