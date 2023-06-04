import { useEffect, useState } from 'react'
import { SimpleGrid } from '@chakra-ui/react'

import Nav from '../Nav/Nav'
import Card from '../../common/Cards/Card'
import { fetchApi } from '../../config/axiosInstance'
import NoMovies from './NoMovies'
import LoadFavPage from './LoadFavPage'

export default function Favorites() {
  const [movies, setMovies] = useState([])
  const [toggleNoMovies, setToggleNoMovies] = useState(<LoadFavPage />)

  const userId = localStorage.getItem('userId')

  const fetchMovieData = async () => {
    try {
      const res = await fetchApi({
        method: 'get',
        url: `/api/movies/favorites?userId=${userId}`,
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
