/* eslint-disable max-len */

import './App.scss';
import moviesFromServer from './api/movies.json';
import MovieList from './components/MovieList/MovieList'

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MovieList movies={moviesFromServer} />
    </div>
  </div>
);


/*

Renderizar os filmes usando o array moviesFromServer diretamente dentro do App.

Criar um componente MovieList para representar o bloco .movies.

Passar moviesFromServer como prop movies do App para o MovieList.

Criar um componente MovieCard para representar o bloco .card.

No MovieList, iterar sobre o array movies e passar cada objeto movie como prop para o MovieCard.

Usar movie.imdbId como key no map.

Manter todos os atributos data-cy exatamente como estão para não quebrar os testes.

*/