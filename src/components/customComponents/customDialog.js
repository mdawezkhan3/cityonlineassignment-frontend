import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from "@material-ui/core/Dialog";
import IconCancel from "@material-ui/icons/Cancel";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from '@material-ui/core/DialogTitle';
import { GenresForm } from '../genres/genresForm';
import { MoviesForm } from '../movies/moviesForm';

export const CustomDialog = (props) => {
	const renderForm = () => {
		if (props.reference === 'genres') {
			return (
				<GenresForm save={data => {
				    props.propsDataProvider.create(props.reference, {data})
				    .then((res) => {
				    	props.updateState({open: false, item: res.data});
				    });
				}} />
			);
		}
		if (props.reference === 'movies') {
			return (
				<MoviesForm save={data => {
				    props.propsDataProvider.create(props.reference, {data})
				    .then((res) => {
				    	props.updateState({open: false, item: res.data});
				    });
				}} />
			);
		}
	}

    return (
    <Dialog
      maxWidth='lg'
      open={props.open}
      onClose={() =>{}}
      style={{ zIndex: 1 }}
    >
    <DialogTitle >{props.reference}</DialogTitle>
    
     <DialogContent>        
        {renderForm()}
        
      </DialogContent>

      <DialogActions>
        <Button label="ra.action.cancel" onClick={props.onCancel}>
          <IconCancel />
        </Button>
      </DialogActions>
    </Dialog>
    );
}

