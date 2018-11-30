
import * as React from 'react';
import './ProjectMenu.scss';
import { Link } from 'react-router-dom';
import { projectDash } from '../../../../store/ProjectDashBoardStore';
import { getObserverTree } from 'mobx';
import { observer } from 'mobx-react';


@observer export class ProjectMenu extends React.Component {
    constructor(props:any){
        super(props);


    }


    render() {

        return (
            <section className="projectMenuComponent">
    
                <div className="titleContainer">
                    <div className="ico">
                        <svg width="100%" height="100%" viewBox="0 0 55.2 52.5">
                            <g>
                                <path className="modulesAsTitles" d="M51.6,28.2h-8.1c-2,0-3.5,1.5-3.5,3.4v17.1c0,1.9,1.5,3.4,3.5,3.4h8.1c2,0,3.5-1.5,3.5-3.4V31.7
                                    C55.1,29.7,53.6,28.2,51.6,28.2z"/>
                                <path className="modulesAsTitles" d="M31.6,0.2h-8.1c-2,0-3.5,1.5-3.5,3.4v45.2c0,1.9,1.5,3.4,3.5,3.4h8.1c2,0,3.5-1.5,3.5-3.4V3.6
                                    C35.1,1.7,33.6,0.2,31.6,0.2z"/>
                                <path className="modulesAsTitles" d="M11.7,17.2H3.6c-2,0-3.5,1.5-3.5,3.4v28.2c0,1.9,1.5,3.4,3.5,3.4h8.1c2,0,3.5-1.5,3.5-3.4V20.6
                                    C15.1,18.7,13.6,17.2,11.7,17.2z"/>
                            </g>
                        </svg>
                    </div>
                    <h1 >Aves de Cali</h1>
    
                </div>
                <div className="optionMenu">
                    <ul>
                    <li className={projectDash.menuOptionSelected == 'archivos' ? 'listElement focused' : 'listElement unfocused' }>
                            <button onClick={
                                (e) => {
                                    e.preventDefault();
                                    projectDash.menuOptionSelected = 'archivos';
                                    console.log (projectDash.menuOptionSelected)
                                }
                            }>Archivos</button>
                        </li>
                        <li className={projectDash.menuOptionSelected == 'tareas' ? 'listElement focused' : 'listElement unfocused' }>
                            <button onClick={
                                (e) => {
                                    e.preventDefault();
                                    projectDash.menuOptionSelected = 'tareas';
                                    console.log (projectDash.menuOptionSelected)
                                }
                            }>Tareas</button>
                        </li>
                        <li className={projectDash.menuOptionSelected == 'actividad' ? 'listElement focused' : 'listElement unfocused' }>
                            <button onClick={
                                (e) => {
                                    e.preventDefault();
                                    projectDash.menuOptionSelected = 'actividad';
                                    console.log (projectDash.menuOptionSelected)
                                }
                            }>Actividad</button>
                        </li>
                        <li className={projectDash.menuOptionSelected == 'comentarios' ? 'listElement focused' : 'listElement unfocused' }>
                        <button onClick={
                                (e) => {
                                    e.preventDefault();
                                    projectDash.menuOptionSelected = 'comentarios';
                                    console.log (projectDash.menuOptionSelected)
                                }
                            }>Comentarios</button>
                        </li>


    
                    </ul>
                </div>
            </section>
        )
    }
}