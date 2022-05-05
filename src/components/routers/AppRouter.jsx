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
import ForumScreen from 'components/forum/ForumScreen';

const AppRouter = () => {
    const { user } = useContext(UserContext);

    const { logged } = user;

    return (
        <Router>
            <div>
                <Switch>
                    {true && (
                        <Route exact path="/login" component={LoginScreen} />
                    )}
                    {true && (
                        <Route exact path="/singup" component={SignUpScreen} />
                    )}
                    {true && (
                        <Route exact path="/home" component={HomeScreen} />
                    )}

                    {true && (
                        <Route
                            exact
                            path="/profile"
                            component={ProfileComponent}
                        />
                    )}
                    <Route
                        path="/forum/:idForum"
                        render={({ match }) => {
                            const { idForum } = match.params;
                            return <ForumScreen idForum={idForum} />;
                        }}
                    />

                    {true && <Redirect to="/login" />}

                    {true && <Redirect to="/home" />}
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;
