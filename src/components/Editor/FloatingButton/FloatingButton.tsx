import * as React from 'react';

import './FloatingButton.scss';
import { observer } from 'mobx-react';
import { addStore } from '../../../store/AddDataStore';

const FloatingButton = observer(() => {
    return (
        <article className="floatingButton" onClick={() => {
            addStore.addMenuStatus();
        }}>
            <div></div>
            <div></div>
        </article>
    )
});

export default FloatingButton;