import * as React from 'react';

import Dash from '../../../components/Editor/Dash/Dash';

import '../../../../public/css/flex.scss'
import './FileView.scss';
import Header from '../../../components/Common/Header/Header';
import { Link } from 'react-router-dom';
import { Folder } from '../Folder/Folder';

interface FileViewProps {

    folders: any[];
}

export class FileView extends React.Component <FileViewProps> {
    constructor (props : any) {
        super (props);
        
    }
    
    render(){
        return  (
            <div className="contFolder">
            <p> Encontró estos folders </p>
            {
                (this.props.folders != null) ? (
                this.props.folders.map((elem:any) => {
                     return <Folder key={elem.id} title = {elem.name} text = {elem.description} tags = {elem.tagnames} favorited = {elem.favorited}/>
                }) ) : console.log("Como estas")
            }
            </div>
        )
    }
}