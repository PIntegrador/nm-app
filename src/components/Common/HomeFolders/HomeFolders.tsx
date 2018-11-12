import * as React from 'react';
import './HomeFolders.scss';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';

interface HomeFoldersProps {
    name: string;
    numFiles: number;
    id: any;
}

const HomeFolders = observer(({ name, numFiles, id }: HomeFoldersProps) => {
    return (
        <Link to={`/folders/${id}`}>
            <article className="flex-child row-flex folderCont">
                <div className="flex-child  folderDisplay col-flex">
                </div>
                
                <h3 className="flex-child  folderInfo">{name}</h3>
            
            </article>
        </Link>
    )
})
export default HomeFolders;