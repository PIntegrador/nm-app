import * as React from 'react';

import '../../../../public/css/flex.scss'
import { Link } from 'react-router-dom';
import { Tag } from '../Tag/Tag';

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
                            return <Tag key={elem.id} id={elem.id} name ={elem.name} />
                        })
                    }
                </div>
            </article>
        </Link>

    )
}
