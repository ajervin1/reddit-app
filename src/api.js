import axios from 'axios'


const http = axios.create({
	baseURL: 'https://www.reddit.com/r',
	params: {
		limit: 6,
		raw_json: 1
	}
})





export default http
