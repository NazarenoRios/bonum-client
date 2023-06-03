import NeedToLoginPage from '../pages/NeedToLoginPage'
import { fetchApi } from '../config/axiosInstance'

export const checkLogin = async (setToggleNeedToLogIn) => {
  try {
    const res = await fetchApi({
      method: 'get',
      url: '/api/users/me',
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })

    if (res.status !== 200) {
      setToggleNeedToLogIn(<NeedToLoginPage />)
    }

    return res.data
  } catch (err) {
    console.log('ERROR', err)
    setToggleNeedToLogIn(<NeedToLoginPage />)
  }
}
