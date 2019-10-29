import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../redux/actions/userData';

class Profile extends React.Component {
    componentDidMount() {
        console.log('kek');

        this.props.onFetchUserData();
    }

    render() {
        let redirect = null;

        if (!this.props.isAuth) {
            redirect = <Redirect to="/login" />;
        }

        const userProfile = null;

        return <React.Fragment>{redirect} test</React.Fragment>;
    }
}

const mapDispatchToProps = (dispatch) => ({
    onFetchUserData: () => dispatch(actions.fetchUserData())
});

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);
