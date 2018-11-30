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
import './ProjectContainer.scss';
import { Link } from 'react-router-dom';

@observer export class ProjectContainer extends React.Component {
    constructor(props: any) {
        super(props);
        //filter
    }

    render() {

        let arrayArchives = firebaseStore.arrayArchive;

        return <div className="contHome row-flex">
            <Dash />

            <div className="app flex-child col-flex">
                <Header />
                <RouteBar folderName = {""} />

                <SortButton state={homeEditorStore.sortButState} />
                <section className="allCont col-flex projectContainer">
                {/* Delete all in <Link /> to quit title 
                */}

                        <Link to="/projects">
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
                            <h1 >Proyectos</h1>
                            </div>
                        </Link>
                        
                        <div className="flex-child  row-flex moduleCont">
                            {
                                homeEditorStore.projectArray.map((elem: any) => {
                                    return (
                                        <Module key={elem.id} gridStyle={homeEditorStore.sortButState} type='project' name={elem.name} numFiles={0} id={elem.id} />
                                    )
                                })
                            }
                        </div>

                    </section>

            </div>

        </div>
    }
}