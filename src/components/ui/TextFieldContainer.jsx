import PropTypes from 'prop-types';
import React from 'react';
import TextField from '@mui/material/TextField';

const TextFieldContainer = ({ textFieldItems = [] }) => {
    return (
        <>
            {textFieldItems.map(textField => {
                const { id, label, type } = textField;
                return (
                    <TextField
                        key={id}
                        margin="normal"
                        fullWidth
                        name={id}
                        label={label}
                        type={type}
                        id={id}
                    />
                );
            })}
        </>
    );
};

TextFieldContainer.propTypes = {
    textFieldItems: PropTypes.array,
};

export default TextFieldContainer;
