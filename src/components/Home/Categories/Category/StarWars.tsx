import { SimpleGrid } from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import Nav from '../../../Nav/Nav'
import CategoryCard from '../../../../common/Cards/CategoryCard'
import LoadingSpinner from '../../../../common/LoadingSpinner'
import { fetchApi } from '../../../../config/axiosInstance'
import NeedToLogin from '../../../../pages/NeedToLoginPage'
import axios from 'axios'
import requests from '../../../../utils/requests'
import { UserContext } from '../../../../context/userContext'
import { checkLogin } from '../../../../utils/checkLogin'

export default function StarWars() {
  const getUrl = 'https://api.themoviedb.org/3'

  type userProps = {
    id?: number
  }

  const [movies, setMovies] = useState([])

  const CategoryDisneyRequest = async () => {
    return axios.get(`${getUrl}${requests.fetchStarWars}`).then((res) => setMovies(res.data.items))
  }

  useEffect(() => {
    CategoryDisneyRequest()
  }, [])

  // toggleNeedToLogIn
  const [toggleNeedToLogIn, setToggleNeedToLogIn] = useState(<LoadingSpinner />)

  const { user, setUser } = useContext(UserContext)

  const getUser = async () => {
    try {
      const userData = await checkLogin(setToggleNeedToLogIn)
      setUser(userData)
    } catch (err) {
      console.log('ERR', err)
    }
  }

  useEffect(() => {
    getUser()
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