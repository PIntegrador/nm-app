
import * as React from 'react';
import './ProjectOptionBoard.scss';
import { Link } from 'react-router-dom';
import { projectDash } from '../../../../store/ProjectDashBoardStore';
import { getObserverTree } from 'mobx';
import { observer } from 'mobx-react';


@observer export class ProjectOptionBoard extends React.Component {
    constructor(props: any) {
        super(props);


    }


    render() {

        return (
            <section className="projectBoardComponent">
                <div className="taskSuperContainer">
                    {/*doingContainer doneContainer*/}
                    <div className="toDoContainer tasksContainer">
                        <h5 className="title">
                            Tareas por hacer
                    </h5>
                        <div className="tasks">
                            <div className="task">
                                <p>
                                    Buscar bases de datos sobre aves
                                </p>
                                <div className="lowerBarContainer">
                                    <div className="colaborators">
                                        <div className="colaborator">
                                        </div>
                                        <div className="colaborator">
                                        </div>
                                    </div>
                                    <div className="buttons">
                                        <div className="icon">

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </section>
        )
    }
}