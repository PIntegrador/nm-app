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


@observer export  class FolderContainer extends React.Component {

    render(){

        let arrayFolders = firebaseStore.arrayFolders;
        
        return <div className="contHome row-flex">  
            <Dash/>
            <Header 
            img="./assets/img/logo.png"/>

            <div className="app flex-child col-flex">
                <RouteBar />
                <SortBar />
                {console.log("ESTE FOLDER DE MIERDA,", arrayFolders)}
                <FileView folders={arrayFolders}/>
                
            </div>
           
        </div>
    }
}