import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Root from './components/Root/Root';
import Auth from './containers/Auth/Auth';

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/login" exact component={Auth} />
                <Route path="/" exact component={Root} />
                {/* <Redirect to="/" /> */}
            </Switch>
        </Layout>
    );
}

export default App;
