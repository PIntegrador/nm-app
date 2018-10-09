import * as React from 'react';

import Searchbar from '../../../components/Editor/Searchbar/Searchbar';
import SearchResults from '../../../components/Editor/SearchResults/SearchResults';
import Dash from '../../../components/Editor/Dash/Dash';

import '../../../../public/css/flex.scss'
import './Home.scss';
import Header from '../../../components/Common/Header/Header';
import { Link } from 'react-router-dom';
import { firebaseStore } from '../../../store/FsActionStore';
import { observer } from 'mobx-react';

import { homeEditorStore } from '../../../store/HomeEditorStore';
import FolderPopUp from '../../../components/Editor/AddFolder/FolderPopUp/FolderPopUp';
import FolderDisplay from '../../../components/Editor/AddFolder/FolderDisplay/FolderDisplay';
import FloatingButton from '../../../components/Editor/FloatingButton/FloatingButton';
import AddMenu from '../../../components/Editor/AddMenu/AddMenu';
import FilePopUp from '../../../components/Editor/AddFile/FilePopUp/FilePopUp';
import HomeProjects from '../../../components/Common/HomeProjects/HomeProjects';
import HomeFolders from '../../../components/Common/HomeFolders/HomeFolders';
import HomeFiles from '../../../components/Common/HomeFiles/HomeFiles';

@observer export class Home extends React.Component {
    constructor(props:any){
        super(props);
        homeEditorStore.readProject('Projects')
        homeEditorStore.readFolder('Folders')
        homeEditorStore.readArchive('Archives')
        firebaseStore.read();
    }
    render(){
        return <div className="contHome row-flex">  
              
            <Dash/>
 
            <div className="app flex-child col-flex">
            <Header 
            img="./assets/img/logo-positivo-negativo.png"
            fav="./assets/img/star.png"/>
           

            <FloatingButton />
            <AddMenu />      
                <div className="homeInfo col-flex">
                <HomeProjects
                projectArray = {homeEditorStore.projectArray} />
                
                <HomeFolders
                folderArray = {homeEditorStore.folderArray} />
                <HomeFiles 
                img="./assets/img/file.png"
                archiveArray = {homeEditorStore.archiveArray}/>
                </div>
          
            </div>
            <FolderPopUp />
            <FilePopUp /> 


            </div>
    }
}