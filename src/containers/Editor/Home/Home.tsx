import * as React from 'react';

import Searchbar from '../../../components/Editor/Searchbar/Searchbar';
import SearchResults from '../../../components/Editor/SearchResults/SearchResults';
import Dash from '../../../components/Editor/Dash/Dash';

import '../../../../public/css/flex.scss'
import './Home.scss';
import Header from '../../../components/Common/Header/Header';
import { Link } from 'react-router-dom';
import { firebaseStore } from '../../../store/FsActionStore';

export class Home extends React.Component {
    constructor (props:any) {
        super (props);

        firebaseStore.read();

    }
    render(){
        return <div className="contHome row-flex">  
            <Dash/>
            <Header 
            img="./assets/img/logo.png"/>

            <div className="app flex-child col-flex">
                <Link to = "FolderName"> 
                    <div className="folder2" >
                    </div>
                </Link>
            </div>
           
        </div>
    }
}