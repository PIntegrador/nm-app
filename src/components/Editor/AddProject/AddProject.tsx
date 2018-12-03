import * as React from 'react';
import './AddProject.scss';
import { observer } from 'mobx-react';

import { addStore } from '../../../store/AddDataStore';
const AddProject = observer(() => {
    return (
        <section className='modalProjectAdd modal'
            style={{
                display: addStore.projectPopUpAdd === true ? "flex" : "none"
            }}
        >
            <article className="popUp">
                <article className="exit" onClick={() => {
                    addStore.projectPopUpAddStatus()
                    addStore.clearTags()
                    const myForm: HTMLFormElement = document.querySelector("#createProjectForm");
                    myForm.reset();
                }}><div></div><div></div></article>
                <h1>Crear Nuevo Proyecto</h1>
                <form id="createProjectForm" onSubmit={(e: any) => {
                    e.preventDefault();
                    addStore.newProject.tagnames = addStore.tags;
                    addStore.projectPopUpAddStatus();
                    addStore.addNewProject();
                    addStore.clearTags();
                    addStore.clearProject();
                    const myForm: HTMLFormElement = document.querySelector("#createProjectForm");
                    myForm.reset();
                }}>
                    <ul>
                        <li>
                            <label>Nombre</label>
                            <input type="text" name="nombre" placeholder="Nombre del Proyecto"
                                onChange={(e: any) => {
                                    addStore.newProject.name = e.target.value;
                                }} />
                        </li>
                        <li className="descripcion" >
                            <label>Descipción</label>
                            <textarea cols={5} name="descipcion" placeholder="Descripción del Contenido del Proyecto"
                                onChange={(e: any) => {
                                    addStore.newProject.description = e.target.value;
                                }}>
                            </textarea>
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
                        <li>
                            <button
                                onClick={() => {
                                    // ----- TESTING ------
                                    addStore.confirmUpload("Proyecto", addStore.newProject.name);
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

export default AddProject;