import React, { useState } from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie' ;
import MovieList from './Movies/MovieList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
        <div>
<Link to ='/'></Link> 
<Link to = '/movies'></Link>

        </div>
        <Switch>
        <Route path = '/movies/:id'>
          <Movie items = {MovieList}/>
        </Route>
        
          <Route path = '/'>
            <MovieList />
          </Route>
          </Switch>


      </div>
    </div>
  );
};

export default App;
