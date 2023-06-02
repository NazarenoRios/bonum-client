import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import RegisterForm from '../components/Register/RegisterForm'
import RegisterNav from '../components/Register/RegisterNav'

function RegisterPage() {
  //   const navigate = useNavigate()
  //   const token = localStorage.getItem('token')

  //   useEffect(() => {
  //     if (token) {
  //       navigate('/home')
  //     }
  //   }, [token])

  return (
    <>
      <RegisterNav />
      <RegisterForm />
    </>
  )
}

export default RegisterPage
