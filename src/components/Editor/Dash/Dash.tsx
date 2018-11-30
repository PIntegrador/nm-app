import * as React from 'react';

import './Dash.scss';
import '../../../../public/css/flex.scss'
import { Link, withRouter } from 'react-router-dom';
import { authStore } from '../../../store/AuthStore';
import { observer } from 'mobx-react';

interface loginFormProps {

}

const Dash = observer(withRouter((dashProps) => {
    return (
        <section className='dash flex-child'>
            <section className="contDash">

                <section className="col-flex flex-child contActions">

                    <article id="logo" className="col-flex">
                        <div className="flex-child"></div>
                    </article>

                    <section className="options">

                        <Link to="/home">
                            <article id="home" className="row-flex">
                                <img src="/assets/svg/home.svg" className="flex-child icon" />
                                <h2 className="flex-child title">Home</h2>
                            </article>
                        </Link>

                        <Link to="/folders">
                            <article id="archives" className="row-flex">
                                <img src="/assets/svg/file.svg" className="flex-child icon" />
                                <h2 className="flex-child title">Mis Archivos</h2>
                            </article>
                        </Link>

                        <Link to="/projects">

                        <article id="proyects" className="row-flex">
                                <img src="/assets/svg/proyectos.svg" className="flex-child icon" />
                            <h2 className="flex-child title">Mis Proyectos</h2>
                        </article>

                        </Link>

                        <article id="asign" className="row-flex">
                                <img src="/assets/svg/asignar.svg" className="flex-child icon" />
                            <h2 className="flex-child title">Por Asignar</h2>
                        </article>

                        <article id="trash" className="row-flex">
                                <img src="/assets/svg/papelera.svg" className="flex-child icon" />
                            <h2 className="flex-child title">Papelera</h2>
                        </article>

                    </section>

                    <article onClick={() => {
                        authStore.signOut();
                        dashProps.history.push("/");
                    }} id="config" className="row-flex">
                       <img src="/assets/svg/config.svg" className="flex-child icon" />

                        <h2 className="flex-child title">Configuración</h2>
                    </article>

                </section>

            </section>
        </section>
    )
}));

export default Dash;