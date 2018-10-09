import * as React from 'react';
import './HomeFiles.scss';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';

interface HomeFoldersProps {
img : string;
id: string;
name: string;

}

const HomeFiles = observer (({ img, id, name }: HomeFoldersProps) => {
  
    return (
        <Link to=''>
        <article className="flex-child fileCont">
                    <div className=" fileDisplay col-flex">
                  <img src={img} alt=""/>
                    </div>
                   <h3 key={id}>{name}</h3>
                   <h6>.csv</h6>
                    </article>
                    </Link>
    )
})
export default HomeFiles;