import validateInfoLogin from 'components/helpers/validateInfoLogin';
import { userApiclient } from 'components/services/userApiClient';
import { types } from 'components/types/types';
import { UserContext } from 'context/UserContext';
import _ from 'lodash';
import { useContext, useState } from 'react';
import swal from 'sweetalert';

//validateFunction must be a customHook
const useForm = ({ validateFunction = validateInfoLogin }) => {
    const [data, setData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [token, setToken] = useState(null);
    const { dispatch } = useContext(UserContext);

    const login = () => {
        userApiclient
            .getToken(data)
            .then(token => {
                data.password = '';
                setToken(token);
                updateUser();
                window.location.href = '/home';
            })
            .catch(() => {
                swal({
                    title: 'Login',
                    icon: 'error',
                    text: 'Oops something went wrong. please try again',
                    timer: '5000',
                });
            });
    };

    const updateUser = () => {
        const { email } = data;
        userApiclient.getUserByEmail(email).then(user => {
            setData(user);
            user['token'] = token;
        });
        const action = {
            type: types.login,
            payload: data,
        };
        dispatch(action);
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = async event => {
        event.preventDefault();
        const currentErrors = await validateFunction(data);
        setErrors(currentErrors);
        if (_.isEqual({}, currentErrors)) {
            login();
        }
    };

    return { handleChange, handleSubmit, errors };
};

export default useForm;
