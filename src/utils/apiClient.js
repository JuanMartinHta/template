import appConfigApi from './api/appConfigApi';
import covidApi from './api/covidApi';
import todoApi from './api/todoApi';
import pokemonApi from './api/pokemonApi';
import apiHeroku from './api/apiHeroku';

const api = {
  appConfig: appConfigApi,
  covid: covidApi,
  todo: todoApi,
  pokemon: pokemonApi,
  heroku: apiHeroku
};

export default api;
