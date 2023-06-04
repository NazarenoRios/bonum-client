import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Image } from '@chakra-ui/react'
import './MovieDetail.css'

import { PlusIcon, XIcon, CheckIcon } from '@heroicons/react/solid'
import playIconWhite from '../../assets/playIcons/play-icon-white.svg'
import playIconBlack from '../../assets/playIcons/play-icon-black.svg'
import favorites from '../../assets/btnIcons/favorites.svg'

import { fetchApi } from '../../config/axiosInstance'
import axios from 'axios'

type MoviesProps = {
  id?: number
  title?: string
  name?: string
  original_name?: string
  original_title?: string
  backdrop_path?: string
  poster_path?: any
  overview?: any
  vote_average?: any
  release_date?: any
  videos?: any
  first_air_date?: any
  runtime?: any
  type?: any
}

function TvDetail() {
  const getURL = 'https://api.themoviedb.org/3'
  const baseURL = 'https://image.tmdb.org/t/p/original/'
  const API_KEY = `?api_key=${process.env.REACT_APP_TMDB_API_KEY}`

  const params = useParams<{ id?: string }>()
  const id = params.id ? JSON.stringify(parseInt(params.id)) : ''

  const [showPlayer, setShowPlayer] = useState(false)
  const [checkFav, setCheckFav] = useState(false)
  const [movies, setMovies] = useState([])
  const [movie, setMovie] = useState<MoviesProps>({})

  const userId = localStorage.getItem('userId')

  const fetchMovieData = async () => {
    try {
      const res = await fetchApi({
        method: 'get',
        url: `/api/movies/favorites?userId=${userId}`,
      })

      setMovies(res.data)
    } catch (e) {
      console.log(e)
    }
  }

  const TvDetailRequest = async () => {
    try {
      const res = await axios.get(`${getURL}/tv/${id}${API_KEY}&append_to_response=videos,images`)
      return setMovie(res.data)
    } catch (err) {
      console.log('ERROR', err)
    }
  }

  useEffect(() => {
    TvDetailRequest()
    fetchMovieData()
  }, [])

  useEffect(() => {
    movies && movies.map((favMov: any) => favMov.code === movie.id && setCheckFav(true))
  }, [movies])

  const fetchAddFavorite = async () => {
    const res = await fetchApi({
      method: 'put',
      url: `/api/movies/addFavorite?userId=${userId}&code=${movie.id}&title=${movie.name}&poster_path=${movie.poster_path}&vote_average=${movie.vote_average}&release_date=${movie.first_air_date}&type=tv`,
    })
    return res.data
  }

  const fetchDeleteFavorite = async () => {
    const res = await fetchApi({
      method: 'delete',
      url: `/api/movies/removeFavorite?userId=${userId}&code=${movie.id}&type=tv`,
    })
    return res.data
  }

  const addFavorite: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    setCheckFav(!checkFav)
    fetchAddFavorite()
  }

  const removeFavorite: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    setCheckFav(!checkFav)
    fetchDeleteFavorite()
  }

  return (
    <div className='relative'>
      {/* Bg Overlay trailer */}
      {showPlayer && (
        <div className='absolute inset-0 bg-black opacity-50 h-full w-full z-50'></div>
      )}

      {/* trailer */}
      <div
        className={`trailer absolute top-3 inset-x-[7%] md:inset-x-[13%] rounded overflow-hidden transition duration-1000 ${
          showPlayer ? 'opacity-100 z-50' : 'opacity-0'
        }`}
      >
        <div className='flex items-center justify-between bg-black text-[#f9f9f9] p-3.5'>
          <span className='font-semibold'>Play Trailer</span>
          <div
            className='cursor-pointer w-8 h-8 flex justify-center items-center rounded-lg opacity-50 hover:opacity-75 hover:bg-[#0F0F0F]'
            onClick={() => setShowPlayer(false)}
          >
            <XIcon className='h-5' />
          </div>
        </div>
        <div className='relative pt-[56.25%]'>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${movie.videos?.results[0]?.key}`}
            width='100%'
            height='100%'
            style={{ position: 'absolute', top: '0', left: '0' }}
            controls={true}
            playing={showPlayer}
          />
        </div>
      </div>

      {/* banner w/ buttons */}
      <section className='relative z-40'>
        <div className='relative min-h-[calc(100vh-72px)]'>
          <Image
            className='poster'
            src={`${baseURL}${movie.backdrop_path || movie.poster_path}`}
            // layout='fill'
            objectFit='cover'
          />
        </div>

        <div className='absolute inset-y-28 md:inset-y-auto md:bottom-10 inset-x-4 md:inset-x-12 space-y-6 z-50'>
          <h1 className='text-3xl sm:text-4xl md:text-6xl font-bold'>
            {movie.name || movie.original_title}
          </h1>

          <div className='flex items-center space-x-3 md:space-x-5'>
            <button className='text-xs md:text-base bg-[#f9f9f9] text-black flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6]'>
              <img src={playIconBlack} alt='' className='h-6 md:h-8' />
              <span className='uppercase font-medium tracking-wide'>Play</span>
            </button>

            <button
              className='text-xs md:text-base bg-black/30 text-[#f9f9f9] border border-[#f9f9f9] flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6] hover:text-[#191919]'
              onClick={() => setShowPlayer(true)}
            >
              <img src={playIconWhite} alt='' className='h-6 md:h-8' />
              <span className='uppercase font-medium tracking-wide'>Trailer</span>
            </button>

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

            <Link to='/favorites'>
              <div className='rounded-full border-2 border-white flex items-center justify-center w-11 h-11 cursor-pointer bg-black/60 hover:bg-[#c6c6c69c] hover:text-[#191919]'>
                <img src={favorites} alt='' />
              </div>
            </Link>
          </div>

          <p className='text-xs md:text-sm'>
            {movie.release_date || movie.first_air_date} • {Math.floor(movie.runtime / 60)}h{' '}
            {movie.runtime % 60}m •{' '}
          </p>
          <h4 className='text-sm md:text-lg max-w-4xl'>{movie.overview}</h4>
        </div>
      </section>
    </div>
  )
}

export default TvDetail
