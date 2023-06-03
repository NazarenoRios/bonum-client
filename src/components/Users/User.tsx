import { useEffect, useState } from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import UserPersonalCard from '../../common/Cards/UserPersonalCard/UserPersonalCard'
import UserInfoCard from '../../common/Cards/UserPersonalCard/UserInfoCard'
import { fetchApi } from '../../config/axiosInstance'
import { useLocation } from 'react-router-dom'

function UserPage() {
  const params = useLocation()
  const id = params.pathname.split('/user/')[1]

  // const [user, setUser] = useState({})
  const [user, setUser] = useState({ name: '' })
  const [movies, setMovies] = useState([])

  // User data
  const fetchUserData = async () => {
    const res = await fetchApi({
      method: 'get',
      url: `/api/users/user/${id}`,
    })
    setUser(res.data)
  }

  // User movies
  const fetchMovieData = async () => {
    try {
      const res = await fetchApi({
        method: 'get',
        url: `/api/movies/favorites?userId=${id}`,
      })
      setMovies(res.data)
    } catch (e) {
      console.log('')
    }
  }

  useEffect(() => {
    fetchMovieData()
    fetchUserData()
  }, [])

  return (
    <>
      <UserPersonalCard user={user} />

      <div className='flex justify-center mb-2'>
        <h1 style={{ fontSize: '30px' }}>{user.name}</h1>
      </div>

      <div className='flex justify-center'>
        <h2 style={{ fontSize: '30px' }}>Lista de favoritos</h2>
      </div>

      <SimpleGrid minChildWidth='300px' spacing='30px'>
        {movies ? movies.map((movie, i) => <UserInfoCard movie={movie} key={i} />) : ''}
      </SimpleGrid>
    </>
  )
}

export default UserPage
