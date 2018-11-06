import * as React from 'react';
import './Header.scss';
import { firebaseStore } from '../../../store/FsActionStore';
import Searchbar from '../../Editor/Searchbar/Searchbar';

interface HeaderProps {

    img?: string;
    fav?: string;
}

const Header = ({ img, fav }: HeaderProps) => {
    return (
        <section className="row-flex headerbar flex-child">

            <section className="contSides">

                <div className="leftSide">
                    <Searchbar />
                </div>

                <div className="rightSide">

                </div>
            </section>

        </section>
    )
}
export default Header;