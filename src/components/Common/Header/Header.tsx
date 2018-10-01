import * as React from 'react';
import './Header.scss';
import { firebaseStore } from '../../../store/FsActionStore';

interface HeaderProps {

    img?: string;
}

const Header = ({ img }: HeaderProps) => {
    return (
        <section className="headerbar flex-child row-flex ">
            <img src={img} alt="" />
            <div className="toogle flex-child">
            </div>
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    firebaseStore.filterName();
                }}>

                    <input id="inputBuscar" type="text" onChange={
                        (e: any) => {
                            e.preventDefault();
                            firebaseStore.handleNameFilter(e.target.value);
                        }
                    } />
                    <button type="submit">Buscar</button>

                </form>

            </div>

            <div className="toogle right flex-child"></div>

        </section>
    )
}
export default Header;