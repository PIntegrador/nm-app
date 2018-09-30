import * as React from 'react';

import './Root.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home }  from '../Editor/Home/Home';


export class Root extends React.Component {
    render(){
        return (
            <Router>
                <div>

                    <Route exact path="/" component={Home} />
                    <Route path="/FolderName" component={Home} />

                </div>
            </Router>

        )
    }
}























