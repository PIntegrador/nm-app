import * as React from 'react';


import '../../../../public/css/flex.scss'
import './ArchiveContainer.scss';

import Dash from '../../../components/Editor/Dash/Dash';
import Header from '../../../components/Common/Header/Header';
import { firebaseStore } from '../../../store/FsActionStore';
import { observer } from 'mobx-react';
import { ArchiveView } from '../../../components/Editor/ArchiveView/ArchiveView';
import SortButton from '../../../components/Editor/SortButton/SortButton';
import { homeEditorStore } from '../../../store/HomeEditorStore';

let folderName: string = "folder name";

@observer export class ArchiveContainer extends React.Component {
    constructor(props:any){
        super(props);
        const folderID = this.getFolderId();
       
        //filter
        firebaseStore.handleFolderIDArchive(folderID);
        firebaseStore.filterFolderIDArchive();
    }
    getFolderId() {
        let locationWindow = window.location.pathname;
        let locationArray = locationWindow.split('/');
        return locationArray.slice(-1)[0];
    }
    render() {

        let arrayFolders = firebaseStore.arrayFolders;
        let arrayArchives = firebaseStore.arrayArchive;

        return <div className="contHome row-flex">
            <Dash />

            <div className="app flex-child col-flex">
                <Header/>
                <SortButton state= {homeEditorStore.sortButState} />
                <section className="scroll">
                    <ArchiveView archives={arrayArchives} folders={arrayFolders} folderName = {folderName} />
                </section>
            </div>

        </div>
    }
}