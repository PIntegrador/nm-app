
import * as React from 'react';
import './ProjectOptionBoard.scss';
import { Link } from 'react-router-dom';
import { projectDash } from '../../../../store/ProjectDashBoardStore';
import { getObserverTree } from 'mobx';
import { observer } from 'mobx-react';
import { Task } from './Task/Task';
import { ProjectComment } from '../ProjectComment/ProjectComment';
import { firebaseStore } from '../../../../store/FsActionStore';
import { ArchiveView } from '../../../../components/Editor/ArchiveView/ArchiveView';
import SortButton from '../../../../components/Editor/SortButton/SortButton';
import { homeEditorStore } from '../../../../store/HomeEditorStore';
import { folderInStore } from '../../../../store/FolderInStore';

import DeleteButton from '../../../../components/Editor/DeleteButton/DeleteButton';
import FloatingButton from '../../../../components/Editor/FloatingButton/FloatingButton';
import FolderPopUp from '../../../../components/Editor/AddFolder/FolderPopUp/FolderPopUp';
import AddMenu from '../../../../components/Editor/AddMenu/AddMenu';
import FilePopUp from '../../../../components/Editor/AddFile/FilePopUp/FilePopUp';
import AddProject from '../../../../components/Editor/AddProject/AddProject';
import UploadConfirmation from '../../../../components/Editor/AddMenu/UploadConfirmation/UploadConfirmation';

import Dash from '../../../../components/Editor/Dash/Dash';
import Header from '../../../../components/Common/Header/Header';
import { projectStore } from '../../../../store/ProjectStore';
import { ProjectFileView } from '../../../../components/Editor/ProjectFileView/ProjectFileView';

let folderID: any = '';


@observer export class ProjectOptionBoard extends React.Component {
    constructor(props: any) {
        super(props);

        folderID = this.getFolderId();
        this.updateFolder(folderID);
    }

    getFolderId() {
        let locationWindow = window.location.pathname;
        let locationArray = locationWindow.split('/');
        return locationArray.slice(-1)[0];
    }

    updateFolder(folderID: string) {
        projectStore.projectId = folderID;
        projectStore.updateArchives();
    }

    componentDidUpdate() {
        if (folderID != this.getFolderId()) {

            folderID = this.getFolderId();

            this.updateFolder(folderID);
        }
    }

    // This method filters tasks list for the use in the taskContainers
    renderTask(taskArray: any, type: string) {
        let resultArray = taskArray.filter((e: any) => {
            return e.state == type;
        });

        return resultArray;
    }

    //This method will return the actual option for the rendering in project dashboard
    //The variable option is obtained from projectStore
    renderOption(option: string, arrayOption: any) {
        if (option == 'archivos') {
            return (
                <div className="app flex-child col-flex">
                    <SortButton state={homeEditorStore.sortButState} />
                    <DeleteButton />
                    <AddMenu />
                    <section className="scroll">
                        <ProjectFileView archives={projectStore.projectArchives} />
                    </section>
                    <FloatingButton />
                    <AddMenu />
                    <FolderPopUp />
                    <FilePopUp />
                    <AddProject />
                    <UploadConfirmation />
                </div>
            )
        } else if (option == 'tareas') {
            return (

                <div className="taskSuperContainer">
                    {/*doingContainer doneContainer*/}

                    <div className="addTask" onClick={
                        (e) => {
                            projectDash.renderPopUpAddTask = true;
                        }
                    }>
                        <p>
                            Añade una nueva tarea...
                        </p>
                    </div>

                    <div className="taskContainers">
                        <div className="toDoContainer tasksContainer">
                            <h5 className="title">
                                Tareas por hacer
                    </h5>
                            <div className="tasks">

                                {
                                    arrayOption != null ? (

                                        this.renderTask(arrayOption, 'todo').map((elem: any) => {
                                            return (
                                                <Task key={elem.id} id={elem.id} type={elem.state} description={elem.description} date={elem.date} team={elem.team} />)
                                        })
                                    ) : ''
                                }

                            </div>
                        </div>
                        <div className="doingContainer tasksContainer">
                            <h5 className="title">
                                Tareas en proceso
                    </h5>
                            <div className="tasks">
                                {
                                    arrayOption != null ? (
                                        this.renderTask(arrayOption, 'doing').map((elem: any) => {
                                            return (
                                                <Task key={elem.id} id={elem.id} type={elem.state} description={elem.description} date={elem.date} team={elem.team} />)
                                        })
                                    ) : ''
                                }

                            </div>
                        </div>
                        <div className="doneContainer tasksContainer">
                            <h5 className="title">
                                Tareas hechas
                    </h5>
                            <div className="tasks">
                                {
                                    arrayOption != null ? (
                                        this.renderTask(arrayOption, 'done').map((elem: any) => {
                                            return (
                                                <Task key={elem.id} id={elem.id} type={elem.state} description={elem.description} date={elem.date} team={elem.team} />)
                                        })
                                    ) : ''
                                }

                            </div>
                        </div>
                    </div>


                </div>
            )
        } else if (option == 'actividad') {
            return null;
        } else if (option == 'comentarios') {
            return (
                <section className="contComments">
                    <div className="editText">
                        <div className="img"></div>
                        <input className="inputComment" type="text" placeholder="Escribir un comentario..." />
                        <div className="empty"></div>
                    </div>

                    <ProjectComment text="Este sería el texto que iría en el comentario" name="Título del Comentario" date="8:30" autor="Nestor Tobar" />

                    <ProjectComment text="Este sería el texto que iría en el comentario" name="Título del Comentario" date="8:30" autor="Nestor Tobar" />
                </section>
            )
        }
    }
    render() {

        let tasks: any = firebaseStore.taskInfo;

        return (
            <section className="projectBoardComponent">
                {console.log(firebaseStore.taskInfo)}
                {
                    (tasks != null) ? (this.renderOption(projectDash.menuOptionSelected, tasks)) : ''
                }
            </section>
        )
    }
}