import * as React from 'react';
import './Header.scss';
import { firebaseStore } from '../../../store/FsActionStore';

interface HeaderProps {

    img?: string;
}

const Header = ({ img }: HeaderProps) => {
    return (
        <section className="headerbar flex-child row-flex ">
            <div className="leftSide">
            <img src={img} alt="" />
            <div className="toogle flex-child">
                 <img src="./assets/img/star.png"/>
            </div>
            <div className="searchBar">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    firebaseStore.filterName();
                }}
                onChange={(e) => {
                    e.preventDefault();
                    firebaseStore.filterName();
                }}
                >
                    <button type="submit">
                    &#128269;</button>

                    <input placeholder="Busca por etiquetas o palabras clave" id="inputBuscar" type="text" onChange={
                        (e: any) => {
                            e.preventDefault();
                            firebaseStore.handleNameFilter(e.target.value);
                        }
                    } />

                </form>

            </div>

            </div>
            
            <div className="toogle right flex-child"></div>

        </section>
    )
}
export default Header;