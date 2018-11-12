import * as React from 'react';
import './HomeFiles.scss';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';

interface HomeFoldersProps {
    img: string;
    id: string;
    name: string;

}

const HomeFiles = observer(({ img, id, name }: HomeFoldersProps) => {
    
    return (
        <Link to={`/archives/${id}`}>
            <article className="flex-child fileCont">
            
                <div className=" fileDisplay col-flex">
                </div>

                <h3 className="fileInfo" key={id}>{name}</h3>

            </article>
        </Link>
    )
})
export default HomeFiles;