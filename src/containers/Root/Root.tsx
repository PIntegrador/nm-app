import * as React from 'react';

import './Root.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home }  from '../Editor/Home/Home';
import { FolderContainer } from '../Editor/FolderContainer/FolderContainer';
import { ArchiveContainer } from '../Editor/ArchiveContainer/ArchiveContainer';
import { firebaseStore } from '../../../src/store/FsActionStore';
import { homeEditorStore } from '../../../src/store/HomeEditorStore';


export class Root extends React.Component {
    constructor(props:any){
        super(props);
        firebaseStore.read();
        homeEditorStore.readProject('Projects')
        homeEditorStore.readFolder('Folders')
        homeEditorStore.readArchive('Archives')
        }

    render(){
        return (
            <Router>
                <div>

                    <Route exact path="/" component={Home} />
                    <Route exact path="/folders" component={FolderContainer} />
                    <Route path="/folders/:folder" component={ArchiveContainer} />
                </div>
            </Router>

        )
    }
}























