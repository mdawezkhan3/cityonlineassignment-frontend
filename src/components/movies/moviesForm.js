import React from 'react';
import { SimpleForm, TextInput, NumberInput, required, useDataProvider } from 'react-admin';
import { FormToolbar } from '../customComponents/formToolbar';
import { AddableReferenceInput } from '../customComponents/addableReferenceInput';

export const MoviesForm = (props) => {

  const handleChange = (selectedId, setOpen) => {
    if (selectedId === "-1") {
      setOpen(true);
    }
  };
  const dataProvider = useDataProvider();
	const { ...rest } = props;
	const formProps = rest.record ? (rest.record.id ? rest : {save: rest.save}) : {save: rest.save};

	return (
		<SimpleForm {...formProps} keepDirtyOnReinitialize={false} redirect="list"  toolbar={<FormToolbar />}  >
			<TextInput source="name" label="Name" validate={required()}/>
      <TextInput source="releaseYear" label="Release Year" />
      <AddableReferenceInput
        dataProvider={dataProvider}
        source="genreId"
        reference="genres"
        onChange={handleChange}
        validate={required()}
        label="Genre"
      />
      <NumberInput source="rating" label="Rating" validate={required()} />
      <TextInput source="imageUrl" label="ImageUrl" />
		</SimpleForm>
	);
};