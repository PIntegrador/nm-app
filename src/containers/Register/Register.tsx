import * as React from 'react';
import { observer } from 'mobx-react';
import RegisterForm from '../../components/Common/RegisterForm/RegisterForm';


@observer class Register extends React.Component {
    render() {
        return <section className="formC">
            <RegisterForm />

        </section>
    }
}

export default Register