import * as React from 'react';

import '../../../../public/css/flex.scss'
import { Link } from 'react-router-dom';

interface FolderProps {
    id: string;
    title: string;
    text?: string;
    tags: any[];
    favorited: boolean;
    upDate: string;
    modDate: string;
    size: string;
}

export const Archive = ({ id, title, text, tags, favorited, upDate, modDate, size }: FolderProps) => {
    return (
        <article className="archive">
            <h3 className="idArchive">{id}</h3>
            <h3 className="nameArchive hvr-grow">{title}</h3>
            <h3 className="sizeArchive">{size}</h3>
            <h3 className="upDateArchive">{upDate}</h3>
            <h3 className="modDateArchive">{modDate}</h3>
            <p className="desArchive">{text}</p>
        </article>

    )
}
