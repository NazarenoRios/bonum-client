import { SimpleGrid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Nav from '../../../Nav/Nav'
import CategoryCard from '../../../../common/Cards/CategoryCard'
import { CategoryStarWarsRequest } from '../../../state/categories'
import LoadingSpinner from '../../../../common/LoadingSpinner'
import { checkLogin } from '../../../state/user'

export default function StarWars() {
  const get_url = 'https://api.themoviedb.org/3'

  const [movies, setMovies] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(CategoryStarWarsRequest({ get_url, setMovies }))
  }, [])

  // toggleNeedToLogIn
  const [toggleNeedToLogIn, setToggleNeedToLogIn] = useState(<LoadingSpinner />)

  const user = useSelector((state) => state.users)

  useEffect(() => {
    dispatch(checkLogin(setToggleNeedToLogIn))
  }, [])

  if (user.id) {
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

  return <>{toggleNeedToLogIn}</>
}
