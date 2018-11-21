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
                <img src="/assets/img/logo-in-white.png" alt="Logo de Vibo"/>
                <h1>Te damos la bienvenida</h1>
            </div>
            <form onSubmit={(event) => {
                event.preventDefault();
                formLoginProps.history.push("/home")
            }
            }>
                <input className="mail" type="email" placeholder="Correo" onChange={e => {authStore.handleInput(e.target.value, "email")} }/>
                <input className="pass" type="password" placeholder="Escribe tu contraseña" onChange={e => {authStore.handleInput(e.target.value, "pass")} } />
                <button id="toRegister" onClick={() => {
                        formLoginProps.history.push("/register");
                    }}
                >No tengo una cuenta, deseo registrarme</button>
                <button id="toLogin" type="submit" onClick={() => {
                    authStore.login(authStore.email, authStore.password);
                    }}
                >Ingresar</button>

                <p>
                Al continuar, aceptas las <a>Condiciones del servicio</a> y la <a>Política de privacidad.</a> 
                </p>
            </form>
        </article>
    )
}));

export default LoginForm;