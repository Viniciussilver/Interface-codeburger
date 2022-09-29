import axios from 'axios'

const apiCodeBurger = axios.create({
  baseURL: 'http://localhost:3000',
})

apiCodeBurger.interceptors.request.use(async config => {
  const data = await localStorage.getItem('userData')
  const token = data && JSON.parse(data).token
  console.log(token)
  config.headers.authorization = `Bearer ${token}`

  return config
})

export default apiCodeBurger
