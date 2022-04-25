import React, { useContext } from 'react';
import LoginScreen from 'components/login/LoginScreen';
import ProfileComponent from 'components/profile/ProfileScreen';
import { UserContext } from 'context/UserContext';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    /* Link, */
    Redirect,
} from 'react-router-dom';
import SignUpScreen from 'components/signup/SignUpScreen';
import HomeScreen from 'components/home/HomeScreen';

const AppRouter = () => {
    const { user } = useContext(UserContext);

    const { logged } = user;

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
                    {logged && (
                        <Route exact path="/home" component={HomeScreen} />
                    )}
                    {/* <Route exact path="/home" component={HomeScreen} />
                    <Route exact path="/profile" component={ProfileComponent} /> */}
                    {logged && (
                        <Route
                            exact
                            path="/profile"
                            component={ProfileComponent}
                        />
                    )}
                    {!logged && <Redirect to="/login" />}

                    {logged && <Redirect to="/home" />}
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;
