import * as React from 'react';
import './Landing.scss';
import { Link } from 'react-router-dom';

export class Landing extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (

            <div className="contLanding">

                <section className="contTop">
                    <div className="cont">
                        <div className="buttonsTop">
                            <img src="/assets/img/landing/logo.svg" alt="" className="logo" />

                            <div className="cont">
                                <Link className="login hvr-grow" to='/Login'>
                                <a className="login hvr-grow" href="/Login">Iniciar Sesión</a>
                                </Link>
                                <Link  className="register hvr-grow" to='/Login'>>
                                <a className="register hvr-grow" href="/register">Inicia una prueba gratis</a>
                                </Link>
                            </div>
                        </div>

                        <div className="contMain">
                            <div className="left">
                                <h2>Busca. Organiza. Comparte</h2>
                                <h5>Nunca fue tan fácil buscar y recopilar bases de datos para proyectos de investigación al tiempo que se trabaja en equipo.</h5>
                                <div className="cont">

                                    <input type="text" placeholder="nombre@correo.com" />
                                    <a className="register hvr-grow" href="/register">Inicia una prueba gratis</a>

                                </div>
                            </div>

                            <div className="right">
                                <img  src="/assets/img/landing/mockupcortado.png" alt="" ></img>
                            </div>
                        </div>

                        <div className="empty"></div>
                    </div>
                </section>

                <section className="question">
                    <h4>¿Por qué Vibo es la mejor opción?</h4>
                    <div></div>
                </section>

                <section className="organiza">

                    <div className="fondo">
                        <div className="colorUno"></div>
                        <div className="colorDos"></div>
                    </div>

                    <img src="/assets/img/landing/Pantalla-Home.png" alt="" />
                    <h2>Organiza</h2>
                    <p>Manten siempre el control de tus recursos (proyectos, carpetas, archivos). Vibo te ofrece un fácil sistema de organización y busqueda.</p>
                </section>

                <section className="comparte">

                    <div className="cont">
                        <img src="/assets/img/landing/Tarea.png" alt="" />

                        <div className="cont">
                            <div className="top">
                                <h3>Comparte</h3>
                                <p>Agrega a colaboradores a los diferentes proyectos que requieras, y puedes incluso asignar tareas especificas a encargados.</p>
                            </div>
                            <div className="bottom">
                                <h3>Tareas de forma <strong>flexible</strong> y por <strong>fases</strong></h3>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="imagenTask">
                    <img src="/assets/img/landing/Task.png" alt="" />
                </section>

                <section className="opinion">
                    <div className="contCol">
                        <div className="contRow">
                            <img src="/assets/img/landing/Persona.png" />
                            <div className="contCol">
                                <img src="/assets/img/landing/comilla.svg" alt="" />
                                <h2>Vibo nos ayuda a mantener todo al día y así ejecutar los proyectos sin problemas.
                                    Con Vibo, nuestro equipo sabe lo que está sucediendo y qué es necesario hacer.</h2>
                                <h3>Mariana Escobar</h3>
                                <h4>Directora de Investigación UX</h4>
                            </div>
                        </div>
                        <div className="others">
                            <img src="/assets/img/landing/persona1.png" alt=""/>
                            <img src="/assets/img/landing/persona2.png" alt=""/>
                            <img src="/assets/img/landing/persona3.png" alt=""/>
                            <img src="/assets/img/landing/Toogle.png" alt=""/>
                        </div>
                    </div>
                </section>
                <section className='helpTeam'>
                    <h4>Ayuda a tu equipo a realizar un mejor trabajo</h4>
                    <p>Registrate para comenzar tu prueba gratis y descubrir por qué Vibo es la plataforma más empleada por equipos de investigación alrededor del globo.</p>
                    <div className="cont">

                                    <input type="text" placeholder="nombre@correo.com" />
                                    <a className="register hvr-grow" href="/register">Inicia una prueba gratis</a>

                                </div>
                </section>
                <footer className='col-flex'>
                    <div className='row-flex flex-child subscriberow'>
                    <p>Regístrate y comienza a ser parte de Vibo</p>

                    <div className='input'>
                        <input type="text" placeholder="nombre@correo.com" />
                    </div>
                    <a className="subscribe hvr-grow" href="">Registrarse</a>
                    </div>
                    <div className="logofooter">
                        <img src="/assets/img/landing/whitelogo.svg" alt=""></img>
                    </div>
                    <div className='socialnetworks'>
                        <img src="/assets/img/landing/ig.svg" alt=""></img>
                        <img src="/assets/img/landing/twitter.svg" alt=""></img>
                        <img src="/assets/img/landing/facebook.svg" alt=""></img>
                    </div>
                </footer>
            </div >
        )
    }

}