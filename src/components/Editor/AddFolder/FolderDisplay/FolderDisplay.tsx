import * as React from 'react';
import './FolderDisplay.scss';
import { observer } from 'mobx-react';

import { homeEditorStore } from '../../../../store/HomeEditorStore';
const FolderDisplay = observer(() => {
    return (
        <section className='folderDisplay'>
            {homeEditorStore.folders.map((elem: any, index: number) =>
                <article className="folder" key={elem}>
                    <article className="name">
                        <div className="fav" style={{
                            background: elem.favorited === false ? "grey" : "yellow"
                        }}></div>
                        <h1>{elem.name}</h1>
                    </article>
                    <span className="description">{elem.description}</span>
                    <article className="tags">
                        <ul>
                            {elem.tagnames.map((tag: any, index: number) =>
                                <li key={tag}>
                                    <span>{tag}</span>
                                </li>
                            )}
                        </ul>
                    </article>
                </article>
            )}
        </section>
    )
});

export default FolderDisplay;