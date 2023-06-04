import { MouseEvent, useEffect, useState } from 'react'
import { PlusIcon, CheckIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'

import './Banner.css'
import { fetchApi } from '../../../config/axiosInstance'
import axios from 'axios'
import requests from '../../../utils/requests'

type MoviesProps = {
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
}

function Banner() {
  const userId = localStorage.getItem('userId')

  const getUrl = 'https://api.themoviedb.org/3'

  const [checkFav, setCheckFav] = useState(false)
  const [movies, setMovies] = useState([])
  const [movie, setMovie] = useState<MoviesProps>({})

  function truncate(str: string, n: number) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str
  }

  const fetchBanner = async () => {
    try {
      const res = await axios.get(`${getUrl}${requests.fetchAnimation}`)
      return setMovie(res.data.results[Math.floor(Math.random() * res.data.results.length)])
    } catch (e) {
      console.log('')
    }
  }

  const fetchMovieData = async () => {
    try {
      const res = await fetchApi({
        method: 'get',
        url: `/api/movies/favorites?userId=${userId}`,
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })

      setMovies(res.data)
    } catch (e) {
      console.log('')
    }
  }

  useEffect(() => {
    try {
      fetchBanner()
      fetchMovieData()
    } catch (e: any) {
      console.log('ERROR', e)
    }
  }, [userId])

  useEffect(() => {
    movies?.map((favMov: any) => favMov.code === movie.id && setCheckFav(true))
  }, [movies])

  const fetchAddFavorite = async () => {
    const res = await fetchApi({
      method: 'put',
      url: `/api/movies/addFavorite?userId=${userId}&code=${movie.id}&title=${movie.title}&poster_path=${movie.poster_path}&vote_average=${movie.vote_average}&release_date=${movie.release_date}&type=movie`,
    })
    return res.data
  }

  const fetchDeleteFavorite = async () => {
    const res = await fetchApi({
      method: 'delete',
      url: `/api/movies/removeFavorite?userId=${userId}&code=${movie.id}&type=movie`,
    })
    return res.data
  }

  const addFavorite = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setCheckFav(!checkFav)
    fetchAddFavorite()
  }

  const removeFavorite = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setCheckFav(!checkFav)
    fetchDeleteFavorite()
  }

  return (
    <header
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: 'center center',
      }}
    >
      <div className='banner__contents'>
        <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>

        <div className='banner_buttons flex'>
          <Link to={`/movie/${movie.id}`}>
            <button className='banner__button'>Play</button>
          </Link>

          <Link to='/favorites'>
            <button className='banner__button'>Mi Lista</button>
          </Link>

          <div className='rounded-full border-2 border-white flex items-center justify-center w-11 h-11 cursor-pointer bg-black/60 hover:bg-[#c6c6c6] hover:text-[#191919]'>
            {checkFav ? (
              <button onClick={removeFavorite}>
                <CheckIcon className='h-6' />
              </button>
            ) : (
              <button onClick={addFavorite}>
                <PlusIcon className='h-6' />
              </button>
            )}
          </div>
        </div>

        <h1 style={{ fontSize: '20px' }} className='banner__description text-xl'>
          {truncate(movie?.overview, 250)}
        </h1>
      </div>

      <div className='banner--fadeBottom' />
    </header>
  )
}

export default Banner
