import React from 'react';
import { connect } from 'react-redux';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

class Auth extends React.Component {
    state = {
        controls: {
            email: {
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
        }
    };

    componentDidMount() {
        console.log('this.props', this.props);
    }

    render() {
        const formEls = [];
        const { controls } = this.state;

        Object.keys(controls).forEach((el) => {
            // console.log('el', controls[el]);
            const { type, placeholder } = controls[el].elementConfig;
            const { elementType, value, valid, touched } = controls[el];
            const input = (
                <Input
                    type={type}
                    placeholder={placeholder}
                    elementType={elementType}
                    value={value}
                />
            );
        });

        return <form></form>;
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.isAuth,
    error: state.error,
    loading: state.loading
});

export default connect(mapStateToProps)(Auth);
