import * as React from 'react';

import './AddMenu.scss';
import { observer } from 'mobx-react';
import { addStore } from '../../../store/AddDataStore';

const AddMenu = observer(() => {
    return (
        <section className="addMenu"
            onClick={() => {
               addStore.addMenuStatus()
            }}
            style={{
               display: addStore.addMenu === true ? "flex" : "none"
            }}>
            <article onClick={() => {
                addStore.filePopUpAddStatus();
            }}><div></div><h1>Subir Archivo</h1></article>
            <article onClick={() =>{
                addStore.folderPopUpAddStatus();
            }}><div></div><h1>Crear Carpeta</h1></article>
            <hr/>
            <article onClick={() => {
                addStore.projectPopUpAddStatus();
            }}><div></div><h1>Crear Proyecto</h1></article>
        </section>
    )
});

export default AddMenu;