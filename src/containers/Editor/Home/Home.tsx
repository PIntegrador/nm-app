import * as React from 'react';

import Searchbar from '../../../components/Editor/Searchbar/Searchbar';
import SearchResults from '../../../components/Editor/SearchResults/SearchResults';
import Dash from '../../../components/Editor/Dash/Dash';

import '../../../../public/css/flex.scss'
import './Home.scss';

export class Home extends React.Component {
    render(){
        return <div className="contHome row-flex">  
            <Dash/>
            <div className="app flex-child col-flex">
           <Searchbar/>
            <SearchResults />
            </div>
           
        </div>
    }
}























