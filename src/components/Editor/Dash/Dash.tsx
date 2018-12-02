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
    selected: string;
}

@observer class Dash extends React.Component<dashProps> {

    constructor(props: any){
        super(props)

    }

    componentDidUpdate(prevProps:any) {
        // Typical usage (don't forget to compare props):
        if (this.props.selected !== prevProps.selected) {
        }
        $('#'+ homeEditorStore.selectedMenuItem).addClass('selected');

      }

    toggleClass() {

    }


    render() {

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
                                <article id="home" className="menuItem row-flex"  onClick={(e) => {
                                    homeEditorStore.selectedMenuItem = 'home'
                                    $('.menuItem').removeClass('selected');
                                    $('#'+ homeEditorStore.selectedMenuItem).addClass('selected');
                                    console.log(e, this.props.selected)
                                }}>
                                    <img src="/assets/svg/home.svg" className="flex-child icon open" />
                                    <h2 className="flex-child title">Home</h2>
                                </article>
                            </Link>
    
                            <Link to="/folders">
                                <article id="archives" className="menuItem row-flex"  onClick={(e) => {
                                    homeEditorStore.selectedMenuItem = 'archives'
                                    $('.menuItem').removeClass('selected');
                                    $('#'+ homeEditorStore.selectedMenuItem).addClass('selected');
                                    console.log(e, this.props.selected)
                                }}>
                                    <img src="/assets/svg/file.svg" className="flex-child icon open" />
                                    <h2 className="flex-child title">Mis Archivos</h2>
                                </article>
                            </Link>
    
                            <Link to="/projects" onClick={
                                () => {
                                    homeEditorStore.selectedMenuItem = 'proyects'
                                }
                            }>
    
                            <article id="proyects" className="menuItem row-flex"  onClick={(e) => {
                                    $('.menuItem').removeClass('selected');
                                    $('#'+ homeEditorStore.selectedMenuItem).addClass('selected');
                                }}>
                                    <img src="/assets/svg/proyectos.svg" className="flex-child icon open" />
                                <h2 className="flex-child title">Mis Proyectos</h2>
                            </article>
    
                            </Link>
    
                            <article id="asign" className="menuItem row-flex"  onClick={(e) => {
                                    homeEditorStore.selectedMenuItem = 'asign'
                                    $('.menuItem').removeClass('selected');
                                    $('#'+ homeEditorStore.selectedMenuItem).addClass('selected');
                                }}>
                                    <img src="/assets/svg/asignar.svg" className="flex-child icon open" />
                                <h2 className="flex-child title">Por Asignar</h2>
                            </article>
    
                            <article id="trash" className="menuItem row-flex"  onClick={(e) => {
                                    homeEditorStore.selectedMenuItem = 'trash'
                                    $('.menuItem').removeClass('selected');
                                    $('#'+homeEditorStore.selectedMenuItem).addClass('selected');
                                }}>
                                    <img src="/assets/svg/papelera.svg" className="flex-child icon open" />
                                <h2 className="flex-child title">Papelera</h2>
                            </article>
    
                        </section>
    
                        <article onClick={() => {
                            homeEditorStore.selectedMenuItem = 'config'
                            authStore.signOut();
                            $('.menuItem').removeClass('selected');
                            $('#'+ homeEditorStore.selectedMenuItem).addClass('selected');
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
                        }} id="config" className="menuItem row-flex">
                           <img src="/assets/svg/config.svg" className="flex-child icon closed" />
    
                        </article>
    
                    </section>
    
                </section>
            </section>
            )
        }
    }
  
   
};

export default Dash;