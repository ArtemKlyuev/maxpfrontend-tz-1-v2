import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { updateObject, checkValidity } from '../../shared/utility';
import * as actions from '../../redux/actions/auth';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import classes from './Auth.module.css';

const Auth = (props) => {
    const [authForm, setAuthForm] = useState({
        username: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Username'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        password: {
            elementType: 'input',
            elementConfig: {
                type: 'password',
                placeholder: 'Password'
            },
            value: '',
            validation: {
                required: true,
                minLength: 5
            },
            valid: false,
            touched: false
        }
    });

    const [admin, setAdmin] = useState({
        username: 'Admin',
        password: 12345
    });

    useEffect(() => {props.onSetAuthRedirectPath('/profile')}, []);

    const inputChangedHandler = (e, controlName) => {
        const updatedControls = updateObject(authForm, {
            [controlName]: updateObject(authForm[controlName], {
                value: e.currentTarget.value,
                valid: checkValidity(
                    controlName,
                    authForm[controlName].validation
                ),
                touched: true
            })
        });

        setAuthForm(updatedControls);
    };

    const sumbitHandler = (e) => {
        e.preventDefault();

        const { username, password } = authForm;

        props.onAuth(username.value, Number(password.value));
    };

    const formEls = [];

    Object.keys(authForm).forEach((el) => {
        const { type, placeholder } = authForm[el].elementConfig;
        const { required } = authForm[el].validation;
        const { elementType, value, valid, touched } = authForm[el];

        const input = (
            <Input
                key={placeholder}
                type={type}
                placeholder={placeholder}
                elementType={elementType}
                value={value}
                touched={touched}
                invalid={valid}
                required={required}
                changed={(e) => inputChangedHandler(e, el)}
            />
        );

        formEls.push(input);
    });

    let redirect = null;

    if (props.isAuth) {
        redirect = <Redirect to={props.authRedirectPath} />;
    }

    const errorMsg = (
        <p style={{ color: 'red' }}>
            Имя пользователя или пароль введены не верно
        </p>
    );

    return (
        <React.Fragment>
            {redirect}
            <form className={classes.Form} onSubmit={(e) => sumbitHandler(e)}>
                {formEls}
                {props.error && errorMsg}
                <Button>Войти</Button>
            </form>
        </React.Fragment>
    );
};

const mapDispatchToProps = (dispatch) => ({
    onAuth: (username, password) => dispatch(actions.auth(username, password)),
    onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
});

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    error: state.auth.error,
    loading: state.auth.loading,
    authRedirectPath: state.auth.authRedirectPath
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
