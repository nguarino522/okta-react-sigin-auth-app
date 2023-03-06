import React, { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { Link, useHistory } from 'react-router-dom';

const Protected = () => {
    <h3 id="protected">Protected</h3>
    const { authState, oktaAuth } = useOktaAuth();
    const [userInfo, setUserInfo] = useState(null);
    const history = useHistory();

    const accessTokenStyling = {
        fontSize: "20px",
        wordWrap: "break-word",
        maxWidth: "1200px",
        textAlign: "center"
    };

    const handleLogin = async () => history.push('/login');

    const handleLogout = async () => oktaAuth.signOut();

    useEffect(() => {
        if (!authState || !authState.isAuthenticated) {
            // When user isn't authenticated, forget any user info
            setUserInfo(null);
        } else {
            oktaAuth.getUser().then((info) => {
                setUserInfo(info);
            }).catch((err) => {
                console.error(err);
            });
        }
    }, [authState, oktaAuth]); // Update if authState changes

    if (!userInfo) {
        return (
            <div>
                <p>Fetching user info ...</p>
            </div>
        );
    }

    return (
        <div>
            <div>
                <Link to="/">Home</Link> | &nbsp;
                <Link id="protected" to="/protected">Protected</Link> | &nbsp;
                {
                    authState.isAuthenticated
                        ? <button id="logout-button" type="button" onClick={handleLogout}>Logout</button>
                        : <button id="login-button" type="button" onClick={handleLogin}>Login</button>
                }
                <p id="welcome">
                    Welcome,&nbsp;{userInfo.name}!
                </p>
                <p>You have successfully authenticated against your Okta org!</p>
                <h5>Access token:</h5>
                <p style={accessTokenStyling}>{authState.accessToken.accessToken}</p>
            </div>
        </div >
    );
};

export default Protected;
