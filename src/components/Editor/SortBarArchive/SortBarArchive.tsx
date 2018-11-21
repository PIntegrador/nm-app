import * as React from 'react';

import './SortBarArchive.scss';
import '../../../../public/css/flex.scss'
import { firebaseStore } from '../../../store/FsActionStore';
import { observer } from 'mobx-react';

let orderName: boolean;
let orderSize: boolean;

@observer export class SortBarArchive extends React.Component {

    constructor(props: any) {
        super(props);

        orderName = true;
        orderSize = true;
        //the default value is order by name
        firebaseStore.sortArchivesByName(orderName);
    }

    getIconName() {
        if (orderName) {
            return "/assets/svg/iconSort/up.svg";
        }
        if (!orderName) {
            return "/assets/svg/iconSort/down.svg";
        }
    }

    getIconSize() {
        if (orderSize) {
            return "/assets/svg/iconSort/up.svg";
        }
        if (!orderSize) {
            return "/assets/svg/iconSort/down.svg";
        }
    }

    render() {

        return (
            <div className="sortBarArchive" >
                <section className="cont">
                    <h4 className="SortArchiveId">ID</h4>


                    <h4 className="SortArchiveName hvr-icon-pulse" onClick={(e) => {
                        e.preventDefault();
                        orderName = !orderName;
                        firebaseStore.sortArchivesByName(orderName);
                    }}>Nombre
                    
                    <img src={this.getIconName()} className="hvr-icon" />
                    </h4>

                    <h4 className="SortArchiveSize hvr-icon-pulse" onClick={(e) => {
                        e.preventDefault();
                       
                        orderSize = !orderSize;
                        firebaseStore.sortArchivesBySize(orderSize);
                    }}>Peso
                    <img src={this.getIconSize()} className="hvr-icon" />
                    </h4>
                    <h4 className="SortArchiveUpDate">Fecha de Subida</h4>
                    <h4 className="SortArchiveModDate">Ultima Modificacion</h4>
                    <h4 className="SortArchiveDesc">Descripcion</h4>
                </section>
            </div>
        )
    }
}