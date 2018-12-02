import * as React from 'react';

import './DeleteButton.scss';
import { observer } from 'mobx-react';
import { moduleStore } from '../../../store/ModuleStore';

const DeleteButton = observer(() => {

    this.onDragOver = (ev:any) => {
        ev.preventDefault();
    }
    
    this.onDrop = (ev:any) => {
        ev.preventDefault();
        moduleStore.deleteFileByID();
        console.log("Drop " + moduleStore.idTemp);
    }

    return (
        <article onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => this.onDrop(e)} className="buttonDelete" onClick={(e) => {
            e.preventDefault();
        }}>
            <img src="/assets/svg/ui/borrar.svg" alt=""/>
        </article>
    )
});

export default DeleteButton;