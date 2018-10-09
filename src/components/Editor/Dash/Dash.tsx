import * as React from 'react';

import './Dash.scss';
import '../../../../public/css/flex.scss'
import { Link } from 'react-router-dom';

const Dash = () => {
    return (
        <section className='dash flex-child'>
            <section className="contDash">

                <section className="col-flex contActions flex-child">

                    <article id="profile" className="col-flex">
                        <div className="flex-child"></div>
                        <h2 className="flex-child">Usuario</h2>
                    </article>
                    <section className="options">
                    <Link to = "/"> 

                        <article id="home" className="row-flex">
                            <div className="flex-child"></div>
                            <h2 className="flex-child">Inicio</h2>
                        </article>
                        </Link>

                        <Link to = "/folders"> 
                        <article id="archives" className="row-flex">
                            <div className="flex-child"></div>
                            
                            <h2 className="flex-child">Gestión de Carpetas</h2>
                        </article>
                        </Link>
                        <article id="proyects" className="row-flex">
                            <div className="flex-child"></div>
                            <h2 className="flex-child">Gestión de Proyectos</h2>
                        </article>

                        <article id="asign" className="row-flex">
                            <div className="flex-child"></div>
                            <h2 className="flex-child">Por Asignar</h2>
                        </article>

                        <article id="trash" className="row-flex">
                            <div className="flex-child"></div>
                            <h2 className="flex-child">Papelera</h2>
                        </article>
                    </section>
                    <article id="config" className="row-flex">
                        <div className="flex-child"></div>
                        <h2 className="flex-child">Configuración</h2>
                    </article>
                </section>

            </section>
        </section>
    )
}
export default Dash;