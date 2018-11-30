import * as React from 'react';


import '../../../../public/css/flex.scss'
import './FolderContainer.scss';

import Dash from '../../../components/Editor/Dash/Dash';
import Header from '../../../components/Common/Header/Header';
import { FileView } from '../../../components/Editor/FileView/FileView';
import { firebaseStore } from '../../../store/FsActionStore';
import { observer } from 'mobx-react';


@observer export class FolderContainer extends React.Component {

    render() {

        let arrayFolders = firebaseStore.arrayFolders;

        return <div className="contHome row-flex">
            <Dash />


            <div className="app flex-child col-flex">
                <Header />
                <section className="scroll">
                    <FileView folders={arrayFolders} />
                </section>
            </div>

        </div>
    }
}