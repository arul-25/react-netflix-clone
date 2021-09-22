import axios from "axios"

const instance = axios.create({
	baseURL: process.env.BASE_URL || "https://api.themoviedb.org/3"
})

export default instance
