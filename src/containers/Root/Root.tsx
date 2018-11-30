import * as React from 'react';

import './Root.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home }  from '../Editor/Home/Home';
import { FolderContainer } from '../Editor/FolderContainer/FolderContainer';
import { ArchiveContainer } from '../Editor/ArchiveContainer/ArchiveContainer';
import { firebaseStore } from '../../../src/store/FsActionStore';
import { authStore } from '../../../src/store/AuthStore';
import { homeEditorStore } from '../../../src/store/HomeEditorStore';
import Register from '../Register/Register';
import { Login } from '../Login/Login';
import { ProjectContainer } from '../Editor/ProjectContainer/ProjectContainer';


export class Root extends React.Component {
    constructor(props:any){
        super(props);
        firebaseStore.read();
        //
        authStore.signOut();
        homeEditorStore.readProject('Projects');
        homeEditorStore.readFolder('Folders');
        homeEditorStore.readArchive('Archives');
    }

    render(){
        return (
            <Router>
                <div>

                    <Route exact path="/" component={Home} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/folders" component={FolderContainer} />
                    <Route exact path="/projects" component={ProjectContainer} />
                    <Route path="/folders/:folder" component={ArchiveContainer} />

                    {/* FolderContainer is the view for "Mis Archivos",
                    Archive Container is the view inside a folder of "Mis Archivos"*/}
                </div>
            </Router>

        )
    }
}























