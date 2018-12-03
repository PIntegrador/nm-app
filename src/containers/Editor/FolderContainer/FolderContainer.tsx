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
import FloatingButton from '../../../components/Editor/FloatingButton/FloatingButton';
import FolderPopUp from '../../../components/Editor/AddFolder/FolderPopUp/FolderPopUp';
import AddMenu from '../../../components/Editor/AddMenu/AddMenu';
import FilePopUp from '../../../components/Editor/AddFile/FilePopUp/FilePopUp';
import AddProject from '../../../components/Editor/AddProject/AddProject';
import UploadConfirmation from '../../../components/Editor/AddMenu/UploadConfirmation/UploadConfirmation';


@observer export class FolderContainer extends React.Component {

    render() {


        return <div className="contHome row-flex">
            <Dash />


            <div className="app flex-child col-flex">
                <Header user={firebaseStore.userInfo.email} />
                <SortButton state={homeEditorStore.sortButState} />
                <DeleteButton />
                <section className="scroll">
                    <FileView folders={firebaseStore.userInfo.archives} />
                    <FloatingButton />
                    <AddMenu />
                    <FolderPopUp />
                    <FilePopUp />
                    <AddProject />
                    <UploadConfirmation />
                </section>
            </div>

        </div>
    }
}