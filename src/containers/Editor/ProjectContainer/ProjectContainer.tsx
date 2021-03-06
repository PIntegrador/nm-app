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

                <SortButton state={homeEditorStore.sortButState} />

                <section className="scroll">
                <section className="col-flex projectContainer">
                {/* Delete all in <Link /> to quit title 
                */}


                <RouteBar mainTitle="Mis Proyectos" folderName = {""} />
                        
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
                    </section>

            </div>

        </div>
    }
}