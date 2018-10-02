import * as React from 'react';
import './HomeFolders.scss';
import { observer } from 'mobx-react';

interface HomeFoldersProps {
    folderArray: any[];
}

const HomeFolders = observer(( {folderArray} : HomeFoldersProps) => {
    return (
        <section className="allCont col-flex">
        <h1 className="flex-child ">Carpetas</h1>
        <div className="flex-child  row-flex foldersCont">

        {
                folderArray.map((elem:any) => {
                    return   <article className="flex-child row-flex folderCont">
                    <div className="flex-child  folderDisplay col-flex">
                    <h3>{elem.name}</h3>
                    </div>
                    <div className="flex-child  folderInfo">
                     <h1>{elem.archives.length}</h1>
                     <h6>archivos</h6>
                    </div>
                    </article>
          
                })

            }
      
        </div>
     
        </section>
    )
})
export default HomeFolders;