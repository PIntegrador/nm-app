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

import FloatingButton from '../../../components/Editor/FloatingButton/FloatingButton';
import FolderPopUp from '../../../components/Editor/AddFolder/FolderPopUp/FolderPopUp';
import AddMenu from '../../../components/Editor/AddMenu/AddMenu';
import FilePopUp from '../../../components/Editor/AddFile/FilePopUp/FilePopUp';
import AddProject from '../../../components/Editor/AddProject/AddProject';
import UploadConfirmation from '../../../components/Editor/AddMenu/UploadConfirmation/UploadConfirmation';

@observer export class ProjectContainer extends React.Component {
    constructor(props: any) {
        super(props);
        //filter
    }

    render() {

        let arrayArchives = [];

        return <div className="contHome row-flex">
            <Dash />
            <div className="app flex-child col-flex">
                <Header user={firebaseStore.userInfo.email} />
                <SortButton state={''} />
                <section className="scroll">
                    <section className="col-flex projectContainer">
                        <RouteBar mainTitle="Mis Proyectos" folderName={""} />
                        <div className="flex-child  row-flex moduleCont">
                            {
                                [].map((elem: any) => {
                                    return (
                                        <Module key={elem.id} gridStyle={''} type='project' name={elem.name} numFiles={0} id={elem.id} />
                                    )
                                })
                            }
                        </div>
                    </section>
                </section>
                <FloatingButton />
                    <AddMenu />
                    <FolderPopUp />
                    <FilePopUp />
                    <AddProject />
                    <UploadConfirmation />
            </div>

        </div>
    }
}