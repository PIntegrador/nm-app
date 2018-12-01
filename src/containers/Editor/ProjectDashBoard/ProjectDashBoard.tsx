import * as React from 'react';
import '../../../../public/css/flex.scss'

import Dash from '../../../components/Editor/Dash/Dash';
import Header from '../../../components/Common/Header/Header';
import RouteBar from '../../../components/Editor/RouteBar/RouteBar';
import { firebaseStore } from '../../../store/FsActionStore';
import { observer } from 'mobx-react';
import { homeEditorStore } from '../../../store/HomeEditorStore';
import { Module } from '../../../components/Editor/Module/Module';
import SortButton from '../../../components/Editor/SortButton/SortButton';
import './ProjectDashBoard.scss';
import { Link } from 'react-router-dom';
import { ProjectMenu } from './ProjectMenu/ProjectMenu';
import { ProjectOptionBoard } from './ProjectOptionBoard/ProjectOptionBoard';

@observer export class ProjectDashBoard extends React.Component {
    constructor(props:any){
        super(props);

        /*
        firebaseStore.getActualProject(this.getProjectID());
        */
    }

    getProjectID() {
        let locationWindow = window.location.pathname;
        let locationArray = locationWindow.split('/');
        return locationArray.slice(-1)[0];
    }

    render() {
        /*
        let project = firebaseStore.actualProject;
        */
        return <div className="contHome row-flex">
            <Dash />

            <div className="app projectDashBoard flex-child col-flex">
                <Header />
                <ProjectMenu /> 
                <ProjectOptionBoard />

            </div>

        </div>
    }
}