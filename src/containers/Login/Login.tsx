import * as React from 'react';

import { observer } from 'mobx-react';
import { withRouter } from 'react-router';
import LoginForm from '../../components/Common/LoginForm/LoginForm';


interface LoginProps {}

@observer export class Login extends React.Component<LoginProps> {

    render() {
        return (
            <LoginForm/>
        )
    }
}