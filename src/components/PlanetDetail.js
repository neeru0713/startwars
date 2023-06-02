import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './PlanetDetail.css';

const extractIdFromUrl = (url) => {
  const urlParts = url.split('/');
  return urlParts[urlParts.length - 2];
};

export const PlanetDetail = () => {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    const fetchPlanet = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/planets/${id}`);
        const data = await response.json();
        setPlanet(data);
      } catch (error) {
        console.error('Error fetching planet:', error);
      }
    };

    fetchPlanet();
  }, [id]);

  if (!planet) {
    return <div>Loading...</div>;
  }

  return (
    <div className="planet-detail">
      <nav className="navbar">
        <Link to="/" className="home-link">
          Home
        </Link>
      </nav>

      <h2>{planet.name}</h2>
      <p>Climate: {planet.climate}</p>
      <p>Terrain: {planet.terrain}</p>
      <p>Population: {planet.population}</p>
      <p>Gravity: {planet.gravity}</p>
      <p>Diameter: {planet.diameter}</p>
      <p>Orbital Period: {planet.orbital_period}</p>
      <p>Rotation Period: {planet.rotation_period}</p>
      
      <h3>Films:</h3>
      <div className="films-grid">
        {planet.films.map((film, index) => (
          <Link to={`/movies/${extractIdFromUrl(film)}`} key={index} className="grid-item">
            <img src={`https://source.unsplash.com/80x80/?film,${index}`} alt="Film" />
            
          </Link>
        ))}
      </div>

      <h3>Residents:</h3>
      <div className="residents-grid">
        {planet.residents.map((resident, index) => (
          <Link to={`/actors/${extractIdFromUrl(resident)}`} key={index} className="grid-item">
            <img src={`https://source.unsplash.com/80x80/?resident,${index}`} alt="Resident" />
            
          </Link>
        ))}
      </div>
    </div>
  );
};
