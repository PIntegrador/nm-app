
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
                        <svg width="100%" height="100%"  viewBox="0 0 21.25 20">
                            <g>
                                <path className="modulesAsTitles" d="M4.52,20H1.36C0.59,20,0,19.43,0,18.7V7.83c0-0.74,0.59-1.3,1.36-1.3h3.16c0.77,0,1.36,0.57,1.36,1.3V18.7
                                    C5.88,19.43,5.29,20,4.52,20z M1.81,18.26h2.26v-10H1.81V18.26z"/>
                                <path className="modulesAsTitles" d="M19.89,20h-3.16c-0.77,0-1.36-0.57-1.36-1.3v-6.52c0-0.74,0.59-1.3,1.36-1.3h3.16c0.77,0,1.36,0.57,1.36,1.3
                                    v6.52C21.25,19.43,20.66,20,19.89,20z M17.18,18.26h2.26v-5.65h-2.26V18.26z"/>
                                <path className="modulesAsTitles" d="M12.21,20H9.04c-0.77,0-1.36-0.57-1.36-1.3V1.3C7.69,0.57,8.27,0,9.04,0h3.16c0.77,0,1.36,0.57,1.36,1.3V18.7
                                    C13.56,19.43,12.98,20,12.21,20z M9.49,18.26h2.26V1.74H9.49V18.26z"/>
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