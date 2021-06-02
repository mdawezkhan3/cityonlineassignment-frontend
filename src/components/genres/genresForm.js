import React from 'react';
import { SimpleForm, TextInput, required } from 'react-admin';
import { FormToolbar } from '../customComponents/formToolbar';

export const GenresForm = (props) => {

	const { dataProvider, ...rest } = props;
	const formProps = rest.record ? (rest.record.id ? rest : {save: rest.save}) : {save: rest.save};

	return (
		<SimpleForm {...formProps} keepDirtyOnReinitialize={false} redirect="list"  toolbar={<FormToolbar />}  >
			<TextInput source="name" label="Name" validate={required()} />
      <TextInput source="imageUrl" label="ImageUrl" />
		</SimpleForm>
	);
};