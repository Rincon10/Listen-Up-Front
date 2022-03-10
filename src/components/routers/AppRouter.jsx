import React, { useContext } from 'react';
import LoginScreen from 'components/login/LoginScreen';
import { UserContext } from 'context/UserContext';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    /* Link, */
    Redirect,
} from 'react-router-dom';
import Home from 'components/home/Home';
import SignUpScreen from 'components/signup/SignUpScreen';

const AppRouter = () => {
    const { logged } = useContext(UserContext);

    return (
        <Router>
            <div>
                <Switch>
                    {!logged && (
                        <Route exact path="/login" component={LoginScreen} />
                    )}
                    {!logged && (
                        <Route exact path="/singup" component={SignUpScreen} />
                    )}
                    {logged && <Route exact path="/home" component={Home} />}

                    {!logged && <Redirect to="/login" />}
                    {logged && <Redirect to="/home" />}
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;
