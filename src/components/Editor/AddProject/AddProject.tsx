import * as React from 'react';
import './AddProject.scss';
import { observer } from 'mobx-react';

import { homeEditorStore } from '../../../store/HomeEditorStore';
const AddProject = observer(() => {
    return (
        <section className='modalProjectAdd modal'
            style={{
               // display: homeEditorStore.projectPopUpAdd === true ? "flex" : "none"
            }}
        >
            <article className="popUp">
                <article className="exit" onClick={() => {
                 /*   homeEditorStore.projectPopUpAddStatus()
                    homeEditorStore.clearTags()
                    const myForm: HTMLFormElement = document.querySelector("#createFolderForm");
                    myForm.reset();*/
                }}><div></div><div></div></article>
                <h1>Crear Nuevo Proyecto</h1>
                <form id="createFolderForm" onSubmit={(e: any) => {
                    e.preventDefault();
                  /*  homeEditorStore.newProject.tagnames = homeEditorStore.tags;
                    homeEditorStore.projectPopUpAddStatus();
                    homeEditorStore.addNewProject();
                    homeEditorStore.clearTags();
                    homeEditorStore.clearProject();
                    const myForm: HTMLFormElement = document.querySelector("#createFolderForm");
                    myForm.reset();*/
                }}>
                    <ul>
                        <li>
                            <label>Nombre</label>
                            <input type="text" name="nombre" placeholder="Nombre del Proyecto"
                                onChange={(e: any) => {
                           //         homeEditorStore.newProject.name = e.target.value;
                                }} />
                        </li>
                        <li>
                            <label>Descipción</label>
                            <input type="text" name="descipcion" placeholder="Descripción del Contenido del Proyecto"
                                onChange={(e: any) => {
                             //       homeEditorStore.newProject.description = e.target.value;
                                }} />
                        </li>
                        <li className="tags">
                            <label>Etiquetas</label>
                            <ul>
                                {/*homeEditorStore.tags.map((elem: any, index: number) =>
                                    <li key={elem} style={{
                                        display: elem.length >= 1 ? "flex" : "none"
                                    }}>
                                        <span>{elem}</span>
                                        <p onClick={() => {
                                            homeEditorStore.eliminateTag(elem);
                                            console.log(elem);
                                        }}>×</p>
                                    </li>
                                    )*/}

                            </ul>
                            <input type="text" name="etiquetas" placeholder="Etiquetas"
                                onChange={(e: any) => {
                                  //  homeEditorStore.addTags(e.target.value + " ");
                                }}
                                onEmptied={() => {
                                 //   homeEditorStore.clearTags();
                                }}
                            //value={homeEditorStore.tags.join(" ") == this.value ?  this.value : homeEditorStore.tags.join("")}
                            />
                            <label className="tagAmount"><b>{
                                //3 - homeEditorStore.tags.length
                            }</b>/3</label>

                        </li>
                        <li>
                            <button type="reset" onClick={() => {
                            //    homeEditorStore.clearTags()
                            }}>RESET</button>
                            <button 
                            onClick={() => {
                                // ----- TESTING ------
                              /*  homeEditorStore.confirmUpload("Proyecto", homeEditorStore.newProject.name);
                                function upload() {
                                    homeEditorStore.setToFalse()
                                }
                                setTimeout(upload, 12000);
                                // ----- TESTING ------*/
                            }}type="submit">CREAR</button>
                        </li>
                    </ul>
                </form>
            </article>
        </section>
    )
});

export default AddProject;