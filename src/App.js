import axios from "./axios";
import "./App.css";
import { useEffect, useState } from "react";
import request from "./request";
import Row from "./Row";

function App() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		// const fetchMovies = async () => {
		// 	const response = await axios.get(request.fetchTrending)
		// 	console.log(response.data)
		// }
		// fetchMovies()
	}, []);

	return (
		<div className="app">
			<h1>React Netflix Clone</h1>
			<Row title="NETFLIX ORIGINAL" fetchUrl={request.fetchNetflixOriginals} />
			<Row title="Trending Now" fetchUrl={request.fetchTrending} />
			<Row title="Top Rated" fetchUrl={request.fetchTopRated} />
			<Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
			<Row title="Comedy Movies" fetchUrl={request.fetchComdeyMovies} />
			<Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
			<Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
			<Row title="Documentaries Movies" fetchUrl={request.fetchDocumentaries} />
		</div>
	);
}

export default App;
