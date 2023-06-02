import requests from '../../utils/requests'
import axios from 'axios'

const getURL = 'https://api.themoviedb.org/3'
const API_KEY = `?api_key=${process.env.REACT_APP_TMDB_API_KEY}`

type setMoviesProps = {
  setMovies?: any
  setMovies2?: any
}

type setSearchProps = {
  setMovies?: any
  setMovies2?: any
  setSeries?: any
  setSeries2?: any
  search: any
}

export const MovieSearchRequest = async ({ setMovies }: setMoviesProps) => {
  try {
    const res = await axios.get(`${getURL}${requests.fetchAnimation}`)
    setMovies(res.data.results)
  } catch (e: any) {
    console.log('ERROR', e)
  }
  //   return axios.get(`${getURL}${requests.fetchAnimation}`).then((res) => setMovies(res.data.results))
}

export const MovieSearchRequest2 = async ({ setMovies2 }: setMoviesProps) => {
  try {
    const res = await axios.get(`${getURL}${requests.fetchActionMovies}`)
    setMovies2(res.data.results)
  } catch (e: any) {
    console.log('ERROR', e)
  }
}

export const MovieSetSearch = async ({ search, setMovies }: setSearchProps) => {
  try {
    const res = await axios.get(`${getURL}/search/movie${API_KEY}&query=${search.value}&page=1`)
    setMovies(res.data.results)
    search.onChange({ target: { value: '' } })
  } catch (e) {
    console.log('ERROR', e)
  }
  //   return axios.get(`${getURL}/search/movie${API_KEY}&query=${search.value}&page=1`).then((res) => {
  //     setMovies(res.data.results)
  //     search.onChange({ target: { value: '' } })
  //   })
}

export const MovieSetSearch2 = async ({ search, setMovies2 }: setSearchProps) => {
  try {
    const res = await axios.get(`${getURL}/search/movie${API_KEY}&query=${search.value}&page=2`)
    setMovies2(res.data.results)
    search.onChange({ target: { value: '' } })
  } catch (e) {
    console.log('ERROR', e)
  }
}

export const SerieSetSearch = async ({ search, setSeries }: setSearchProps) => {
  try {
    const res = await axios.get(`${getURL}/search/tv${API_KEY}&query=${search.value}&page=1`)
    setSeries(res.data.results)
    search.onChange({ target: { value: '' } })
  } catch (e) {
    console.log('ERROR', e)
  }
}

export const SerieSetSearch2 = async ({ search, setSeries2 }: setSearchProps) => {
  try {
    const res = await axios.get(`${getURL}/search/tv${API_KEY}&query=${search.value}&page=2`)
    setSeries2(res.data.results)
    search.onChange({ target: { value: '' } })
  } catch (e) {
    console.log('ERROR', e)
  }
}
