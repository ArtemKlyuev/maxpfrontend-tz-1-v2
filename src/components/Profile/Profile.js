import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../redux/actions/userData';
import UserProfile from '../../components/UserProfile/UserProfile';

class Profile extends React.Component {
    componentDidMount() {
        console.log('kek');

        this.props.onFetchUserData();
    }

    render() {
        let redirect = null;

        console.log('this.props', this.props);

        if (!this.props.isAuth) {
            redirect = <Redirect to="/login" />;
        }

        // const userProfile = null;

        return (
            <React.Fragment>
                {redirect} <UserProfile {...this.props.userData} />
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    onFetchUserData: () => dispatch(actions.fetchUserData())
});

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    userData: state.userData.userData
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);
