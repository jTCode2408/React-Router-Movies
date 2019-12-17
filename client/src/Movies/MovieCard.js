import React from 'react';
import { useRouteMatch, Link, Route, useParams } from 'react-router-dom';

const MovieCard = props => {
  const {id} = useParams();
  console.log(id);
  const {path, url} =useRouteMatch();

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

