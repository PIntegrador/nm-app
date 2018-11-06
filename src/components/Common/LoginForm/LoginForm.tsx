import * as React from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router';

import './LoginForm.scss';
import { authStore } from '../../../store/AuthStore';

interface loginFormProps {

}

const LoginForm = observer(withRouter((formLoginProps) => {
    return (
        <article className="logCont">
            <div>
                <h1>Log In Form</h1>
            </div>
            <form onSubmit={(event) => {
                event.preventDefault();
                formLoginProps.history.push("/home")
            }
            }>
                <span>E-Mail</span>
                <input className="mail" type="email" placeholder="example@gmail.com" onChange={e => {authStore.handleInput(e.target.value, "email")} }/>
                <span>Password</span>
                <input className="pass" type="password" placeholder="••••••••" onChange={e => {authStore.handleInput(e.target.value, "pass")} } />
                <button id="toRegister" onClick={() => {
                        formLoginProps.history.push("/register");
                    }}
                >I do not have an account, I wish to register</button>
                <button id="toLogin" type="submit" onClick={() => {
                    authStore.login(authStore.email, authStore.password);
                    }}
                >Log In</button>
            </form>
        </article>
    )
}));

export default LoginForm;