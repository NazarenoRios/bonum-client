import { Flex, Image } from '@chakra-ui/react'
import './Card.css'
import { Link } from 'react-router-dom'

function CategoryCard({ movie }: any) {
  const baseURL = 'https://image.tmdb.org/t/p/original/'

  function truncate(str: string, n: number) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str
  }

  return (
    <Flex alignItems='center' justifyContent='center'>
      <Link to={`/movie/${movie.id}`}>
        <div className='card'>
          <p className='card__title pb-3'>{truncate(movie.title, 32)}</p>
          <Image
            className='card__poster'
            src={`${baseURL}${movie.poster_path || movie.backdrop_path}`}
            // layout='fill'
            objectFit='cover'
          />
        </div>
      </Link>
    </Flex>
  )
}

export default CategoryCard
