import * as React from 'react';

import './Dash.scss';
import '../../../../public/css/flex.scss'
import { Link, withRouter } from 'react-router-dom';
import { authStore } from '../../../store/AuthStore';
import { observer } from 'mobx-react';
import { homeEditorStore } from '../../../store/HomeEditorStore';
import { observable } from 'mobx';

interface dashProps {
    state: string;
}

const Dash = observer(withRouter((dashProps) => {
    let selected:string = '';

    if (homeEditorStore.sideMenuState == 'open') {
        return (
            <section className='dash open flex-child'>
            <section className="contDash">

                <section className="col-flex flex-child contActions">

                    <article id="logo" className="col-flex">
                        <div className="flex-child">
                        <img src="/assets/svg/logo-negativo.svg" />
                        </div>
                    </article>

                    <section className="options">

                        <Link to="/home">
                            <article id="home" className="menuItem row-flex selected"  onClick={(e) => {
                                 $('.menuItem').removeClass('selected');
                                 $('#home').addClass('selected');
                            }}>
                                <img src="/assets/svg/home.svg" className="flex-child icon open" />
                                <h2 className="flex-child title">Home</h2>
                            </article>
                        </Link>

                        <Link to="/folders">
                            <article id="archives" className="menuItem row-flex"  onClick={(e) => {
                                $('.menuItem').removeClass('selected');
                                $('#archives').addClass('selected');
                            }}>
                                <img src="/assets/svg/file.svg" className="flex-child icon open" />
                                <h2 className="flex-child title">Mis Archivos</h2>
                            </article>
                        </Link>

                        <Link to="/projects">

                        <article id="proyects" className="menuItem row-flex"  onClick={(e) => {
                            const el: HTMLElement = document.getElementById('proyects');
                            const el2: HTMLElement = document.getElementsByClassName('menuItem');

                                 $('.menuItem').removeClass('selected');
                                 $('#proyects').addClass('selected');
                            }}>
                                <img src="/assets/svg/proyectos.svg" className="flex-child icon open" />
                            <h2 className="flex-child title">Mis Proyectos</h2>
                        </article>

                        </Link>

                        <article id="asign" className="menuItem row-flex"  onClick={(e) => {
                                 $('.menuItem').removeClass('selected');
                                 $('#asign').addClass('selected');
                            }}>
                                <img src="/assets/svg/asignar.svg" className="flex-child icon open" />
                            <h2 className="flex-child title">Por Asignar</h2>
                        </article>

                        <article id="trash" className="menuItem row-flex"  onClick={(e) => {
                                 $('.menuItem').removeClass('selected');
                                 $('#trash').addClass('selected');
                            }}>
                                <img src="/assets/svg/papelera.svg" className="flex-child icon open" />
                            <h2 className="flex-child title">Papelera</h2>
                        </article>

                    </section>

                    <article onClick={() => {
                        authStore.signOut();
                        dashProps.history.push("/");
                        $('.menuItem').removeClass('selected');
                        $('#config').addClass('selected');
                    }} id="config" className="menuItem row-flex" 
                        
                   >
                       <img src="/assets/svg/config.svg" className="flex-child icon open" />

                        <h2 className="flex-child title">Configuración</h2>
                    </article>

                </section>

            </section>
        </section>
        )
    } else {
        return (
            <section className='dash closed flex-child'>
            <section className="contDash">

                <section className="col-flex flex-child contActions">

                    <article id="logoClosed" className="col-flex">
                        <div className="flex-child">
                        <img src="/assets/svg/menuLogoClosed.svg" />
                        </div>
                    </article>

                    <section className="options">

                        <Link to="/home">
                            <article id="home" className="menuItem selected row-flex">
                                <img src="/assets/svg/home.svg" className="flex-child icon closed" />
                            </article>
                        </Link>

                        <Link to="/folders">
                            <article id="archives" className="menuItem row-flex">
                                <img src="/assets/svg/file.svg" className="flex-child icon closed" />
                            </article>
                        </Link>

                        <Link to="/projects">

                        <article id="proyects" className="menuItem row-flex">
                                <img src="/assets/svg/proyectos.svg" className="flex-child icon closed" />
                        </article>

                        </Link>

                        <article id="asign" className="menuItem row-flex">
                                <img src="/assets/svg/asignar.svg" className="flex-child icon closed" />
                        </article>

                        <article id="trash" className="menuItem row-flex">
                                <img src="/assets/svg/papelera.svg" className="flex-child icon closed" />
                        </article>

                    </section>

                    <article onClick={() => {
                        authStore.signOut();
                        dashProps.history.push("/");
                    }} id="config" className="menuItem row-flex">
                       <img src="/assets/svg/config.svg" className="flex-child icon closed" />

                    </article>

                </section>

            </section>
        </section>
        )
    }
   
}));

export default Dash;