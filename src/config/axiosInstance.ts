import axios from 'axios'

const baseURL =
  process.env.REACT_APP_ENV === 'production'
    ? 'https://tmdb-server.onrender.com'
    : 'http://localhost:8080'

const config = {
  baseURL,
  withCredentials: true,
}

export const instance = axios.create(config)

interface fetchProps {
  url: string
  method: string
  headers?: any
  body?: any
}

export const fetchApi = ({ url, method, body, headers }: fetchProps) =>
  instance.request({
    url,
    method,
    headers,
    data: body,
  })
