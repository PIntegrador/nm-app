import * as React from 'react';

import './SortBarArchive.scss';
import '../../../../public/css/flex.scss'
import { firebaseStore } from '../../../store/FsActionStore';
import { observer } from 'mobx-react';
import { folderInStore } from '../../../store/FolderInStore';

let orderName: boolean;
let orderSize: boolean;
let orderMod: boolean;
let orderUp: boolean;
let orderTipe: boolean;

@observer export class SortBarArchive extends React.Component {

    constructor(props: any) {
        super(props);

        orderName = true;
        orderSize = true;
        orderMod = true;
        orderUp = true;
        orderTipe = true;
        //the default value is order by name

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

    getIconUp() {
        if (orderUp) {
            return "/assets/svg/iconSort/up.svg";
        }
        if (!orderUp) {
            return "/assets/svg/iconSort/down.svg";
        }
    }

    getIconMod() {
        if (orderMod) {
            return "/assets/svg/iconSort/up.svg";
        }
        if (!orderMod) {
            return "/assets/svg/iconSort/down.svg";
        }
    }

    getIconTipe() {
        if (orderTipe) {
            return "/assets/svg/iconSort/up.svg";
        }
        if (!orderTipe) {
            return "/assets/svg/iconSort/down.svg";
        }
    }

    render() {

        return (
            <div className="sortBarArchive" >
                <section className="cont">
                    <h4 className="SortArchiveName hvr-icon-pulse" onClick={(e) => {
                        e.preventDefault();
                        orderName = !orderName;
                        folderInStore.sortArchivesByName(orderName);
                    }}>Nombre
                    <img src={this.getIconName()} className="hvr-icon" />
                    </h4>
                    <h4 className="SortArchiveSize hvr-icon-pulse">Tamaño
                    <img src={this.getIconSize()} className="hvr-icon" />
                    </h4>
                    <h4 className="SortArchiveModDate hvr-icon-pulse">Última Modificación
                    <img src={this.getIconMod()} className="hvr-icon" /></h4>
                    <h4 className="SortArchiveTipo hvr-icon-pulse">Tipo
                    <img src={this.getIconTipe()} className="hvr-icon" /></h4>
                    <h4 className="SortArchiveUpDate hvr-icon-pulse">Fecha de Creación
                    <img src={this.getIconUp()} className="hvr-icon" /></h4>
                </section>
            </div>
        )
    }
}