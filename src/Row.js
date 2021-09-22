import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";

const base_url = process.env.IMAGE_BASE_URL || "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl }) {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const fetMovies = async () => {
			const response = await axios.get(fetchUrl);
			setMovies(response.data.results);
		};

		fetMovies();
	}, [fetchUrl]);

	return (
		<div className="row">
			<h2>{title}</h2>

			<div className="row__posters">
				{/* posters */}
				{movies.map((movie, index) => (
					<img key={index} className="row__poster" src={`${base_url}${movie.poster_path}`} alt={movie.name} />
				))}
			</div>
			{/* container -> posters */}
		</div>
	);
}

export default Row;
