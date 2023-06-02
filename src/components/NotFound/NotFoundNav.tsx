import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function NotFoundNav() {
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

  return (
    <>
      <nav className={`nav ${show && 'bg-[#050714]'}`}>
        <Link
          to='/'
          className=' float-left text-xs md:text-base bg-black/30 text-[#f9f9f9] border border-[#f9f9f9] py-2.5 px-6 rounded hover:bg-[#c6c6c6] hover:text-color hover:text-[#050714] cursor-pointer'
        >
          <span className='uppercase font-medium tracking-wide'>HOME </span>
        </Link>
        <Link
          to='/login'
          className='text-xs md:text-base bg-black/30 text-[#f9f9f9] border border-[#f9f9f9] flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6] hover:text-color hover:text-[#050714] ml-auto cursor-pointer'
        >
          <span className='uppercase font-medium tracking-wide'>LOG IN</span>
        </Link>
      </nav>
    </>
  )
}

export default NotFoundNav
