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
    constructor(props: any) {
        super(props);
        //
        homeEditorStore.readProject('Projects');
        homeEditorStore.readFolder('Folders');
        homeEditorStore.readArchive('Archives');
    }
    
    render() {
        return <div className="contHome row-flex">

            <Dash />

            <div className="app flex-child col-flex">
                <Header />

                <FloatingButton />
                <AddMenu />
                <div className="homeInfo col-flex">

                    <section className="allCont col-flex">
                        <h1 className="flex-child ">Proyectos</h1>
                        <div className="flex-child  row-flex projectsCont">

                            {
                                homeEditorStore.projectArray.map((elem: any) => {
                                    return (
                                        <HomeProjects id={elem.id} name={elem.name} />)
                                })

                            }
                        </div>

                    </section>

                    <section className="allCont col-flex">
                        <Link to="/folders">
                            <h1 className="flex-child ">Carpetas</h1></Link>
                        <div className="flex-child  row-flex foldersCont">

                            {
                                homeEditorStore.folderArray.map((elem: any) => {
                                    return (
                                        <HomeFolders name={elem.name} numFiles={elem.archives.length} id={elem.id} />
                                    )
                                })

                            }

                        </div>

                    </section>


                    <section className="allCont col-flex">
                        <h1 className="flex-child ">Archivos</h1>
                        <div className="flex-child  row-flex filesCont">
                            {
                                homeEditorStore.archiveArray.map((elem: any) => {
                                    return (<HomeFiles img="./assets/img/file.png" id={elem.id} name={elem.name} />)
                                })

                            }

                        </div>

                    </section>

                </div>

            </div>
            <FolderPopUp />
            <FilePopUp />


        </div>
    }
}