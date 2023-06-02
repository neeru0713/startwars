import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const extractIdFromUrl = (url) => {
    const urlParts = url.split('/');
    return urlParts[urlParts.length - 2];
  };
  

const StarshipDetail = () => {
  const { id } = useParams();
  const [starship, setStarship] = useState(null);

  useEffect(() => {
    const fetchStarship = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/starships/${id}`);
        const data = await response.json();
        setStarship(data);
      } catch (error) {
        console.error('Error fetching starship:', error);
      }
    };

    fetchStarship();
  }, [id]);

  if (!starship) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{starship.name}</h2>
      <p>Model: {starship.model}</p>
      <p>Manufacturer: {starship.manufacturer}</p>
      <p>Starship Class: {starship.starship_class}</p>
      <p>Length: {starship.length}</p>
      <p>Crew: {starship.crew}</p>
      <p>Passengers: {starship.passengers}</p>
      <p>Max Atmosphering Speed: {starship.max_atmosphering_speed}</p>
      <p>Hyperdrive Rating: {starship.hyperdrive_rating}</p>
      <p>MGLT: {starship.MGLT}</p>
      <p>Cargo Capacity: {starship.cargo_capacity}</p>
      <p>Consumables: {starship.consumables}</p>
      <p>Cost in Credits: {starship.cost_in_credits}</p>
      <p>Created: {starship.created}</p>
      <p>Edited: {starship.edited}</p>
      <p>Manufacturer: {starship.manufacturer}</p>
      <p>Length: {starship.length}</p>
      <p>Max Atmosphering Speed: {starship.max_atmosphering_speed}</p>
      <p>Cargo Capacity: {starship.cargo_capacity}</p>
      <p>Consumables: {starship.consumables}</p>
      <p>Cost in Credits: {starship.cost_in_credits}</p>
      <p>Created: {starship.created}</p>
      <p>Edited: {starship.edited}</p>
      <p>Starship Class: {starship.starship_class}</p>
      <h3>Films:</h3>
      <ul>
        {starship.films.map((film, index) => (
          <li key={index}>
            <Link to={`/movies/${extractIdFromUrl(film)}`}>{film}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StarshipDetail;
