import * as React from 'react';

import './Searchbar.scss';
import '../../../../public/css/flex.scss'
import { firebaseStore } from '../../../store/FsActionStore';

//"Mis Archivos"
import { folderInStore } from '../../../store/FolderInStore';

/*
<button type="submit">
&#128269;</button>*/

const Searchbar = () => {
    return (
        <div className="searchBar">
            <form onSubmit={(e) => {
                e.preventDefault();



                folderInStore.filterNameArchive();

                //     firebaseStore.filterName();
                //   firebaseStore.filterNameArchive();
            }}
                onChange={(e) => {
                    e.preventDefault();
                    
                    folderInStore.filterNameArchive();

                    //     firebaseStore.filterName();
                    //   firebaseStore.filterNameArchive();
                }}>

                <input placeholder="Buscar en VIBO" id="inputBuscar" type="text" onChange={(e:
                    any) => {
                    e.preventDefault();

                    folderInStore.nameFilterArchive = e.target.value;

                    // firebaseStore.handleNameFilter(e.target.value);
                    //firebaseStore.handleNameArchive(e.target.value);
                }
                } />


            </form>

        </div>
    )
}
export default Searchbar;