import * as React from 'react';
import './FilePopUp.scss';
import { observer } from 'mobx-react';
import DropZone from '../DropZone/DropZone'

import { homeEditorStore } from '../../../../store/HomeEditorStore';
const FilePopUp = observer(() => {
    return (
        <section className='modalFileAdd'
            style={{
                display: homeEditorStore.filePopUpAdd === true ? "flex" : "none"
            }}
        >
            <article className="popUp">
                <article className="exit" onClick={() => {
                    homeEditorStore.filePopUpAddStatus();
                    homeEditorStore.clearTags();
                    const myForm:HTMLFormElement  = document.querySelector("#createFileForm");
                    myForm.reset();
                    homeEditorStore.accepted= [];
                    homeEditorStore.rejected= [];
                }}><div></div><div></div></article>
                <h1>Importar Base de Datos</h1>
                <DropZone />
                <form id="createFileForm" onSubmit={(e) => {
                    e.preventDefault();
                    if(typeof homeEditorStore.accepted[0] != "undefined"){
                        homeEditorStore.newFile.tagnames = homeEditorStore.tags;
                        homeEditorStore.newFile.extension = "."+homeEditorStore.accepted[0].name.substring(homeEditorStore.accepted[0].name.lastIndexOf('.')+1)
                        homeEditorStore.newFile.size = homeEditorStore.accepted[0].size/1000 + "Kb"
                        homeEditorStore.getDate();
                        homeEditorStore.newFile.creationDate = homeEditorStore.today;
                        homeEditorStore.uploadNewFile(homeEditorStore.accepted[0]);
                        homeEditorStore.addNewFile();
                        homeEditorStore.clearFile();
                        homeEditorStore.clearTags();
                        homeEditorStore.filePopUpAddStatus();
                        homeEditorStore.accepted= [];
                        const myForm:HTMLFormElement  = document.querySelector("#createFolderForm");
                        myForm.reset();
                    } else {
                        alert("It must be a valid file type (.csv)")
                    }
                }}>
                    <ul>
                        <li>
                            <label>Archivo</label>
                            <input required type="text" name="archivo" placeholder="Archivo.csv" value={
                                (typeof homeEditorStore.accepted[0] != 'undefined') ? homeEditorStore.accepted[0].name : ""} disabled />
                            <button disabled >Subir Archivo</button>
                        </li>
                        <li>
                            <label>Nombre</label>
                            <input required type="text" name="nombre" placeholder="Nombre" onChange={(e)=>{
                                homeEditorStore.newFile.name = e.target.value;
                            }}/>
                        </li>
                        <li>
                            <label>Descipción</label>
                            <input required type="text" name="descipcion" placeholder="Descripción de la base de datos" onChange={(e)=>{
                                homeEditorStore.newFile.description = e.target.value;
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
                            />
                            <label className="tagAmount"><b>{3 - homeEditorStore.tags.length}</b>/3</label>

                        </li>
                        <button type="submit">IMPORTAR</button>
                    </ul>
                </form>

            </article>
        </section>
    )
});
export default FilePopUp;
