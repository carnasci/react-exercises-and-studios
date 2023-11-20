import data from '../data.json';
import { useState } from 'react';

export default function MyProjects() {
   const [index, setIndex] = useState(0);

  function handleClick() {
   if (index < data.placesCamped.length-1)
   {
      setIndex(index + 1);
   }
   else
   {
      setIndex(0);
   }
  }

  let projects = data.placesCamped;
  let project = placesCamped[index];

  return (
    <div>
      <button onClick={handleClick}>
        Next
      </button>
      <h2>{project.siteName} in {project.location}
      </h2>
      <img src={project.image} alt={project.siteName} />
      <h2>Activity accomplished: {project.activity}</h2>
    </div>
  );
}
