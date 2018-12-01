import * as React from 'react';
import './FolderPopUp.scss';
import { observer } from 'mobx-react';

import { addStore } from '../../../../store/AddDataStore';
const FolderPopUp = observer(() => {
    return (
        <section className='modalFolderAdd modal'
            style={{
               display: addStore.folderPopUpAdd === true ? "flex" : "none"
            }}
        >
            <article className="popUp">
                <article className="exit" onClick={() => {
                  addStore.folderPopUpAddStatus()
                    addStore.clearTags()
                    const myForm: HTMLFormElement = document.querySelector("#createFolderForm");
                    myForm.reset();
                }}><div></div><div></div></article>
                <h1>Crear Nueva Carpeta</h1>
                <form id="createFolderForm" onSubmit={(e: any) => {
                    e.preventDefault();
                    addStore.newFolder.tagnames = addStore.tags;
                    addStore.folderPopUpAddStatus();
                    addStore.addNewFolder();
                    addStore.clearTags();
                    addStore.clearFolder();
                    const myForm: HTMLFormElement = document.querySelector("#createFolderForm");
                    myForm.reset();
                }}>
                    <ul>
                        <li>
                            <label>Nombre</label>
                            <input type="text" name="nombre" placeholder="Nombre de la Carpeta" onChange={(e: any) => {
                                addStore.newFolder.name = e.target.value;
                            }} />
                        </li>
                        <li className="tags">
                            <label>Etiquetas</label>
                            <ul>
                                {addStore.tags.map((elem: any, index: number) =>
                                    <li key={elem} style={{
                                        display: elem.length >= 1 ? "flex" : "none"
                                    }}>
                                        <span>{elem}</span>
                                        <p onClick={() => {
                                            addStore.eliminateTag(elem);
                                            console.log(elem);
                                        }}>×</p>
                                    </li>
                                    )}

                            </ul>
                            <input type="text" name="etiquetas" placeholder="Etiquetas"
                                onChange={(e: any) => {
                                   addStore.addTags(e.target.value + " ");
                                }}
                                onEmptied={() => {
                                    addStore.clearTags();
                                }}
                            value={addStore.tags.join(" ") == this.value ?  this.value : addStore.tags.join("")}
                            />
                            <label className="tagAmount"><b>{
                              3 - addStore.tags.length
                            }</b>/3</label>

                        </li>
                        <li>
                            <button type="reset" onClick={() => {
                               addStore.clearTags()
                            }}>RESET</button>
                            <button
                                onClick={() => {
                                    // ----- TESTING ------
                                   addStore.confirmUpload("Carpeta", addStore.newFolder.name);
                                    function upload() {
                                        addStore.setToFalse()
                                    }
                                    setTimeout(upload, 12000);
                                    // ----- TESTING ------
                                }} type="submit">CREAR</button>
                        </li>
                    </ul>
                </form>
            </article>
        </section>
    )
});

export default FolderPopUp;