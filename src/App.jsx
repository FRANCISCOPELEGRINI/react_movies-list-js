/* eslint-disable max-len */

import './App.scss';
import moviesFromServer from './api/movies.json';
import { MovieList } from './components/MovieList/MovieList';

export const App = () => (
  <div className="page">
    <div data-cy="Sidebar" className="sidebar">
      data-cy="Sidebar"
    </div>
    <div className="page-content">
      <MovieList movies={moviesFromServer} />
    </div>
  </div>
);

