import React, { Fragment, useState } from 'react';
import { useForm } from 'react-final-form';
import { AutocompleteInput, ReferenceInput } from 'react-admin';
import { CustomDialog } from "./customDialog";


export const AddableReferenceInput = (props) => {
	const form = useForm();
	const [open, setOpen] = useState(false);
	return (
		<Fragment>
			<ReferenceInput {...props} source={props.source}  reference={props.reference}
				filter={{'autocomplete': true}}
				 onChange={(selectedId) => props.onChange(selectedId, setOpen)} validate={props.validate}>
				<AutocompleteInput suggestionLimit={10} source="name" />
			</ReferenceInput>
			<CustomDialog source="dialog" propsDataProvider={props.dataProvider}
				reference={props.reference}
				updateState={(newState) => {
					setOpen(false);
					form.change(props.source, newState.item.id);
					form.blur(props.source)
				}} open={open} onCancel={() => setOpen(false)} />
		</Fragment>
	);
}
