import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Image } from '@chakra-ui/react'
import './Row.css'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import axios from 'axios'

const baseURL = 'https://image.tmdb.org/t/p/original/'
const getURL = 'https://api.themoviedb.org/3'

interface rowProps {
  title: string
  fetchUrl: string
}

type moviesProps = {
  id?: number
  title?: string
  name?: string
  original_name?: string
  backdrop_path?: string
  poster_path?: any
  overview?: any
  vote_average?: any
  release_date?: any
  type?: any
  code?: any
}

function Row({ title, fetchUrl }: rowProps) {
  const rowRef = useRef<HTMLDivElement>(null)
  const [isMoved, setIsMoved] = useState(false)
  const [movies, setMovies] = useState<moviesProps[]>([])

  const handleClick = (direction: string) => {
    setIsMoved(true)
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current

      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  const fetchData = async () => {
    try {
      const request = await axios.get(`${getURL}${fetchUrl}`)
      return setMovies(request.data.results)
    } catch (e) {
      console.log('ERROR', e)
    }
  }

  useEffect(() => {
    fetchData()
  }, [fetchUrl])

  return (
    // title
    <div className='row h-40 space-y-0.5 md:space-y-2 sm:mt-12'>
      <h2 className='w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl md:mt-40'>
        {title}
      </h2>

      {/* row */}
      <div className='row__posters group relative md:-ml-2'>
        {/* carousel left button */}
        <ChevronLeftIcon
          className={`leftIcon absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
            !isMoved && 'hidden'
          }`}
          onClick={() => handleClick('left')}
        />

        {/* movies row */}
        <div
          className='flex scrollbar-hide items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2'
          ref={rowRef}
        >
          {movies.map((movie, i) => (
            <div key={i} className='relative h-28 min-w-[180px] md:min-w-[380px] md:min-h-[220px]'>
              <Link to={`/movie/${movie.id}`}>
                <Image
                  key={movie.id}
                  className='row__poster '
                  src={`${baseURL}${movie.backdrop_path || movie.poster_path}`}
                  alt={movie.name}
                  minW={380}
                  maxWidth={380}
                  minH={220}
                  maxH={220}
                />
              </Link>
            </div>
          ))}
        </div>
        {/* carousel right button */}
        <ChevronRightIcon
          className='rightIcon absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100'
          onClick={() => handleClick('right')}
        />
      </div>
    </div>
  )
}

export default Row
