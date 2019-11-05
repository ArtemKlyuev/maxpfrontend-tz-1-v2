import React, { useEffect } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './redux/actions/auth';
import Layout from './hoc/Layout/Layout';
import Root from './components/Root/Root';
import Auth from './containers/Auth/Auth';
import Profile from './components/Profile/Profile';
import News from './containers/News/News';
import NewsItemPage from './components/News/NewsItemPage/NewsItemPage';

const App = (props) => {
    useEffect(() => props.onTryAutoSignin(), []);

    return (
        <Layout>
            <Switch>
                <Route path="/login" component={Auth} />
                <Route path="/profile" component={Profile} />
                <Route path="/news" exact component={News} />
                <Route path="/news/:id" component={NewsItemPage} />
                <Route path="/" exact component={Root} />
                <Redirect to="/" />
            </Switch>
        </Layout>
    );
};

// const mapStateToProps = state => ({isAuth:state.isAuth});

const mapDispatchToProps = (dispatch) => {
    return {
        onTryAutoSignin: () => dispatch(actions.checkAuthState())
    };
};

export default connect(
    null,
    mapDispatchToProps
)(App);
