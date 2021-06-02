import React from 'react';
import { Toolbar, SaveButton } from 'react-admin';

export const FormToolbar = props => (
    <Toolbar {...props} >
        <SaveButton />
    </Toolbar>
);