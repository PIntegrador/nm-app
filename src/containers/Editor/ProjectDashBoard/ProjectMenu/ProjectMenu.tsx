
import * as React from 'react';
import './ProjectMenu.scss';
import { Link } from 'react-router-dom';
import { projectDash } from '../../../../store/ProjectDashBoardStore';
import { getObserverTree } from 'mobx';
import { observer } from 'mobx-react';
import { firebaseStore } from '../../../../store/FsActionStore';


@observer export class ProjectMenu extends React.Component {
    constructor(props:any){
        super(props);


    }
    renderSuggested() {
        if (projectDash.renderPopUpAddCollaborator == true) {
            return (
                firebaseStore.listAllUsers != null ? (
                    firebaseStore.listAllUsers.map((elem: any) => {
                        return (
                            <div className="addColaborator" onClick={
                                (e) => {
                                    projectDash.renderPopUpAddCollaborator = false;
                                    //delete the element was added in array
                                    //update project id
                                    projectDash.updateProjectID(elem.uid, elem.name)
                                }
                            }>
                                <div className="colicon">
                                    <div className="icon">

                                    </div>
                                </div>

                                <p>
                                    {elem.name}
                                </p>
                            </div>)
                    })
                ) : ''

            )
        } else {
            return null;
        }
    }

    render() {
        let projectName = firebaseStore.actualProject.name;
        let projectTeam = firebaseStore.actualProject.team;
        return (
            <section className="projectMenuComponent">

                <div className="titleContainer">
                    <div className="titles">
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
                        <h1 >{projectName}</h1>
                    </div>

    
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
                <div className="projectTeamMates">
                <div className="contain">
                
                            <div className="addColaboratorContainer">
                                <div className="addColaborator" onClick={(e: any) => {
                                    projectDash.renderPopUpAddCollaborator = true;
                                }}>

                                    <div className="colicon">
                                        <div className="icon">
                                            <svg width="100%" height="100%" viewBox="0 0 20 20">
                                                <path d="M15,9.88a4.48,4.48,0,0,0,1.7-3.47A4.42,4.42,0,1,0,9.61,9.88c-2.79.68-4.75,2.38-4.75,4.46v2.25C4.86,16.93,5.2,18,6,18H18.85c.71,0,1-.78,1-1.43V14.34C19.8,12.26,17.86,10.56,15,9.88ZM12.33,3.34A3.06,3.06,0,1,1,9.27,6.41,3,3,0,0,1,12.33,3.34Zm6.11,13.21v.07H6.25s0-.07,0-.1V14.31c0-1.84,2.79-3.4,6.11-3.4s6.11,1.57,6.11,3.4Z" />
                                                <path d="M5.83,6.21H4V4.16a.63.63,0,1,0-1.25,0V6.21H.83a.63.63,0,0,0,0,1.26H2.7V9.37A.63.63,0,1,0,4,9.37V7.47H5.83a.63.63,0,0,0,0-1.26Z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <input type="text" placeholder='Añadir participantes...'/>

                                </div>
                                <div className="suggested">

                                    {
                                        firebaseStore.taskInfo != null ? this.renderSuggested(): ''
                                        
                                    }
                                </div>

                            </div>
                            {
                                        firebaseStore.actualProject.team != null ? (
                                            (firebaseStore.actualProject.team).map((elem: any) => {
                                                return (
                                                    <div className="colicon">

                                                    </div>)
                                            })
                                        ) : ''
                                    }
                        </div>
                </div>
            </section>
        )
    }
}