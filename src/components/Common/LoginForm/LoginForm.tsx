import * as React from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router';

import './LoginForm.scss';
import { authStore } from '../../../store/AuthStore';
import { firebaseStore } from '../../../store/FsActionStore';

interface loginFormProps {

}

const LoginForm = observer(withRouter((formLoginProps) => {

    return (
        <article className="logCont">
            <div>
                <img src="/assets/img/logo-in-white.png" alt="Logo de Vibo" />
                <h1>Te damos la bienvenida</h1>
            </div>
            <form onSubmit={(event:any) => {
                event.preventDefault();
                authStore.login(authStore.credentials.email, authStore.credentials.password);
                if(authStore.isLogged){
                    console.log(authStore.isLogged, 'islogged');
                    formLoginProps.history.push("/home");
                    firebaseStore.readInfoUser();
                } else {
                    
                }
            }
            }>
                <input
                    className="mail"
                    type="email"
                    placeholder="Correo"
                    onChange={(e:any) => {
                        authStore.credentials.email = e.target.value;
                    }} />
                <input
                    className="pass"
                    type="password"
                    placeholder="Escribe tu contraseña"
                    onChange={(e:any) => {
                        authStore.credentials.password = e.target.value;
                    }} />
                
                <button
                    id="toLogin"
                    type="submit"
                >Ingresar</button><button
                    id="toRegister"
                    onClick={() => {
                        formLoginProps.history.push("/register");
                    }}
                >No tengo una cuenta, deseo registrarme</button>
                <p>Al continuar, aceptas las <a>Condiciones del servicio</a> y la <a>Política de privacidad.</a></p>
            </form>
        </article>
    )
}));

export default LoginForm;