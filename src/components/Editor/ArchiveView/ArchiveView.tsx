import * as React from 'react';

import Dash from '../../../components/Editor/Dash/Dash';

import '../../../../public/css/flex.scss'
import './ArchiveView.scss';
import Header from '../../../components/Common/Header/Header';
import { Link } from 'react-router-dom';
import { Archive } from '../Archive/Archive';
import { observer } from 'mobx-react';

interface ArchiveViewProps {
    archives: any[];
}

@observer export class ArchiveView extends React.Component <ArchiveViewProps> {
    constructor (props : any) {
        super (props);
    }
    
    render(){
        
        return  (
            <div className="contArchive">
            <p></p>

            {
                (this.props.archives != null) ? (
                this.props.archives.map((elem:any) => {
                     return <Archive key={elem.id} id={elem.IDD} title = {elem.name} text = {elem.description} tags = {elem.tagnames} favorited = {elem.favorited} upDate = {elem.upDate} modDate = {elem.modDate} size = {elem.size}/>
                }) ) : <p className="noArchives">No hay elementos en esta carpeta</p>
            }
            </div>
        )
    }
}