import * as React from 'react';

import '../../../../public/css/flex.scss'

interface FolderProps {
    title: string;
    text?: string;
    tags: any[];
    favorited: boolean;
}

export const Folder = ({ title, text, tags, favorited }: FolderProps) => {
    return (
        <article className="folder">
            <div className="elemsTitle">
            <div className="favorite">
                <img src="./assets/img/star.png"/>
            </div>
            <h2>{title}</h2>
            </div>
            <div className="description">
            <p>{text}</p>

            </div>
            <div className="tagContainer">
            {
                        tags.map((elem: any) => {
                            return <div key={elem} className="tag flex-child hvr-grow">{elem}</div>
                        })
                    }
            </div>
        </article>
    )
}
