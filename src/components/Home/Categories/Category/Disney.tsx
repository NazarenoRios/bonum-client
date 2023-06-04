import { SimpleGrid } from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import Nav from '../../../Nav/Nav'
import CategoryCard from '../../../../common/Cards/CategoryCard'
import axios from 'axios'
import requests from '../../../../utils/requests'
import NeedToLoginPage from '../../../../pages/NeedToLoginPage'
import { UserContext } from '../../../../context/userContext'

export default function Disney() {
  const getUrl = 'https://api.themoviedb.org/3'
  const userId = localStorage.getItem('userId')

  const [movies, setMovies] = useState([])

  const CategoryDisneyRequest = async () => {
    return axios.get(`${getUrl}${requests.fetchDisney}`).then((res) => setMovies(res.data.items))
  }

  useEffect(() => {
    CategoryDisneyRequest()
  }, [])

  // context
  const { user } = useContext(UserContext)

  if (userId) {
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

  return (
    <>
      <NeedToLoginPage />
    </>
  )
}
