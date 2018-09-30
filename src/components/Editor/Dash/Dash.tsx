import * as React from 'react';

import './Dash.scss';
import '../../../../public/css/flex.scss'

const Dash = () => {
    return (
        <section className='dash flex-child'>
            <section className="contDash">

                <section className="contActions flex-child col-flex">

                    <article id="profile" className="col-flex">
                        <div className="flex-child"></div>
                        <h2 className="flex-child">USUARIO</h2>
                    </article>

                    <section className="options">
                        <article id="home" className="row-flex">
                            <div className="flex-child"></div>
                            <h2 className="flex-child">INICIO</h2>
                        </article>

                        <article id="archives" className="row-flex">
                            <div className="flex-child"></div>
                            <h2 className="flex-child">GESTIÓN DE ARCHIVOS</h2>
                        </article>

                        <article id="proyects" className="row-flex">
                            <div className="flex-child"></div>
                            <h2 className="flex-child">GESTIÓN DE PROYECTOS</h2>
                        </article>

                        <article id="asign" className="row-flex">
                            <div className="flex-child"></div>
                            <h2 className="flex-child">POR ASIGNAR</h2>
                        </article>

                        <article id="trash" className="row-flex">
                            <div className="flex-child"></div>
                            <h2 className="flex-child">PAPELERA</h2>
                        </article>
                    </section>
                    <article id="config" className="row-flex">
                        <div className="flex-child"></div>
                        <h2 className="flex-child">CONFIGURACIÓN</h2>
                    </article>
                </section>

            </section>
        </section>
    )
}
export default Dash;