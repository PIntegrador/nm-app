import * as React from 'react';

import '../../../../public/css/flex.scss'
import { Link } from 'react-router-dom';
import { Tag } from '../Tag/Tag';

interface FolderProps {
    id: string;
    title: string;
}

export const Folder = ({ id, title}: FolderProps) => {
    return (
        <Link to={`/folders/${id}`}>
            <article className="folder">
                <div className="title">
                    <h2>{title}</h2>
                </div>
                <div className="peso">
                    <h2>--</h2>
                </div>
                <div className="up">
                    <h2>--</h2>
                </div>
                <div className="mod">
                    <h2>--</h2>
                </div>
                <div className="tipe">
                    <h2>--</h2>
                </div>
            </article>
        </Link>

    )
}
