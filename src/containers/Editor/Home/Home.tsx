import * as React from 'react';

import Searchbar from '../../../components/Editor/Searchbar/Searchbar';
import SearchResults from '../../../components/Editor/SearchResults/SearchResults';
import Dash from '../../../components/Editor/Dash/Dash';

import '../../../../public/css/flex.scss'
import './Home.scss';
import Header from '../../../components/Common/Header/Header';
import HomeProjects from '../../../components/Common/HomeProjects/HomeProjects';
import HomeFolders from '../../../components/Common/HomeFolders/HomeFolders';
import HomeFiles from '../../../components/Common/HomeFiles/HomeFiles';

import {homeEditorStore} from '../../../store/HomeEditorStore'
import { observer } from 'mobx-react';

@observer export class Home extends React.Component {
    constructor(props:any){
        super(props);
        homeEditorStore.readProject('Projects')
        homeEditorStore.readFolder('Folders')
        homeEditorStore.readArchive('Archives')
    }
    render(){
        return <div className="contHome row-flex">  
            <Dash/>
            <Header 
            img="./assets/img/logo.png"/>
            <div className="app flex-child col-flex">
            <HomeProjects
            projectArray = {homeEditorStore.projectArray} />
            <HomeFolders
            folderArray = {homeEditorStore.folderArray} />
            <HomeFiles 
             img="./assets/img/file.png"
             archiveArray = {homeEditorStore.archiveArray}/>
            </div>
        </div>
    }
}























