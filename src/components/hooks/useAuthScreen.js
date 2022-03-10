import { useEffect, useState } from 'react';
import getTextFields from 'components/helpers/getTextFields';

const useAuthScreen = inputs => {
    const [fields, setFields] = useState([]);

    useEffect(() => {
        setFields(getTextFields(inputs));
    }, []);

    return { fields };
};

export default useAuthScreen;
