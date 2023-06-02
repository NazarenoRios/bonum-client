import { SimpleGrid } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Nav from '../../../Nav/Nav'
import CategoryCard from '../../../../common/Cards/CategoryCard'
import LoadingSpinner from '../../../../common/LoadingSpinner'
import { fetchApi } from '../../../../config/axiosInstance'
import NeedToLogin from '../../../../pages/NeedToLoginPage'
import axios from 'axios'
import requests from '../../../../utils/requests'

export default function Pixar() {
  const getUrl = 'https://api.themoviedb.org/3'

  type userProps = {
    id?: number
  }

  const [user, setUser] = useState<userProps>({ id: 1 })
  const [movies, setMovies] = useState([])

  const CategoryDisneyRequest = async () => {
    return axios.get(`${getUrl}${requests.fetchPixar}`).then((res) => setMovies(res.data.items))
  }

  useEffect(() => {
    CategoryDisneyRequest()
  }, [])

  // toggleNeedToLogIn
  const [toggleNeedToLogIn, setToggleNeedToLogIn] = useState(<LoadingSpinner />)

  const checkLogin = async () => {
    try {
      const res = await fetchApi({
        method: 'get',
        url: '/api/users/me',
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })

      if (res.status !== 200) {
        setToggleNeedToLogIn(<NeedToLogin />)
      }

      const { data } = await fetchApi({
        method: 'get',
        url: `/api/users/persistence/${res.data.id}`,
      })

      setUser(data)

      return data
    } catch (err) {
      setToggleNeedToLogIn(<NeedToLogin />)
    }
  }

  useEffect(() => {
    checkLogin()
  }, [])

  if (user.id) {
    return (
      <>
        <Nav />
        <SimpleGrid minChildWidth='300px' spacing='30px'>
          {movies.map((movie, i) => (
            <CategoryCard movie={movie} key={i} />
          ))}
        </SimpleGrid>
      </>
    )
  }

  return <>{toggleNeedToLogIn}</>
}
