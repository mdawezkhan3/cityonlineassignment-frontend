import * as React from "react";
import { fetchUtils, Admin, Resource } from 'react-admin';
import MovieIcon from '@material-ui/icons/Movie';
import TheatersIcon from '@material-ui/icons/Theaters';
import { BASE_DOMAIN } from './config';
import simpleRestProvider from 'ra-data-simple-rest';
import { GenresCreate, GenresEdit, GenresList } from './components/genres';
import { MoviesCreate, MoviesEdit, MoviesList, MovieShow } from './components/movies';
import customRoutes from './components/customComponents/customRoutes';
import { CustomLayout } from './components/customComponents/customLayout';
import Homescreen from "./components/homescreen/homescreen";


const httpClient = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }

  return fetchUtils.fetchJson(url, options);
};
const dataProvider = simpleRestProvider(BASE_DOMAIN,httpClient);

const App = () => {

  return (
      <Admin customRoutes={customRoutes} dashboard={Homescreen} dataProvider={dataProvider} layout={CustomLayout} >
        <Resource
              name="genres"
              options={{label: "Genres"}}
              edit={GenresEdit}
              list={GenresList}
              create={GenresCreate}
              icon={TheatersIcon}
          />
          <Resource
              name="movies"
              options={{label: "Movies"}}
              edit={MoviesEdit}
              show={MovieShow}
              list={MoviesList}
              create={MoviesCreate}
              icon={MovieIcon}
          />
    </Admin>
    );
}

export default App;

