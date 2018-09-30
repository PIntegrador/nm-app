import * as React from 'react';

import './FolderAddButton.scss';
import { observer } from 'mobx-react';
import { homeEditorStore } from '../../../../store/HomeEditorStore';

const FolderAddButton = observer(() => {
    return (
        <article className="addFolder" onClick={() => {homeEditorStore.popUpAddStatus()}}>
                <div></div>
                <div></div>
            </article>  
    )
});

export default FolderAddButton;