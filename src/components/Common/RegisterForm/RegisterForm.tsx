import * as React from 'react';
import './RegisterForm.scss';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router';
import { authStore } from '../../../store/AuthStore';


interface formRegisterProps {

}

const RegisterForm = observer(withRouter((formRegisterProps) => {

    return (

        <article>
            <h1>Register Form</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
            }
            }>
                <span>Name</span>
                <input className="name" type="text" placeholder="Nombre" />
                <span>Last Name</span>
                <input className="name" type="text" placeholder="Apellidos" />
                <span>Email</span>
                <input id="mail" type="email" placeholder="tucorreo@gmail.com" onChange={e => { authStore.handleInput(e.target.value, "email") }} />
                <span>Password</span>
                <input id="pass" type="password" placeholder="••••••••" onChange={e => { authStore.handleInput(e.target.value, "pass") }} />

                <button type="submit" onClick={() => {
                    authStore.register(authStore.email, authStore.password);
                    if (authStore.isLogged)
                        formRegisterProps.history.push("/home");
                }}>Register</button>

                <button id="toLogin" onClick={() => {
                    formRegisterProps.history.push("/");
                }}
                >I already have an account</button>

                <button onClick={() => {
                    authStore.signOut();
                }}>Log Out</button>

            </form>
        </article>
    )
}));

export default RegisterForm;