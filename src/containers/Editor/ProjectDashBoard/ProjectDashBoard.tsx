import * as React from 'react';
import '../../../../public/css/flex.scss'

import Dash from '../../../components/Editor/Dash/Dash';
import Header from '../../../components/Common/Header/Header';
import RouteBar from '../../../components/Editor/RouteBar/RouteBar';
import { firebaseStore } from '../../../store/FsActionStore';
import { observer } from 'mobx-react';
import { homeEditorStore } from '../../../store/HomeEditorStore';
import { projectDash } from '../../../store/ProjectDashBoardStore';
import { Module } from '../../../components/Editor/Module/Module';
import SortButton from '../../../components/Editor/SortButton/SortButton';
import './ProjectDashBoard.scss';
import { Link } from 'react-router-dom';
import { ProjectMenu } from './ProjectMenu/ProjectMenu';
import { ProjectOptionBoard } from './ProjectOptionBoard/ProjectOptionBoard';

@observer export class ProjectDashBoard extends React.Component {
    constructor(props: any) {
        super(props);

        /*
        firebaseStore.getActualProject(this.getProjectID());
        */
       firebaseStore.projectidActual = this.getProjectID();
       firebaseStore.readTasks();
    }

    getProjectID() {
        let locationWindow = window.location.pathname;
        let locationArray = locationWindow.split('/');
        return locationArray.slice(-1)[0];
    }

    renderSuggested() {
        if (projectDash.renderPopUpAddCollaborator == true) {
            return (
                firebaseStore.listProjectTeam != null ? (
                    firebaseStore.listProjectTeam.map((elem: any) => {
                        return (
                            <div className="addColaborator" onClick={
                                (e) => {
                                    projectDash.renderPopUpAddCollaborator = false;
                                    //delete the element was added in array

                                    projectDash.handleTaskCollaborators(elem)
                                }
                            }>
                                <div className="colicon">
                                    <div className="icon">

                                    </div>
                                </div>

                                <p>
                                    {elem}
                                </p>
                            </div>)
                    })
                ) : ''

            )
        } else {
            return null;
        }
    }
    renderPopUp() {
        if (projectDash.renderPopUpAddTask == true) {
            return <div className="popUpAddTask">
                <div className="addTaskContainer">
                    <div className="formSection">
                        <div className="titleBar">
                            <h6>Añade una tarea</h6>
                            <div className="icon" onClick={
                                (e) => {
                                    projectDash.renderPopUpAddTask = false;
                                    firebaseStore.listProjectTeam = firebaseStore.userInfo.projects[0].team;

                                    projectDash.newTask.team = [];
                                    projectDash.newTask.state = '';
                                    projectDash.newTask.date = '';
                                    projectDash.renderPopUpAddTask = false;
                                    projectDash.renderPopUpAddCollaborator = false;
                                }
                            }>
                                <svg width="100%" height="100%" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="2.3317" height="12.3247" rx="1.16585" transform="matrix(0.670659 0.741765 -0.670659 0.741765 8.82239 0.553711)" fill="#666666" />
                                    <rect width="2.3317" height="12.3247" rx="1.16585" transform="matrix(-0.669856 0.742491 -0.669856 -0.742491 10.4736 9.70508)" fill="#666666" />
                                </svg>

                            </div>
                        </div>
                        <div className="contain">
                            <input placeholder="Nombre" onChange={(e: any) => {
                                e.preventDefault();
                                projectDash.handleTaskName(e.target.value)
                            }} type="text" name="" id="" />
                        </div>
                    </div>
                    <div className="formSection">
                        <div className="titleBar">
                            <h6>Encargados</h6>
                        </div>
                        <div className="contain">
                            <div className="addColaboratorContainer">
                                <div className="addColaborator" onClick={(e: any) => {
                                    projectDash.renderPopUpAddCollaborator = true;
                                }}>
                                    {
                                        projectDash.newTask.team != null ? (
                                            (projectDash.newTask.team).map((elem: any) => {
                                                return (
                                                    <div className="colicon">

                                                    </div>)
                                            })
                                        ) : ''
                                    }
                                    <div className="colicon">
                                        <div className="icon">
                                            <svg width="100%" height="100%" viewBox="0 0 20 20">
                                                <path d="M15,9.88a4.48,4.48,0,0,0,1.7-3.47A4.42,4.42,0,1,0,9.61,9.88c-2.79.68-4.75,2.38-4.75,4.46v2.25C4.86,16.93,5.2,18,6,18H18.85c.71,0,1-.78,1-1.43V14.34C19.8,12.26,17.86,10.56,15,9.88ZM12.33,3.34A3.06,3.06,0,1,1,9.27,6.41,3,3,0,0,1,12.33,3.34Zm6.11,13.21v.07H6.25s0-.07,0-.1V14.31c0-1.84,2.79-3.4,6.11-3.4s6.11,1.57,6.11,3.4Z" />
                                                <path d="M5.83,6.21H4V4.16a.63.63,0,1,0-1.25,0V6.21H.83a.63.63,0,0,0,0,1.26H2.7V9.37A.63.63,0,1,0,4,9.37V7.47H5.83a.63.63,0,0,0,0-1.26Z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <input type="text" placeholder='Añadir participantes...'/>
                                    {//This input must search in the team member
                                    }
                                </div>
                                <div className="suggested">

                                    {
                                        this.renderSuggested()
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="formSection">
                        <div className="titleBar">
                            <h6>Fecha límite</h6>
                        </div>
                        <div className="contain date">
                            <input type="date" onChange={
                                (e: any) => {
                                    projectDash.handleTaskDate(e.target.value);
                                }
                            } name="" id="" />
                        </div>
                    </div>
                    <div className="lowerbar">
                        <button className="addButt" onClick={
                            (e) => {
                                if (projectDash.newTask.description != '') {
                                    
                                    projectDash.addNewTask();
                                    firebaseStore.listProjectTeam = firebaseStore.userInfo.projects[0].team;

                                    projectDash.newTask.team = [];
                                    projectDash.newTask.state = '';
                                    projectDash.newTask.date = '';

                                    projectDash.renderPopUpAddTask = false;
                                    projectDash.renderPopUpAddCollaborator = false;

                                }
                            }
                        }>Agregar tarea</button>
                        <button className="cancel" onClick={
                            (e) => {
                                firebaseStore.listProjectTeam = firebaseStore.userInfo.projects[0].team;

                                projectDash.newTask.team = [];
                                projectDash.newTask.state = '';
                                projectDash.newTask.date = '';
                                projectDash.renderPopUpAddTask = false;
                                projectDash.renderPopUpAddCollaborator = false;

                            }
                        }>Cancelar</button>

                    </div>
                </div>
            </div>

        } else {
            return null;
        }
    }
    render() {

       // This conditional must check if this project that is being checked exists
       if (firebaseStore.projectidActual!= '') {
        return <div className="contHome row-flex">
            <Dash state = {homeEditorStore.sideMenuState} selected= {homeEditorStore.selectedMenuItem}/>

            <div className="app projectDashBoard flex-child col-flex">
                {this.renderPopUp()}
                <Header user={firebaseStore.userInfo.email} state={homeEditorStore.sideMenuState}/>
                <ProjectMenu />

                <ProjectOptionBoard />

            </div>

        </div>
       } else {
           return null;
       }

    }
}