import * as React from 'react';

import '../../../../public/css/flex.scss'
import { Link } from 'react-router-dom';

interface FolderProps {
    id: string;
    title: string;
    text?: string;
    tags: any[];
    favorited: boolean;
}

export const Folder = ({ id, title, text, tags, favorited }: FolderProps) => {
    return (
        <Link to={`/folders/${id}`}>
            <article className="folder">
                <div className="elemsTitle">
                    <div className="favorite">
                        <img src="./assets/img/star.png" />
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
        </Link>

    )
}
