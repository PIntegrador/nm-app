import * as React from 'react';

import './AddMenu.scss';
import { observer } from 'mobx-react';
import { addStore } from '../../../store/AddDataStore';

interface AddMenuProps {
    idLocation: string;
}

const AddMenu = observer(({ idLocation }: AddMenuProps) => {
    return (
        <section className="addMenu"
            onClick={() => {
                addStore.addMenuStatus();
            }}
            style={{
                display: addStore.addMenu === true ? "flex" : "none"
            }}>
            <article onClick={() => {
                addStore.filePopUpAddStatus();
            }}>
                <img src="./assets/svg/subirContenido.svg" alt="Nubir Contenido" />
                <h1>Subir Contenido</h1>
            </article>
            <hr/>
            <article onClick={() => {
                addStore.folderPopUpAddStatus();
            }}>
                <img src="./assets/svg/nuevaCarpeta.svg" alt="Nueva Carpeta" />
                <h1>Nueva Carpeta</h1>
            </article>
            <hr/>
            <article onClick={() => {
                addStore.projectPopUpAddStatus();
            }}>
                <img src="./assets/svg/nuevoProyecto.svg" alt="Nuevo Proyecto" />
                <h1>Nuevo Proyecto</h1>
            </article>
        </section>
    )
});

export default AddMenu;