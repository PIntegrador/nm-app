import * as React from 'react';

import './Searchbar.scss';
import '../../../../public/css/flex.scss'
import { firebaseStore } from '../../../store/FsActionStore';

const Searchbar = () => {
    return (
        <div className="searchBar">
        <form onSubmit={(e)=> {
            e.preventDefault();
            firebaseStore.filterName();
            firebaseStore.filterNameArchive();
            }}
            onChange={(e) => {
            e.preventDefault();
            firebaseStore.filterName();
            firebaseStore.filterNameArchive();
            }}>

            <button type="submit">
                &#128269;</button>

            <input placeholder="Busca por etiquetas o palabras clave" id="inputBuscar" type="text" onChange={ (e:
                any)=> {
            e.preventDefault();
            firebaseStore.handleNameFilter(e.target.value);
            firebaseStore.handleNameArchive(e.target.value);
            }
            } />

        </form>

    </div>
    )
}
export default Searchbar;