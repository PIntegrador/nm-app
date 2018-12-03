
import * as React from 'react';
import './ProjectOptionBoard.scss';
import { Link } from 'react-router-dom';
import { projectDash } from '../../../../store/ProjectDashBoardStore';
import { getObserverTree } from 'mobx';
import { observer } from 'mobx-react';
import { Task } from './Task/Task';
import { ProjectComment } from '../ProjectComment/ProjectComment';
import { firebaseStore } from '../../../../store/FsActionStore';


@observer export class ProjectOptionBoard extends React.Component {
    constructor(props: any) {
        super(props);


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
            return null;
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
                                            <Task key={elem.id}  type={elem.state} description={elem.description} date={elem.date} team={elem.team} />)
                                    })
                                ) : ''
                            }

                        </div>
                    </div>
                    <div className="doingContainer tasksContainer">
                        <h5 className="title">
                            Tareas por hacer
                    </h5>
                        <div className="tasks">
                            {
                                arrayOption != null ? (
                                    this.renderTask(arrayOption, 'doing').map((elem: any) => {
                                        return (
                                            <Task key={elem.id}  type={elem.state} description={elem.description} date={elem.date} team={elem.team} />)
                                    })
                                ) : ''
                            }

                        </div>
                    </div>
                    <div className="doneContainer tasksContainer">
                        <h5 className="title">
                            Tareas por hacer
                    </h5>
                        <div className="tasks">
                            {
                                arrayOption != null ? (
                                    this.renderTask(arrayOption, 'done').map((elem: any) => {
                                        return (
                                            <Task key={elem.id} type={elem.state} description={elem.description} date={elem.date} team={elem.team} />)
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

                    <ProjectComment text="Este sería el texto que iría en el comentario" name="Título del Comentario" date="8:30" autor="Nestor Tobar"/>

                    <ProjectComment text="Este sería el texto que iría en el comentario" name="Título del Comentario" date="8:30" autor="Nestor Tobar"/>
                </section>
            )
        }
    }
    render() {
        let tasks: any = firebaseStore.taskInfo;
        console.log (tasks);

        return (
            <section className="projectBoardComponent">
                {this.renderOption(projectDash.menuOptionSelected, tasks)}
            </section>
        )
    }
}