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
        <h2  className="flex-child">Nombre del Usuario</h2>
        <p  className="flex-child">Ver Perfil</p>
    </article>

    
    <article id="home" className="row-flex">
        <div className="flex-child"></div>
        <h2  className="flex-child">Inicio</h2>
    </article>

    <article id="archives" className="row-flex">
        <div className="flex-child"></div>
        <h2  className="flex-child">Gestión de Archivos</h2>
    </article>

    <article id="projects" className="row-flex">
        <div className="flex-child"></div>
        <h2  className="flex-child">Gestión de proyectos</h2>
    </article>

    <article id="asign" className="row-flex">
        <div className="flex-child"></div>
        <h2  className="flex-child">Por Asignar</h2>
    </article>

    <article id="trash" className="row-flex">
        <div className="flex-child"></div>
        <h2  className="flex-child">Papelera</h2>
    </article>

    <article id="config" className="row-flex">
        <div className="flex-child"></div>
        <h2  className="flex-child">Configuración</h2>
    </article>
    </section>

</section>
        </section>
    )
}
export default Dash;