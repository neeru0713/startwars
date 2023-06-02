import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

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
  <h2>{planet.name}</h2>
  <p>Climate: {planet.climate}</p>
  <p>Terrain: {planet.terrain}</p>
  <p>Population: {planet.population}</p>
  <p>Gravity: {planet.gravity}</p>
  <p>Diameter: {planet.diameter}</p>
  <p>Orbital Period: {planet.orbital_period}</p>
  <p>Rotation Period: {planet.rotation_period}</p>
  <h3>Films:</h3>
  <ul>
    {planet.films.map((film, index) => (
      <li key={index}>
        <Link to={`/movies/${extractIdFromUrl(film)}`}>
          <img className="planet-image" src={`https://source.unsplash.com/80x80/?film,${index}`} alt="Film" />
          {film}
        </Link>
      </li>
    ))}
  </ul>
  <h3>Residents:</h3>
  <ul>
    {planet.residents.map((resident, index) => (
      <li key={index}>
        <Link to={`/actors/${extractIdFromUrl(resident)}`}>
          <img className="planet-image" src={`https://source.unsplash.com/80x80/?resident,${index}`} alt="Resident" />
          {resident}
        </Link>
      </li>
    ))}
  </ul>
</div>

  );
};

