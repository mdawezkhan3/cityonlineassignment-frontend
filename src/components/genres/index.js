import React from 'react';
import { List, Datagrid, TextField, Create, EditButton, Edit} from 'react-admin';
import { GenresForm } from './genresForm';


export const GenresList = props => {
	return (
    <List {...props} title="Genres" bulkActionButtons={false} exporter={false}>
        <Datagrid rowClick="edit">
					<TextField source="name" />
          <TextField source="imageUrl" />
					<EditButton label="Edit" />
        </Datagrid>
    </List>
	);
}

export const GenresCreate = props => (
	<Create {...props}>
		<GenresForm />
	</Create>
);

export const GenresEdit = props => (
	<Edit {...props}>
		<GenresForm />
	</Edit>
);
