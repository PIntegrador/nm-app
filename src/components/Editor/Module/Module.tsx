import * as React from 'react';
import './Module.scss';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { moduleStore } from '../../../store/ModuleStore';

interface ModuleProps {
    type: string;
    name: string;
    numFiles: number;
    id: any;
    gridStyle: string;
}

@observer export class Module extends React.Component<ModuleProps> {
    constructor(props: any) {
        super(props)
    }

    onDragEnd = (ev: any) => {
        ev.preventDefault();
        console.log("Soltado " + moduleStore.idTemp);
        moduleStore.idTemp = "";
    }

    onDragStart = (ev: any, id: string) => {
        moduleStore.idTemp = this.props.id;
        console.log("Dragging " + moduleStore.idTemp);
    }

    onDragOver = (ev: any) => {
        ev.preventDefault();
    }

    onDrop = (ev: any, idFolder:string) => {
        ev.preventDefault();
        moduleStore.idToFolder = this.props.id;
        moduleStore.moveToFolderById();
        console.log("Drop Folder " + idFolder);
        console.log("Drop File " + moduleStore.idTemp);
    }

    assignGridStyle() {
        if (this.props.gridStyle == 'grid') {
            return (
                <article draggable onDragEnd={(e) => this.onDragEnd(e)} onDragStart={(e) => this.onDragStart(e, this.props.id)} onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => this.onDrop(e, this.props.id)} key={this.props.id} className="flex-child row-flex moduleGrid">
                    <div className="flex-child  moduleIconCont col-flex">
                        {this.assignIcon()}
                    </div>
                    <h3 className="flex-child  moduleName">{(this.props.name.substring(0, 25)) + (this.props.name.length >= 25 ? '...' : '')}</h3>
                </article>
            )
        } else {
            return (
                <article draggable onDragEnd={(e) => this.onDragEnd(e)} onDragStart={(e) => this.onDragStart(e, this.props.id)} onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => this.onDrop(e, this.props.id)} key={this.props.id} className="flex-child row-flex moduleList">
                    <div className="nameCont">
                        <div className="flex-child moduleIconCont col-flex">
                            {this.assignIcon()}
                        </div>
                        <h3 className="flex-child moduleName moduleListText">{(this.props.name.substring(0, 25)) + (this.props.name.length >= 25 ? '...' : '')}</h3>
                    </div>
                    <div className="sizeCont">
                        <p className="moduleListText">-- Kb</p>
                    </div>
                    <div className="modifDateCont">
                        <p className="moduleListText">--</p>
                    </div>
                    <div className="fileTypeCont">
                        <p className="moduleListText">--</p>
                    </div>
                    <div className="creationDateCont">
                        <p className="moduleListText">--</p>
                    </div>
                </article>
            )
        }
    }

    assignIcon() {
        if (this.props.type == 'project') {
            //'project'
            return (<img className="moduleIcon" src="/assets/svg/modules/project.svg" />)
        } else if (this.props.type == 'folder') {
            //'folder'
            return (<img className="moduleIcon" src="/assets/svg/modules/folder.svg" />)
        } else if (this.props.type == 'file') {
            //'file'
            return (<img className="moduleIcon" src="/assets/svg/modules/file.svg" />)

        }
    }

    cutName(nameTest: string) {
        console.log("readding")
        nameTest.substring(0, 3)
        return nameTest;
    }

    render() {

        return (
            <Link to={`/${this.props.type}s/${this.props.id}`} className={this.props.gridStyle == 'list' ? 'superCont' : ''}>
                {this.assignGridStyle()}
            </Link>
        )
    }
}


