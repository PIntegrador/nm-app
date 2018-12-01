
import * as React from 'react';
import './ProjectOptionBoard.scss';
import { Link } from 'react-router-dom';
import { projectDash } from '../../../../store/ProjectDashBoardStore';
import { getObserverTree } from 'mobx';
import { observer } from 'mobx-react';
import { Task } from './Task/Task';


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
                    <div className="toDoContainer tasksContainer">
                        <h5 className="title">
                            Tareas por hacer
                    </h5>
                        <div className="tasks">
                            {
                                arrayOption != null ? (
                                    this.renderTask(arrayOption, 'todo').map((elem: any) => {
                                        return (
                                            <Task type={elem.state} description={elem.description} date={elem.date} colaborators={elem.colaborators} />)
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
                                            <Task type={elem.state} description={elem.description} date={elem.date} colaborators={elem.colaborators} />)
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
                                            <Task type={elem.state} description={elem.description} date={elem.date} colaborators={elem.colaborators} />)
                                    })
                                ) : ''
                            }

                        </div>
                    </div>
                </div>
            )
        } else if (option == 'actividad') {
            return null;
        } else if (option == 'comentarios') {
            return null;
        }
    }
    render() {
        let tasks: any = [
            {
                'state': 'todo',
                'description': 'Hacer tareas',
                'date': 'Agosto 15, 2018 (Todo el día)',
                'colaborators': [{}]
            }, {
                'state': 'doing',
                'description': 'Pasar Integrador',
                'date': 'Agosto 15, 2018 (Todo el día)',
                'colaborators': [{}, {}]
            }, {
                'state': 'done',
                'description': 'Pasar Web',
                'date': 'Agosto 15, 2018 (Todo el día)',
                'colaborators': [{}, {}, {}]
            }, {
                'state': 'todo',
                'description': 'Morir',
                'date': 'Agosto 15, 2018 (Todo el día)',
                'colaborators': [{}, {}, {}, {}]
            }];


        return (
            <section className="projectBoardComponent">
                {this.renderOption(projectDash.menuOptionSelected, tasks)}
            </section>
        )
    }
}