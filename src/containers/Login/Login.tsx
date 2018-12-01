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

        authStore.login("san.or.gue@gmail.com", "santy0630");

        
    }

    render() {
        if(authStore.isLogged){
            this.props.history.push ("/home");
        }
        return (
            <section className="formC"> 
                <LoginForm/>

            </section>
        )
    }
}