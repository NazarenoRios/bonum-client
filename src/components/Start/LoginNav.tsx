import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { fetchApi } from '../../config/axiosInstance'

function LoginNav() {
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

  const user = localStorage.getItem('token')

  if (user) {
    return (
      <>
        <nav className={`nav ${show && 'bg-[#050714]'}`}>
          <a
            type='button'
            onClick={logOut}
            href='/'
            className='text-xs md:text-base bg-black/30 text-[#f9f9f9] border border-[#f9f9f9] flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6] hover:text-color hover:text-[#050714] ml-auto cursor-pointer'
          >
            <span className='uppercase font-medium tracking-wide'>CERRAR SESION</span>
          </a>
        </nav>
      </>
    )
  }

  return (
    <>
      <nav className={`nav ${show && 'bg-[#050714]'}`}>
        <Link
          to='/login'
          className='text-xs md:text-base bg-black/30 text-[#f9f9f9] border border-[#f9f9f9] flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6] hover:text-color hover:text-[#050714] ml-auto cursor-pointer'
        >
          <span className='uppercase font-medium tracking-wide'>INICIAR SESION</span>
        </Link>
      </nav>
    </>
  )
}

export default LoginNav
