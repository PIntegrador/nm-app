import * as React from 'react';
import './Header.scss';
import { firebaseStore } from '../../../store/FsActionStore';
import Searchbar from '../../Editor/Searchbar/Searchbar';
import ProfileMenu from '../../../containers/Editor/ProfileMenu/ProfileMenu';

interface HeaderProps {
    img?: string;
    fav?: string;
}

const Header = ({ img, fav }: HeaderProps) => {

    return (
        <section className="headerbar flex-child">

            <section className="flex-child contSides">

                <div className="leftSide">
                    <Searchbar />
                </div>

                <div className="rightSide">
                    <ProfileMenu />
                </div>
            </section>

        </section>
    )
}
export default Header;