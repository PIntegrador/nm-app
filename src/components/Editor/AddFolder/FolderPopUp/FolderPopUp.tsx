import * as React from 'react';
import './FolderPopUp.scss';
import { observer } from 'mobx-react';

import { homeEditorStore } from '../../../../store/HomeEditorStore';
const FolderPopUp = observer(() => {
    return (
        <section className='modalFolderAdd'
            style={{
                display: homeEditorStore.folderPopUpAdd === true ? "flex" : "none"
            }}
        >
            <article className="popUp">
                <article className="exit" onClick={() => {
                    homeEditorStore.folderPopUpAddStatus()
                    homeEditorStore.clearTags()
                    const myForm:HTMLFormElement  = document.querySelector("#createFolderForm");
                    myForm.reset();
                }}><div></div><div></div></article>
                <h1>Crear Nueva Carpeta</h1>
                <form  id="createFolderForm" onSubmit={(e) => {
                    e.preventDefault();
                    homeEditorStore.newFolder.tagnames = homeEditorStore.tags;
                    homeEditorStore.folderPopUpAddStatus();
                    homeEditorStore.addNewFolder();
                    homeEditorStore.clearTags();
                    homeEditorStore.clearFolder();
                    const myForm:HTMLFormElement  = document.querySelector("#createFolderForm");
                    myForm.reset();
                }}>
                    <ul>
                        <li>
                            <label>Archivos</label>
                            <input required type="text" name="archivo" placeholder="Archivos.csv" />
                        </li>
                        <li>
                            <label>Nombre</label>
                            <input required type="text" name="nombre" placeholder="Nombre de la Carpeta" onChange={(e) => {
                                homeEditorStore.newFolder.name = e.target.value;
                            }} />
                        </li>
                        <li>
                            <label>Descipción</label>
                            <input required type="text" name="descipcion" placeholder="Descripción del Contenido de la Carpeta" onChange={(e) => {
                                homeEditorStore.newFolder.description = e.target.value;
                            }} />
                        </li>
                        <li className="tags">
                            <label>Etiquetas</label>
                            <ul>
                                {homeEditorStore.tags.map((elem: any, index: number) =>
                                    <li key={elem} style={{
                                        display: elem.length >= 1 ? "flex" : "none"
                                    }}>
                                        <span>{elem}</span>
                                        <p onClick={() => {
                                            homeEditorStore.eliminateTag(elem);
                                            console.log(elem);
                                        }}>×</p>
                                    </li>
                                )}

                            </ul>
                            <input required type="text" name="etiquetas" placeholder="Etiquetas"
                                onChange={(e) => {
                                    homeEditorStore.addTags(e.target.value + " ");
                                }}
                                onEmptied={() => {
                                    homeEditorStore.clearTags();
                                }}
                            //value={homeEditorStore.tags.join(" ") == this.value ?  this.value : homeEditorStore.tags.join("")}
                            />
                            <label className="tagAmount"><b>{3 - homeEditorStore.tags.length}</b>/3</label>

                        </li>
                        <li>
                            <button type="reset" onClick={() => {
                                homeEditorStore.clearTags()
                                }}>RESET</button>
                            <button type="submit">CREAR</button>
                        </li>
                    </ul>
                </form>
            </article>
        </section>
    )
});

export default FolderPopUp;