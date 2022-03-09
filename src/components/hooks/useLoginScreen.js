import { useEffect, useState } from 'react';
import getLogInTextFieldInput from 'components/helpers/getLogInTextFieldInput';

const useLoginScreen = () => {
    const [fields, setFields] = useState([]);

    useEffect(() => {
        setFields(getLogInTextFieldInput());
    }, []);

    return { fields };
};

export default useLoginScreen;
