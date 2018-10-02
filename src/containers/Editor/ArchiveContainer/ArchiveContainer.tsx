import * as React from 'react';


import '../../../../public/css/flex.scss'
import './ArchiveContainer.scss';

import Dash from '../../../components/Editor/Dash/Dash';
import Header from '../../../components/Common/Header/Header';
import RouteBar from '../../../components/Editor/RouteBar/RouteBar';
import SortBar from '../../../components/Editor/SortBar/SortBar';
import { FileView } from '../../../components/Editor/FileView/FileView';
import { firebaseStore } from '../../../store/FsActionStore';
import { observer } from 'mobx-react';


@observer export  class ArchiveContainer extends React.Component {

    getFolderId() {
        let locationWindow = window.location.pathname;
        let locationArray = locationWindow.split('/');
        return locationArray.slice(-1)[0];
    }
    render(){
        const folderID = this.getFolderId();
        console.log(folderID, "IDFolder");
        let arrayFolders = firebaseStore.arrayFolders;

        return <div className="contHome row-flex">  
            <Dash/>
            <Header 
            img="./assets/img/logo.png"/>

            <div className="app flex-child col-flex">
                <RouteBar />
                <SortBar />
                <FileView folders={arrayFolders}/>
                
            </div>
           
        </div>
    }
}