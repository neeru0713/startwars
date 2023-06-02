import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import defaultImage from '../assets/defimg.jpg';


const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/films');
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const getRandomImage = () => {
    // Array of random movie images
    const movieImages = [
    ];

    // Get a random index from the movieImages array
    const randomIndex = Math.floor(Math.random() * movieImages.length);

    return movieImages[randomIndex];
  };

  return (
    <div>
      <h1>Star Wars Movies</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.episode_id}>
            <Link to={`/movies/${movie.episode_id}`}>
              <img
                src={movie.image ? movie.image :  defaultImage}
                alt={movie.title}
                style={{height:'200px', width:'200px'}}
              />
              <h3>{movie.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
