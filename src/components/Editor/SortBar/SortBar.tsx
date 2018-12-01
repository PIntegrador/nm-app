import * as React from 'react';

import './SortBar.scss';
import '../../../../public/css/flex.scss'
import { firebaseStore } from '../../../store/FsActionStore';
import { observer } from 'mobx-react';

const SortBar = observer(() => {
    return (
        <div className="sortBar" >
            <p className="sortTitle">Ordenar por:</p>
            <div className="sortSelector">
            <select name="sortFolders" id="sortSelectorType" disabled>
                <option value="name" label="Nombre"></option>
            </select>
            </div>

            <p className="sortTitle">Sentido:</p>
            <div className="sortSelector direction">
                <select name="sortDirection" onChange={
                    (e:any) => {
                        e.preventDefault();
                    }
                }>
                    <option value="8" label="Ninguno"></option>
                    <option value="1" label="Ascendente"></option>
                    <option value="0" label="Descendente"></option>
                </select>
            
            </div>
        </div>
    )
}
)
export default SortBar;