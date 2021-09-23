import "./App.css";
import request from "./request";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
	return (
		<div className="app">
			{/* Navbar */}
			<Nav />

			<Banner />
			{/* Banner */}

			<Row title="NETFLIX ORIGINAL" fetchUrl={request.fetchNetflixOriginals} isLargeRow={true} />
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
