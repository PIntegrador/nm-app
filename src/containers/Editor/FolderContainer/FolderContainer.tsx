import * as React from 'react';


import '../../../../public/css/flex.scss'
import './FolderContainer.scss';

import Dash from '../../../components/Editor/Dash/Dash';
import Header from '../../../components/Common/Header/Header';
import { FileView } from '../../../components/Editor/FileView/FileView';
import { firebaseStore } from '../../../store/FsActionStore';
import { observer } from 'mobx-react';
import SortButton from '../../../components/Editor/SortButton/SortButton';
import { homeEditorStore } from '../../../store/HomeEditorStore';

import DeleteButton from '../../../components/Editor/DeleteButton/DeleteButton';
import { folderInStore } from '../../../store/FolderInStore';
import AddMenu from '../../../components/Editor/AddMenu/AddMenu';

let folderID: any = '';

@observer export class FolderContainer extends React.Component {

    constructor(props: any) {
        super(props);
        folderID = this.getFolderId();
        this.updateFolder(folderID);
    }
     getFolderId() {
        let id = firebaseStore.userInfo.uid;
        return id;
    }
     updateFolder(folderID: string) {
        folderInStore.folderIdArchives = folderID;
        folderInStore.updateArchives();
    }
     componentDidUpdate() {
        if (folderID != this.getFolderId()) {
            folderID = this.getFolderId();
            this.updateFolder(folderID);
        }
    }
    render() {


        return <div className="contHome row-flex">
            <Dash state = {homeEditorStore.sideMenuState} selected= {homeEditorStore.selectedMenuItem}/>
            <div className="app flex-child col-flex">
            <Header user={firebaseStore.userInfo.email} state={homeEditorStore.sideMenuState}/>
            <SortButton state={homeEditorStore.sortButState} />
                <DeleteButton />
                <AddMenu></AddMenu>
                <section className="scroll">
                    <FileView folders={folderInStore.folderInArchives} />
                </section>
            </div>

        </div>
    }
}