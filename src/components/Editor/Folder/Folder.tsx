import * as React from 'react';

import '../../../../public/css/flex.scss'

interface FolderProps {
    title: string;
    text?: string;
    tags: any[];
    favorited: boolean;
}

export const Folder = ({ title, text, tags }: FolderProps) => {
    return (
        <article className="folder">
            <h2>{title}</h2>
            <p>{text}</p>
            <section className="cont row-flex">

                <div className="contFolderTags flex-child row-flex">
                    {
                        tags.map((elem: any) => {
                            return <article key={elem} className="folderTags flex-child hvr-grow">{elem}</article>
                        })
                    }
                </div>

                <div className="starButton flex-child hvr-grow"></div>
            </section>
        </article>
    )
}
