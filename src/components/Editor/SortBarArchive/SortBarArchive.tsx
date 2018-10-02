import * as React from 'react';

import './SortBarArchive.scss';
import '../../../../public/css/flex.scss'
import { firebaseStore } from '../../../store/FsActionStore';
import { observer } from 'mobx-react';

const SortBarArchive = observer(() => {
    return (
        <div className="sortBarArchive" >
            <section className="cont">
                <h3 className="SortArchiveId">ID</h3>
                <h3 className="SortArchiveName">Nombre</h3>
                <h3 className="SortArchiveSize">Peso</h3>
                <h3 className="SortArchiveUpDate">Fecha de Subida</h3>
                <h3 className="SortArchiveModDate">Ultima Modificacion</h3>
                <p className="SortArchiveDesc">Descripcion</p>
            </section>
        </div>
    )
}
)
export default SortBarArchive;