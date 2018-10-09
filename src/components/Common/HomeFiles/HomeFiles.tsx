import * as React from 'react';
import './HomeFiles.scss';
import { observer } from 'mobx-react';

interface HomeFoldersProps {
img : string;
id: string;
name: string;
}

const HomeFiles = observer (({ img, id, name }: HomeFoldersProps) => {
    return (
        <article className="flex-child fileCont">
                    <div className=" fileDisplay col-flex">
                  <img src={img} alt=""/>
                    </div>
                   <h3 key={id}>{name}</h3>
                   <h6>.csv</h6>
                    </article>
    )
})
export default HomeFiles;