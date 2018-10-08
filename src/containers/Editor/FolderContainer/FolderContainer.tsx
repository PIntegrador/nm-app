import * as React from 'react';


import '../../../../public/css/flex.scss'
import './FolderContainer.scss';

import Dash from '../../../components/Editor/Dash/Dash';
import Header from '../../../components/Common/Header/Header';
import RouteBar from '../../../components/Editor/RouteBar/RouteBar';
import SortBar from '../../../components/Editor/SortBar/SortBar';
import { FileView } from '../../../components/Editor/FileView/FileView';
import { firebaseStore } from '../../../store/FsActionStore';
import { observer } from 'mobx-react';
import FolderPopUp from '../../../components/Editor/AddFolder/FolderPopUp/FolderPopUp';
import FilePopUp from '../../../components/Editor/AddFile/FilePopUp/FilePopUp';
import FloatingButton from '../../../components/Editor/FloatingButton/FloatingButton';


@observer export  class FolderContainer extends React.Component {

    render(){

        let arrayFolders = firebaseStore.arrayFolders;
        
        return <div className="contHome row-flex">  
            <Dash/>
            <FloatingButton />

            <div className="app flex-child col-flex">
            <Header 
            img="./assets/img/logo.png"
            fav="./assets/img/star.png"/>
                <RouteBar />
                <SortBar />
                <FileView folders={arrayFolders}/>
                
            </div>
            <FolderPopUp />
            <FilePopUp /> 
        </div>
    }
}