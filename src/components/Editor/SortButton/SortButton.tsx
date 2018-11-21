import * as React from 'react';

import './SortButton.scss';
import { observer } from 'mobx-react';
import { homeEditorStore } from '../../../store/HomeEditorStore';

interface SortButtonProps {
    state: string;
}

const SortButton = observer(( { state }: SortButtonProps) => {
    return (
        <article className="SortButton" onClick={() => {
            state == 'list' ? homeEditorStore.sortButState = 'grid' : homeEditorStore.sortButState = 'list'
        }}>
        {state== 'list' ? <div className="list" /> : <div className="grid" />}

        </article>
    )
});

export default SortButton;