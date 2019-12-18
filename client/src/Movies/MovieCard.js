import React from 'react';
import { useRouteMatch, Link, Route, useParams } from 'react-router-dom';

const MovieCard = props => {
  const {id} = useParams(); //get id of movie for links
  console.log(id);
  const {path, url} =useRouteMatch(); //set path on links

  return(
<div>
    {/* <Link to = {`${url}/movies/movie`}>
      Movies
    </Link>
    <Route path = {`${path}/movies/movie/:id`}>
    </Route> */}
    </div>
  );
};

export default MovieCard;

