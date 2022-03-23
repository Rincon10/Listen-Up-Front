import React from 'react';
import { useContext } from 'react';
import { UserContext } from 'context/UserContext';
import { types } from 'components/types/types';

const HomeScreen = () => {
    const { dispatch } = useContext(UserContext);

    const handleClick = () => {
        const action = {
            type: types.logout,
        };
        dispatch(action);
    };

    return (
        <div>
            <h1>HomeScreen</h1>
            <button className="btn" onClick={handleClick}>
                logout
            </button>
        </div>
    );
};

export default HomeScreen;
