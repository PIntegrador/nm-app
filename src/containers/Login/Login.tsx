import * as React from 'react';

import { observer } from 'mobx-react';
import { withRouter } from 'react-router';
import LoginForm from '../../components/Common/LoginForm/LoginForm';
import '../Login/Login.scss';
import { authStore } from '../../store/AuthStore';

interface LoginProps {
    history : any
}

@observer export class Login extends React.Component<LoginProps> {

    constructor(props: any) {
        super(props);
        if(authStore.isLogged){
            props.history.push ("/home");
        }
    }

    render() {
        return (
            <section className="formC"> 
                <LoginForm/>

            </section>
        )
    }
}