import { useEffect, useState, ChangeEvent, FocusEvent, KeyboardEvent } from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import CategoryCard from '../../common/Cards/CategoryCard'
import CategoryCard2 from '../../common/Cards/CategoryCard2'
import styled from 'styled-components'
import { useInput } from '../../hooks/useInput'
import {
  MovieSearchRequest,
  MovieSearchRequest2,
  MovieSetSearch,
  MovieSetSearch2,
  SerieSetSearch,
  SerieSetSearch2,
} from './SearchFunctions'

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
  code?: any
  type?: any
}

function Search() {
  const [movies, setMovies] = useState<moviesProps[]>([])
  const [movies2, setMovies2] = useState<moviesProps[]>([])
  const [series, setSeries] = useState([])
  const [series2, setSeries2] = useState([])

  const search = useInput()

  // input
  const details = function (e: FocusEvent<HTMLInputElement>) {
    e.target.placeholder = ''
  }

  const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      MovieSetSearch({ search, setMovies })
      MovieSetSearch2({ search, setMovies2 })
      SerieSetSearch({ search, setSeries })
      SerieSetSearch2({ search, setSeries2 })
    }
  }
  // SearchFound
  useEffect(() => {
    MovieSearchRequest({ setMovies })
    MovieSearchRequest2({ setMovies2 })
  }, [])

  return (
    <>
      <Container>
        <Input
          autoCorrect='off'
          maxLength={50}
          placeholder='Que estas buscando?'
          autoCapitalize='sentences'
          onFocus={details}
          onKeyDown={handleSearch}
          {...search}
        />
      </Container>

      <SimpleGrid minChildWidth='300px' spacing='30px'>
        {series?.map((movie, i) => (
          <CategoryCard2 movie={movie} key={i} />
        ))}
        {series2?.map((movie, i) => (
          <CategoryCard2 movie={movie} key={i} />
        ))}
        {movies.map((movie, i) => (
          <CategoryCard movie={movie} key={i} />
        ))}
        {movies2.map((movie, i) => (
          <CategoryCard movie={movie} key={i} />
        ))}
      </SimpleGrid>
    </>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`

const Input = styled.input`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  height: 68px;
  letter-spacing: 0px;
  outline: none;
  padding-left: 48px;
  width: 1629px;
  border-color: rgba(255, 255, 255, 0.4);
  background-color: #131728;
  text-align: center;

  &::placeholder {
    color: #fff;
  }
`

export default Search
