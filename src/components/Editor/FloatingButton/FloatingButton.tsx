import * as React from 'react';

import './FloatingButton.scss';
import { observer } from 'mobx-react';
import { homeEditorStore } from '../../../store/HomeEditorStore';

const FloatingButton = observer(() => {
    return (
        <article className="floatingButton" onClick={() => {
          //  homeEditorStore.addMenuStatus();
        }}>
            <div></div>
            <div></div>
        </article>
    )
});

export default FloatingButton;