import * as React from 'react';

import Searchbar from '../../../components/Editor/Searchbar/Searchbar';
import SearchResults from '../../../components/Editor/SearchResults/SearchResults';
import Dash from '../../../components/Editor/Dash/Dash';

import '../../../../public/css/flex.scss'
import './Home.scss';
import Header from '../../../components/Common/Header/Header';

import { homeEditorStore } from '../../../store/HomeEditorStore';
import FolderPopUp from '../../../components/Editor/AddFolder/FolderPopUp/FolderPopUp';
import FolderDisplay from '../../../components/Editor/AddFolder/FolderDisplay/FolderDisplay';
import FloatingButton from '../../../components/Editor/FloatingButton/FloatingButton';
import AddMenu from '../../../components/Editor/AddMenu/AddMenu';
import FilePopUp from '../../../components/Editor/AddFile/FilePopUp/FilePopUp';

export class Home extends React.Component {
    render(){
        return <div className="contHome row-flex">  
            <Dash/>
            <Header 
            img="./assets/img/logo.png"/>

            <div className="app flex-child col-flex">
                <FolderDisplay />
            </div>

            <FloatingButton />
            <FolderPopUp />
            <FilePopUp /> 
            <AddMenu />      
        </div>
    }
}























