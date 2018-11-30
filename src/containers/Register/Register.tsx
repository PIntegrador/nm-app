import * as React from 'react';
import { observer } from 'mobx-react';
import RegisterForm from '../../components/Common/RegisterForm/RegisterForm';
import { authStore } from '../../store/AuthStore';

interface RegisterProps {
    history : any
}

@observer class Register extends React.Component<RegisterProps> {

    constructor(props: any) {
        super(props);
        if(authStore.isLogged){
            props.history.push ("/home");
        }
    }
    render() {
        return <section className="formC">
            <RegisterForm />

        </section>
    }
}

export default Register