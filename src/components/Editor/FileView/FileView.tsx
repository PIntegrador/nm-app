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
                <p></p>

                <RouteBar />
                <SortBarArchive />
                {
                    (this.props.folders != null) ? (
                        this.props.folders.map((elem: any) => {
                            return <Folder key={elem.id} id={elem.id} title={elem.name}/>
                        })) : console.log("Como estas")
                }
            </div>
        )
    }
}