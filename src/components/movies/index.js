import React from 'react';
import { List, Datagrid, Create, EditButton, Edit, TextField, Show, SimpleShowLayout} from 'react-admin';
import { MoviesForm } from './moviesForm';


export const MoviesList = props => {
	return (
    <List {...props} title="Movies" bulkActionButtons={false} exporter={false}>
        <Datagrid rowClick="show">
					<TextField source="name" />
          <TextField source="releaseYear" />
          <TextField source="genreName" />
          <TextField source="rating" />
          <TextField source="imageUrl" />
					<EditButton label="Edit" />
        </Datagrid>
    </List>
	);
}

export const MovieShow = props => {
	
	return (
	 <Show title="MovieInfo Screen" {...props}>
			 <SimpleShowLayout>
					<TextField source="name" />
					<TextField source="releaseYear" />
					<TextField source="genreName"/>
					<TextField source="genreImageUrl" />
					<TextField source="rating" />
					<TextField source="imageUrl"/>       
			</SimpleShowLayout>
	 </Show>
	);
}

export const MoviesCreate = props => (
	<Create {...props}>
		<MoviesForm />
	</Create>
);

export const MoviesEdit = props => (
	<Edit {...props}>
		<MoviesForm />
	</Edit>
);
