import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../App.css'
const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const extractIdFromUrl = (url) => {
    const urlParts = url.split('/');
    return urlParts[urlParts.length - 2];
  };

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/films/${id}`);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie:', error);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-detail">
        <h2>{movie.title}</h2>
        <p>Episode: {movie.episode_id}</p>
        <p>Director: {movie.director}</p>
        <p>Release Date: {movie.release_date}</p>
        <p>Opening Crawl:</p>
        <p>{movie.opening_crawl}</p>
        <h3>Characters:</h3>
        <ul>
            {movie.characters.map((character, index) => (
            <li key={index}>
                <Link to={`/actors/${extractIdFromUrl(character)}`}>
                <img src="https://www.bollywoodhungama.com/wp-content/uploads/2019/11/Star-Wars-The-Rise-of-Skywalker-cast-feature-on-special-Entertainment-Weekly-covers-2.jpg" alt="Character" />
                </Link>
            </li>
            ))}
        </ul>
        <h3>Planets:</h3>
        <ul>
            {movie.planets.map((planet, index) => (
            <li key={index}>
                <Link to={`/planets/${extractIdFromUrl(planet)}`}>
                <img src="https://exoplanets.nasa.gov/internal_resources/116" alt="Planet" />
                </Link>
            </li>
            ))}
        </ul>
    </div>

  );
};

export default MovieDetail;
