import { useContext, useEffect, useState } from 'react'
import { SimpleGrid } from '@chakra-ui/react'

import Nav from '../Nav/Nav'
import Card from '../../common/Cards/Card'
import { fetchApi } from '../../config/axiosInstance'
import NoMovies from './NoMovies'
import LoadFavPage from './LoadFavPage'
import { UserContext } from '../../context/userContext'

export default function Favorites() {
  const [movies, setMovies] = useState([])
  const [toggleNoMovies, setToggleNoMovies] = useState(<LoadFavPage />)

  const { user } = useContext(UserContext)

  const fetchMovieData = async () => {
    try {
      const res = await fetchApi({
        method: 'get',
        url: `/api/movies/favorites?userId=${user.id}`,
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })

      if (res.data.length === 0) {
        setToggleNoMovies(<NoMovies />)
      }

      setMovies(res.data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchMovieData()
  }, [])

  if (movies.length !== 0) {
    return (
      <>
        <Nav />
        <SimpleGrid minChildWidth='300px' spacing='30px'>
          {movies.map((movie, i) => (
            <Card movie={movie} key={i} />
          ))}
        </SimpleGrid>
      </>
    )
  }

  return <>{toggleNoMovies}</>
}
