import * as React from 'react';
import './HomeFiles.scss';
import { observer } from 'mobx-react';

interface HomeFoldersProps {
img : string;
archiveArray: any [];
}

const HomeFiles = observer (({ img, archiveArray }: HomeFoldersProps) => {
    return (
        <section className="allCont col-flex">
        <h1 className="flex-child ">Archivos</h1>
        <div className="flex-child  row-flex filesCont">
        {
                archiveArray.map((elem:any) => {
                    return   <article className="flex-child fileCont">
                    <div className=" fileDisplay col-flex">
                  <img src={img} alt=""/>
                    </div>
                   <h3 key={elem.id}>{elem.name}</h3>
                   <h6>extensión</h6>
                    </article>
                })

            }
      
        </div>
     
        </section>
    )
})
export default HomeFiles;