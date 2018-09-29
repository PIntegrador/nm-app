import * as React from 'react';
import './Header.scss';

interface HeaderProps {

    img?: string;
}

const Header = ({ img }: HeaderProps) => {
    return (
        <section className="headerbar flex-child row-flex ">
        <img src={img} alt=""/>
        <div className="toogle flex-child"></div>
           <input id="inputBuscar" type="text" />
           <div className="toogle right flex-child"></div>

        </section>
    )
}
export default Header;