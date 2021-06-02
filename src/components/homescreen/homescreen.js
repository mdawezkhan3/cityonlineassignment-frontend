import React, { useState, useEffect } from "react";
import { Title, useGetList, useRedirect } from 'react-admin';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'space-evenly',
      paddingTop: 10,
      paddingBottom: 20,
      flexWrap: 'wrap'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      cursor: 'pointer'
    },
  }));

const Homescreen = () => {
  
  const { data: genresList, ids: genresIdList } = useGetList(
          'genres',
          { page: 1, perPage: 1000 },
          { field: 'id', order: 'ASC' }
      );

  const { data: moviesList, ids: moviesIdList } = useGetList(
      'movies',
      { page: 1, perPage: 1000 },
      { field: 'id', order: 'ASC' }
  );

  const [clickedGenreId, setClickedGenreId] = useState('');
  const [clickedGenreMoviesIdList, setClickedGenreMoviesIdList] = useState(moviesIdList);

  useEffect(() => {
    const filteredMoviesIdList = moviesIdList.filter(movieId => moviesList[movieId].genreId === clickedGenreId);
    setClickedGenreMoviesIdList(filteredMoviesIdList);
  }, [clickedGenreId]);

  const classes = useStyles();
  const redirect = useRedirect();


  return (  
    <React.Fragment>
      <Title title="HomeScreen" />
      <div className={classes.root}>
        {genresIdList?.map(genreId => (
              <Button color="primary" id={genreId} onClick={() => setClickedGenreId(genreId)} >{genresList[genreId]?.name}</Button>
          )
        )}
      </div>
      <div>
        <Grid container spacing={3}>
        {(clickedGenreMoviesIdList !== null && clickedGenreMoviesIdList.length !== 0 ? clickedGenreMoviesIdList : moviesIdList)?.map(movieId => (
            <Grid item xs={3}>
              <Paper onClick={() => redirect(`/movies/${movieId}/show`)} className={classes.paper}>{moviesList[movieId]?.name}</Paper>
            </Grid>
            )
        )}
        </Grid>
      </div>
    </React.Fragment>
    );
}


export default Homescreen;