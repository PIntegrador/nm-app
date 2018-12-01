import * as React from 'react';

import './UploadConfirmation.scss';
import { observer } from 'mobx-react';
import { homeEditorStore } from '../../../../store/HomeEditorStore';

const UploadConfirmation = observer(() => {
    return (
        <section className="uploadConfirmation"
            style={{
              //  display: homeEditorStore.uploadConfirmation === true ? "flex" : "none"
            }}>
            <header>
                <h4>Carga Completa</h4>
                <article
                    className="exit"
                    onClick={() => {
                   //     homeEditorStore.setToFalse();
                    }}>
                    <div></div>
                    <div></div>
                </article>
            </header>
            <article className="uploads">
                <h3>{
                    //homeEditorStore.recentUpload
                }</h3>
                <article
                    className="exit"
                    onClick={() => {
                      //  homeEditorStore.setToFalse();
                    }}>
                    <div></div>
                    <div></div>
                </article>
            </article>
        </section>
    )
});

export default UploadConfirmation;