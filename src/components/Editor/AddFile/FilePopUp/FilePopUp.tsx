import * as React from 'react';
import './FilePopUp.scss';
import { observer } from 'mobx-react';
import DropZone from '../DropZone/DropZone'

import { addStore } from '../../../../store/AddDataStore';
const FilePopUp = observer(() => {
    return (
        <section className='modalFileAdd modal'
            style={{
                display: addStore.filePopUpAdd === true ? "flex" : "none"
            }}
        >
            <article className="popUp">
                <article className="exit" onClick={() => {
                    addStore.filePopUpAddStatus();
                    addStore.clearTags();
                    const myForm: HTMLFormElement = document.querySelector("#createFileForm");
                    myForm.reset();
                    addStore.accepted = [];
                    addStore.rejected = [];
                }}><div></div><div></div></article>
                <h1>Importar Base de Datos</h1>
                <DropZone />
                <form id="createFileForm" onSubmit={(e: any) => {
                    e.preventDefault();
                    if (typeof addStore.accepted[0] != "undefined") {
                        addStore.uploadNewFile(addStore.accepted[0]);
                        addStore.addNewFile();
                        addStore.clearFile();
                        addStore.clearTags();
                        addStore.filePopUpAddStatus();
                        addStore.accepted = [];
                        const myForm: HTMLFormElement = document.querySelector("#createFolderForm");
                        myForm.reset();
                    } else {
                        alert("It must be a valid file type (.csv)")
                    }
                }}>
                    <ul>
                        <li>
                            <label>Nombre</label>
                            <input type="text" name="archivo" placeholder="Archivo.csv" value={
                                (typeof addStore.accepted[0] != 'undefined') ? addStore.accepted[0].name : ""
                            } disabled />
                        </li>
                        <li style={{ display: "none" }} >
                            <label>Nombre</label>
                            <input type="text" name="nombre" placeholder="Nombre" onChange={(e: any) => {
                                addStore.newFile.name = e.target.value;
                            }} value={
                                (typeof addStore.accepted[0] != 'undefined') ? addStore.accepted[0].name : ""
                            } />
                        </li>
                        <li className="descripcion">
                            <label>Descipción</label>
                            <textarea rows={5} name="descipcion" placeholder="Descripción de la base de datos" onChange={(e: any) => {
                                addStore.newFile.description = e.target.value;
                            }}></textarea>
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
                            />
                            <label className="tagAmount"><b>{
                                3 - addStore.tags.length
                            }</b>/3</label>

                        </li>
                        <button
                            onClick={() => {
                                addStore.newFile.tagnames = addStore.tags;
                                addStore.newFile.size = addStore.accepted[0].size / 1000 + "Kb";
                                addStore.newFile.name = addStore.accepted[0].name;
                                addStore.confirmUpload("Archivo", addStore.newFile.name);
                                function upload() {
                                    addStore.setToFalse()
                                }
                                setTimeout(upload, 12000);
                            }} type="submit">IMPORTAR</button>
                    </ul>
                </form>

            </article>
        </section>
    )
});
export default FilePopUp;
