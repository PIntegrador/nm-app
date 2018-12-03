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
import { Module } from '../../../components/Editor/Module/Module';
import { element } from 'prop-types';
import SortButton from '../../../components/Editor/SortButton/SortButton';
import ProjectPopUp from '../../../components/Editor/AddProject/AddProject';
import AddProject from '../../../components/Editor/AddProject/AddProject';
import { authStore } from '../../../store/AuthStore';
import UploadConfirmation from '../../../components/Editor/AddMenu/UploadConfirmation/UploadConfirmation';
import { addStore } from '../../../store/AddDataStore';
import { folderInStore } from '../../../store/FolderInStore';
import { SortBarArchive } from '../../../components/Editor/SortBarArchive/SortBarArchive';

interface HomeProps {
    history : any
}

@observer export class Home extends React.Component <HomeProps> {
    constructor(props: any) {
        super(props);

        if(!authStore.isLogged){
            props.history.push ("/");
        } else {

            let uid = authStore.user.uid;
            firebaseStore.uidActual = uid;
            console.log(firebaseStore.uidActual,' userid')
            firebaseStore.readInfoUser();
        }
    }

    render() {
        console.log(firebaseStore.userInfo.email, 'email');
        return <div className="contHome row-flex">
                <Dash state = {homeEditorStore.sideMenuState} selected= {homeEditorStore.selectedMenuItem}/>
                <div className="app flex-child col-flex">
                <Header user={firebaseStore.userInfo.email} state={homeEditorStore.sideMenuState}/>
                <AddMenu />
                <section className="scroll">
                    <div className="homeInfo col-flex">

                    <section className="allCont col-flex">
                      
                        <Link to="/projects">
                            <div className="titleContainer">
                            <div className="ico">
                                <svg width="100%" height="100%" viewBox="0 0 55.2 52.5">
                                    <g>
                                        <path className="modulesAsTitles" d="M51.6,28.2h-8.1c-2,0-3.5,1.5-3.5,3.4v17.1c0,1.9,1.5,3.4,3.5,3.4h8.1c2,0,3.5-1.5,3.5-3.4V31.7
                                            C55.1,29.7,53.6,28.2,51.6,28.2z"/>
                                        <path className="modulesAsTitles" d="M31.6,0.2h-8.1c-2,0-3.5,1.5-3.5,3.4v45.2c0,1.9,1.5,3.4,3.5,3.4h8.1c2,0,3.5-1.5,3.5-3.4V3.6
                                            C35.1,1.7,33.6,0.2,31.6,0.2z"/>
                                        <path className="modulesAsTitles" d="M11.7,17.2H3.6c-2,0-3.5,1.5-3.5,3.4v28.2c0,1.9,1.5,3.4,3.5,3.4h8.1c2,0,3.5-1.5,3.5-3.4V20.6
                                            C15.1,18.7,13.6,17.2,11.7,17.2z"/>
                                    </g>
                                </svg>
                            </div>
                            <h1 >Proyectos</h1>
                            </div>
                        </Link>
                        {
                            (homeEditorStore.sortButState == 'list') ?
                            <SortBarArchive></SortBarArchive> : ''
                        }
                       
                        <div className="flex-child  row-flex moduleCont">
                            {
                                
                                (firebaseStore.userInfo.projects != null) ?
                                  firebaseStore.userInfo.projects.map((elem: any) => {
                                    return (
                                        <Module key={elem.id} gridStyle={homeEditorStore.sortButState} type='project' name={elem.name} numFiles={0} id={elem.id} 
                                        size = {elem.size} date = {elem.date} />
                                    )
                                }) : (e:any)=> {
                                    return <p>No tienes proyectos aún</p>
                                }
                            }
                        </div>

                    </section>

                    <section className="allCont col-flex">
                        <Link to="/folders">
                            <div className="titleContainer">
                            <div className="ico">
                            <svg width="100%" height="100%" viewBox="0 0 55.2 52.5">
                                    <path className="modulesAsTitles"  d="M52.9,13.8c-1.5-1.4-3.2-2.1-5.2-2.1H25.5v-1c0-2-0.7-3.7-2.2-5.1c-1.5-1.4-3.2-2.1-5.2-2.1H7.5
            c-2,0-3.8,0.7-5.2,2.1c-1.5,1.4-2.2,3.1-2.2,5.1v31.3c0,2,0.7,3.7,2.2,5.1c1.5,1.4,3.2,2.1,5.2,2.1h40.2c2,0,3.8-0.7,5.2-2.1
            c1.5-1.4,2.2-3.1,2.2-5.1V18.9C55.1,16.9,54.4,15.2,52.9,13.8z"/>
                                </svg>
                            </div>
                            <h1 >Carpetas</h1>
                            </div>
                        </Link>
                        {
                            (homeEditorStore.sortButState == 'list') ?
                            <SortBarArchive></SortBarArchive> : ''
                        }
                        <div className="flex-child  row-flex moduleCont">
                            {
                                  (firebaseStore.userInfo.archives != null) ?
                                  firebaseStore.userInfo.archives.map((elem: any) => {
                                    if(elem.type == 'folder') 
                                    return (
                                        <Module key={elem.id} gridStyle={homeEditorStore.sortButState} type='folder' name={elem.name} numFiles={0} id={elem.id} 
                                        size = {elem.size} date = {elem.date} />

                                    )
                                }) : ''
                            }
                        </div>

                    </section>

                    <section className="allCont col-flex">
                        <Link to="/files">
                            <div className="titleContainer">
                                <div className="ico">
                                    <svg width="100%" height="100%" viewBox="0 0 55.2 52.5">
                                        <path className="modulesAsTitles" d="M7.1,2.9v46.7c0,1.6,1.3,2.9,2.9,2.9h35.1c1.6,0,2.9-1.3,2.9-2.9V17.2c0-0.8-0.3-1.5-0.8-2L33.6,0.9
                C33,0.3,32.2,0,31.4,0H10.1C8.4,0,7.1,1.3,7.1,2.9z"/>
                                    </svg>
                                </div>  
                                <h1 className="flex-child ">Archivos</h1>

                            </div>                          
                        </Link>
                        {
                            (homeEditorStore.sortButState == 'list') ?
                            <SortBarArchive></SortBarArchive> : ''
                        }
                        <div className="flex-child  row-flex moduleCont">
                            {
                            (firebaseStore.userInfo.archives != null) ?
                                firebaseStore.userInfo.archives.map((elem: any) => {
                                    if(elem.type == 'file') 
                                    return (<Module key={elem.id} gridStyle={homeEditorStore.sortButState} type='file' name={elem.name} numFiles={0} id={elem.id} 
                                    size = {elem.size} date = {elem.date} />
                                    )
                                }) : ''
                             
                            } 
                              
                        </div>

                    </section>

                </div>
                </section>
                <FloatingButton />
                <AddMenu  />
                <FolderPopUp />
                <FilePopUp />
                <AddProject />
                <UploadConfirmation />
                <SortButton state={homeEditorStore.sortButState}/>

            </div>
        </div>
    }
}