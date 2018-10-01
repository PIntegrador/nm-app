import * as React from 'react';

import './AddMenu.scss';
import { observer } from 'mobx-react';
import { homeEditorStore } from '../../../store/HomeEditorStore';

const AddMenu = observer(() => {
    return (
        <section className="addMenu"
            onClick={() => {
                homeEditorStore.addMenuStatus()
            }}
            style={{
                display: homeEditorStore.addMenu === true ? "flex" : "none"
            }}>
            <article><div></div><h1>Subir Carpeta</h1></article>
            <article><div></div><h1>Subir Archivo</h1></article>
            <article onClick={() => {
                homeEditorStore.popUpAddStatus();
            }}><div></div><h1>Crear Carpeta</h1></article>
        </section>
    )
});

export default AddMenu;