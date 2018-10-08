import * as React from 'react';


import '../../../../public/css/flex.scss'
import './ArchiveContainer.scss';

import Dash from '../../../components/Editor/Dash/Dash';
import Header from '../../../components/Common/Header/Header';
import RouteBar from '../../../components/Editor/RouteBar/RouteBar';
import { firebaseStore } from '../../../store/FsActionStore';
import { observer } from 'mobx-react';
import { ArchiveView } from '../../../components/Editor/ArchiveView/ArchiveView';
import { SortBarArchive } from '../../../components/Editor/SortBarArchive/SortBarArchive';
import FloatingButton from '../../../components/Editor/FloatingButton/FloatingButton';
import FolderPopUp from '../../../components/Editor/AddFolder/FolderPopUp/FolderPopUp';
import FilePopUp from '../../../components/Editor/AddFile/FilePopUp/FilePopUp';

@observer export class ArchiveContainer extends React.Component {
    constructor(props:any){
        super(props);
        const folderID = this.getFolderId();

        //filter
        firebaseStore.handleFolderIDArchive(folderID);
        firebaseStore.filterFolderIDArchive();
        //

        //
    }
    getFolderId() {
        let locationWindow = window.location.pathname;
        let locationArray = locationWindow.split('/');

        return locationArray.slice(-1)[0];
    }
    render() {

        let arrayArchives = firebaseStore.arrayArchive;

        return <div className="contHome row-flex">
            <Dash />
            <FloatingButton />
            <div className="app flex-child col-flex">
                <Header
                    img="../assets/img/logo.png"
                    fav="../assets/img/star.png" />
                <RouteBar />
                <SortBarArchive />
                <ArchiveView archives={arrayArchives} />

            </div>
            <FolderPopUp />
            <FilePopUp /> 
        </div>
    }
}