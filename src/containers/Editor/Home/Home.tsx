import * as React from 'react';

import Searchbar from '../../../components/Editor/Searchbar/Searchbar';
import SearchResults from '../../../components/Editor/SearchResults/SearchResults';
import Dash from '../../../components/Editor/Dash/Dash';

import '../../../../public/css/flex.scss'
import './Home.scss';
import Header from '../../../components/Common/Header/Header';

import { homeEditorStore } from '../../../store/HomeEditorStore';
import FolderAddButton from '../../../components/Editor/AddFolder/FolderAddButton/FolderAddButton';
import FolderPopUp from '../../../components/Editor/AddFolder/FolderPopUp/FolderPopUp';

export class Home extends React.Component {
    render(){
        return <div className="contHome row-flex">  
            <Dash/>
            <Header 
            img="./assets/img/logo.png"/>

            <div className="app flex-child col-flex">
            <h2>Aqui van componentes que hacen la vista del inicio</h2>
            </div>

            <FolderAddButton />
            <FolderPopUp />       
        </div>
    }
}























