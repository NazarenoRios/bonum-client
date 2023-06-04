import axios from 'axios'

const baseURL =
  process.env.REACT_APP_ENV === 'production'
    ? 'http://ip172-18-0-29-chu04ossnmng008oms4g-3000.direct.labs.play-with-docker.com/'
    : 'http://localhost:1337'

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
