import axios from 'axios'
import { baseURL } from './config'

const api = axios.create({
    baseURL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})

export { api }
