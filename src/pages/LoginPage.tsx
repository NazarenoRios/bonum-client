import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginForm from '../components/Login/LoginForm'

function LoginPage() {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  useEffect(() => {
    if (token) {
      navigate('/home')
    }
  }, [token])

  return (
    <>
      <LoginForm />
    </>
  )
}

export default LoginPage
