const fields = ['id', 'label', 'type'];

const getTextFieldObject = values => {
    const object = {};
    for (let i = 0; i < fields.length; i++) {
        const field = fields[i];
        object[field] = values[i];
    }
    return object;
};

const getLogInTextFieldInput = () => {
    const f1 = getTextFieldObject(['email', 'Email Address', 'email']);
    const f2 = getTextFieldObject(['password', 'Password', 'password']);
    return [f1, f2];
};

export default getLogInTextFieldInput;
