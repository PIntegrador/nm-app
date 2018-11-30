import * as React from 'react';

import Dash from '../../../components/Editor/Dash/Dash';

import '../../../../public/css/flex.scss'
import './ArchiveView.scss';
import Header from '../../../components/Common/Header/Header';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { homeEditorStore } from '../../../store/HomeEditorStore';
import { Module } from '../../../components/Editor/Module/Module';
import RouteBar from '../../../components/Editor/RouteBar/RouteBar';
import { SortBarArchive } from '../../../components/Editor/SortBarArchive/SortBarArchive';

interface ArchiveViewProps {
    archives: any[];
    folders: any[];
    folderName: string;
}

@observer export class ArchiveView extends React.Component<ArchiveViewProps> {
    constructor(props: any) {
        super(props);
    }

    render() {

        return (
            <div className="contArchive">
                <RouteBar folderName={this.props.folderName} />
                {(homeEditorStore.sortButState == 'list')?<SortBarArchive />:""}
                <div className="flex-child  row-flex moduleCont">
                    <p></p>

                    {
                        (this.props.archives != null) ? (
                            this.props.archives.map((elem: any) => {
                                return <Module key={elem.id} gridStyle={homeEditorStore.sortButState} type='file' name={elem.name} numFiles={0} id={elem.id} />
                            })) : <section className="noArchives">
                                <div className="cont">
                                    <img src="/assets/svg/modules/file.svg" alt="" />
                                    <p>No hay elementos en esta carpeta</p>
                                </div>
                            </section>
                    }
                </div>
            </div>
        )
    }
}