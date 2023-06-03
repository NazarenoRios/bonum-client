import styled from 'styled-components'
import {
  UserIcon,
  LogoutIcon,
  SearchIcon,
  HomeIcon,
  UserGroupIcon,
  VideoCameraIcon,
} from '@heroicons/react/outline'
import { Link } from 'react-router-dom'

const DropMenuNav = ({ popUp, logOut }: any) => {
  return (
    <>
      {window.innerWidth <= 767 ? (
        <DropMenu activeState={popUp}>
          <div className='btn flex dropmenu'>
            <UserIcon className='dropicons' />
            <Link to='/myprofile'>
              <label>PERFIL</label>
            </Link>
          </div>

          <div className='btn flex dropmenu'>
            <HomeIcon className='dropicons' />
            <Link to='/home'>
              <label>INICIO</label>
            </Link>
          </div>

          <div className='btn flex dropmenu'>
            <SearchIcon className='dropicons' />
            <Link to='/search'>
              <label>BUSCAR</label>
            </Link>
          </div>

          <div className='btn flex dropmenu'>
            <UserGroupIcon className='dropicons' />
            <Link to='/users'>
              <label>USUARIOS</label>
            </Link>
          </div>

          <div className='btn flex dropmenu'>
            <VideoCameraIcon className='dropicons' />
            <Link to='/favorites'>
              <label>MI LISTA</label>
            </Link>
          </div>

          <div className='btn flex dropmenu'>
            <LogoutIcon className='dropicons' />
            <label onClick={logOut}>CERRAR SESION</label>
          </div>
        </DropMenu>
      ) : (
        <DropMenu activeState={popUp}>
          <div className='btn flex dropmenu'>
            <UserIcon className='dropicons' />
            <Link to='/myprofile'>
              <label>PERFIL</label>
            </Link>
          </div>

          <div className='btn flex dropmenu'>
            <LogoutIcon className='dropicons' />
            <label onClick={logOut}>CERRAR SESION</label>
          </div>
        </DropMenu>
      )}
    </>
  )
}

type dropMenuProps = {
  activeState: boolean
}

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

export default DropMenuNav
