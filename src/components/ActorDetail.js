import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import "../App.css"
const extractIdFromUrl = (url) => {
    const urlParts = url.split('/');
    return urlParts[urlParts.length - 2];
  };

const ActorDetail = () => {
  const { id } = useParams();
  const [actor, setActor] = useState(null);

  useEffect(() => {
    const fetchActor = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/people/${id}`);
        const data = await response.json();
        setActor(data);
      } catch (error) {
        console.error('Error fetching actor:', error);
      }
    };

    fetchActor();
  }, [id]);

  if (!actor) {
    return <div>Loading...</div>;
  }

  return (
    <div className="actor-detail">
  <h2>{actor.name}</h2>
  <p>Height: {actor.height}</p>
  <p>Mass: {actor.mass}</p>
  <p>Hair Color: {actor.hair_color}</p>
  <p>Skin Color: {actor.skin_color}</p>
  <p>Eye Color: {actor.eye_color}</p>
  <p>Birth Year: {actor.birth_year}</p>
  <p>Gender: {actor.gender}</p>
  <h3>Starships:</h3>
  <ul>
    {actor.starships.map((starship, index) => (
      <li key={index}>
        <Link to={`/starships/${extractIdFromUrl(starship)}`}>{starship}</Link>
      </li>
    ))}
  </ul>
</div>

  );
};

export default ActorDetail;
