import * as React from 'react';

import './SortBar.scss';
import '../../../../public/css/flex.scss'
import { firebaseStore } from '../../../store/FsActionStore';
import { observer } from 'mobx-react';

const SortBar = observer( () => {
    return (
        <div className="sortBar" >
        <div onClick = {
            (e :any) => {
                e.preventDefault();
                firebaseStore.sortByName(1);
            } 
        }>
            Descendente
        </div>
        <div onClick = {
            (e :any) => {
                e.preventDefault();
                firebaseStore.sortByName(0);
            } 
        }>
            Ascendente
        </div>
        </div>
    )
}
)
export default SortBar;