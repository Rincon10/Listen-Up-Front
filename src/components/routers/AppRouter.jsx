import React from 'react';
import LoginScreen from 'components/login/LoginScreen';
import SignUpScreen from 'components/signup/SignUpScreen';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    /* Link, */
    Redirect,
} from 'react-router-dom';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={LoginScreen} />
                    <Route exact path="/signup" component={SignUpScreen} />
                    <Redirect to="/login" />
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;
