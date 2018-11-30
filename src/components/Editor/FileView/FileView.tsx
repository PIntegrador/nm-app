import * as React from 'react';

import Dash from '../../../components/Editor/Dash/Dash';

import '../../../../public/css/flex.scss'
import './FileView.scss';
import Header from '../../../components/Common/Header/Header';
import { Link } from 'react-router-dom';
import { Folder } from '../Folder/Folder';
import { observer } from 'mobx-react';
import RouteBar from '../../../components/Editor/RouteBar/RouteBar';
import SortBar from '../../../components/Editor/SortBar/SortBar';
import { SortBarArchive } from '../SortBarArchive/SortBarArchive';
import { homeEditorStore } from '../../../store/HomeEditorStore';
import { Module } from '../../../components/Editor/Module/Module';

interface FileViewProps {

    folders: any[];
}

@observer export class FileView extends React.Component<FileViewProps> {
    constructor(props: any) {
        super(props);
    }

    render() {

        return (
            <div className="contFolder">

                <RouteBar mainTitle="Mis Archivos" folderName={""} />
                {(homeEditorStore.sortButState == 'list')?<SortBarArchive />:""}
                <div className="flex-child  row-flex moduleCont">
                    <p></p>
                    {
                        (this.props.folders != null) ? (
                            this.props.folders.map((elem: any) => {
                                return <Module key={elem.id} gridStyle={homeEditorStore.sortButState} type='folder' name={elem.name} numFiles={0} id={elem.id} />
                            })) : console.log("Como estas")
                    }
                </div>
            </div>
        )
    }
}