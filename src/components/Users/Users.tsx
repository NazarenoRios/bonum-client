import { useEffect, useState } from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import UserCard from '../../common/Cards/UserCard'
import styled from 'styled-components'
import { fetchApi } from '../../config/axiosInstance'

function Users() {
  const [users, setUsers] = useState([{ name: '' }])
  const [placeholder, setPlaceholder] = useState('Buscar usuarios...')

  // input
  const togglePlaceholder = function () {
    setPlaceholder('')
  }

  // search users
  const [search, setSearch] = useState('')

  // Users
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchApi({
        method: 'get',
        url: '/api/users/',
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })

      setUsers(res.data)
    }

    fetchData()
  }, [])

  return (
    <>
      <Container>
        <Input
          autoCorrect='off'
          maxLength={parseInt('50')}
          placeholder={placeholder}
          autoCapitalize='sentences'
          onFocus={togglePlaceholder}
          onChange={(e) => setSearch(e.target.value)}
          // onKeyDown={handleSearch}
        />
      </Container>

      <SimpleGrid minChildWidth='300px' spacing='30px'>
        {users
          .filter((user) => {
            if (search.toLowerCase() === '') {
              return true // Include all users if the search is empty
            } else {
              return user.name && user.name.toLowerCase().includes(search.toLowerCase())
            }
          })
          .map((user, i) => (
            <UserCard user={user} key={i} />
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

export default Users
