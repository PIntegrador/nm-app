import * as React from 'react';

import './UploadConfirmation.scss';
import { observer } from 'mobx-react';
import { addStore } from '../../../../store/AddDataStore';

const UploadConfirmation = observer(() => {
    return (
        <section className="uploadConfirmation"
            style={{
                display: addStore.uploadConfirmation === true ? "flex" : "none"
            }}>
            <header>
                <h4>Carga Completa</h4>
                <article
                    className="exit"
                    onClick={() => {
                        addStore.setToFalse();
                    }}>
                    <div></div>
                    <div></div>
                </article>
            </header>
            <article className="uploads">
                <h3>{
                    addStore.recentUpload
                }</h3>
                <article
                    className="exit"
                    onClick={() => {
                        addStore.setToFalse();
                    }}>
                    <div></div>
                    <div></div>
                </article>
            </article>
        </section>
    )
});

export default UploadConfirmation;