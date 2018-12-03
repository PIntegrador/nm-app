
import * as React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import './Task.scss';
import { projectDash } from '../../../../../store/ProjectDashBoardStore';

interface TaskProps {

    type: string;
    id: string;
    description: string;
    date: string;
    team: any;
}
@observer export class Task extends React.Component<TaskProps> {

    constructor(props: any) {
        super(props);
    }

    render() {

        return (
            <div className="task" onClick={(e: any) => {
                projectDash.updateTaskState(this.props.type);
            }}>
                <p className='descriptionTask'>
                    {this.props.description}
                </p>
                <p className='date'>
                    {this.props.date}
                </p>
                <div className="lowerBarContainer">
                    <div className="colaborators">
                        {
                            this.props.team != null ? (
                                this.props.team.map((elem: any) => {
                                    return (
                                        <div className="colaborator">
                                        </div>)
                                })
                            ) : ''
                        }
                        <button className="colaborator ">
                            <div className="icon">
                                <svg width="100%" height="100%" viewBox="0 0 20 20">
                                    <path d="M15,9.88a4.48,4.48,0,0,0,1.7-3.47A4.42,4.42,0,1,0,9.61,9.88c-2.79.68-4.75,2.38-4.75,4.46v2.25C4.86,16.93,5.2,18,6,18H18.85c.71,0,1-.78,1-1.43V14.34C19.8,12.26,17.86,10.56,15,9.88ZM12.33,3.34A3.06,3.06,0,1,1,9.27,6.41,3,3,0,0,1,12.33,3.34Zm6.11,13.21v.07H6.25s0-.07,0-.1V14.31c0-1.84,2.79-3.4,6.11-3.4s6.11,1.57,6.11,3.4Z" />
                                    <path d="M5.83,6.21H4V4.16a.63.63,0,1,0-1.25,0V6.21H.83a.63.63,0,0,0,0,1.26H2.7V9.37A.63.63,0,1,0,4,9.37V7.47H5.83a.63.63,0,0,0,0-1.26Z" />
                                </svg>

                            </div>
                        </button>

                    </div>
                    <button className="buttons">
                        <div className="icon" onClick={(e: any) => {
                            console.log(this.props.id);
                            projectDash.deleteTask(this.props.id);
                        }
                        }>
                            <svg width="85%" height="100%" viewBox="0 0 18 21" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.4571 20.5H4.97136C2.95707 20.5 1.28564 18.7083 1.28564 16.5417V5.12501C1.28564 4.45834 1.6285 4.12501 1.9285 4.00001C2.2285 3.83334 2.5285 3.83334 2.8285 3.83334H15.1714C15.5142 3.83334 15.8142 3.83334 16.1142 4.00001C16.4142 4.12501 16.7571 4.45834 16.7571 5.12501V16.9583C16.7142 18.9167 15.2571 20.5 13.4571 20.5ZM2.99993 5.50001V16.5417C2.99993 17.6667 3.81422 18.8333 4.97136 18.8333H13.4142C14.3571 18.8333 14.9571 17.875 14.9571 16.9583V5.50001H2.99993Z" fill="white" />
                                <path d="M17.1429 5.50001H0.857143C0.385714 5.50001 0 5.12501 0 4.66668C0 4.20834 0.385714 3.83334 0.857143 3.83334H17.1429C17.6143 3.83334 18 4.20834 18 4.66668C18 5.12501 17.6143 5.50001 17.1429 5.50001Z" fill="white" />
                                <path d="M11.5716 5.08333H6.42878C5.70021 5.08333 5.14307 4.54167 5.14307 3.83333V1.75C5.14307 1.04167 5.70021 0.5 6.42878 0.5H11.5716C12.3002 0.5 12.8574 1.04167 12.8574 1.75V3.83333C12.8574 4.54167 12.3002 5.08333 11.5716 5.08333ZM6.85735 3.41667H11.1431V2.16667H6.85735V3.41667Z" fill="white" />
                                <path d="M5.5715 16.75C5.10007 16.75 4.71436 16.375 4.71436 15.9167V8.41668C4.71436 7.95834 5.10007 7.58334 5.5715 7.58334C6.04293 7.58334 6.42864 7.95834 6.42864 8.41668V15.9167C6.42864 16.375 6.04293 16.75 5.5715 16.75Z" fill="white" />
                                <path d="M9.00021 16.75C8.52878 16.75 8.14307 16.375 8.14307 15.9167V8.41668C8.14307 7.95834 8.52878 7.58334 9.00021 7.58334C9.47164 7.58334 9.85735 7.95834 9.85735 8.41668V15.9167C9.85735 16.375 9.47164 16.75 9.00021 16.75Z" fill="white" />
                                <path d="M12.4284 16.75C11.957 16.75 11.5713 16.375 11.5713 15.9167V8.41668C11.5713 7.95834 11.957 7.58334 12.4284 7.58334C12.8999 7.58334 13.2856 7.95834 13.2856 8.41668V15.9167C13.2856 16.375 12.8999 16.75 12.4284 16.75Z" fill="white" />
                            </svg>

                        </div>
                    </button>
                </div>

            </div>
        )
    }
}