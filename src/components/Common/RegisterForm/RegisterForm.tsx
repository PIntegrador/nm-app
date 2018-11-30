import * as React from 'react';
import './RegisterForm.scss';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router';
import { authStore } from '../../../store/AuthStore';


interface formRegisterProps {

}

const RegisterForm = observer(withRouter((formRegisterProps) => {

    return (

        <article className="regCont">
            <div>
                <img src="/assets/img/logo-in-white.png" alt="Logo de Vibo" />
                <h1>Te damos la bienvenida</h1>
            </div>
            <form onSubmit={(e:any) => {
                e.preventDefault();
                if(authStore.isLogged){
                    formRegisterProps.history.push("/home");
                } else {
                    
                }
            }
            }>
                <input className="name" type="text" placeholder="Nombre" />
                <input className="name" type="text" placeholder="Apellidos" />
                <input
                    id="mail"
                    type="email"
                    placeholder="tucorreo@gmail.com"
                    onChange={(e:any) => {
                        authStore.credentials.email = e.target.value;
                    }} />
                <input
                    id="pass"
                    type="password"
                    placeholder="••••••••"
                    onChange={(e:any) => {
                        authStore.credentials.password = e.target.value;
                    }} />

                <button type="submit" onClick={() => {
                    authStore.register(authStore.credentials.email, authStore.credentials.password, "Editor");
                   
                }}>Register</button>

                <button id="toLogin" onClick={() => {
                    formRegisterProps.history.push("/");
                }}
                >I already have an account</button>
            </form>
        </article>
    )
}));

export default RegisterForm;