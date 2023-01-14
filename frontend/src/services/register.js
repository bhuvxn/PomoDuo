import axios from 'axios'
const baseUrl = 'http://localhost:8000/api/users'

const Register = async (newObject) => {
    const response = await axios.post(baseUrl, newObject)
    return response.data
}

export default { Register }