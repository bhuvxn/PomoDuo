import axios from 'axios'
const baseUrl = 'http://localhost:8000/api/Hours'

let token = null
const setToken = newToken => {  
  token = `bearer ${newToken}`
}

const create = async newObject => {
    const config = {    headers: { Authorization: token },  }
    const response = await axios.post(baseUrl, newObject, config)  
    return response.data
}

export default { create, setToken }