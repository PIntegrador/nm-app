import * as React from 'react';
import './Header.scss';
import { firebaseStore } from '../../../store/FsActionStore';
import Searchbar from '../../Editor/Searchbar/Searchbar';
import ProfileMenu from '../../../containers/Editor/ProfileMenu/ProfileMenu';
import { homeEditorStore } from '../../../store/HomeEditorStore';

interface HeaderProps {

    img?: string;
    fav?: string;
    user: string;
    state: string;
}

const Header = ({ img, fav, user, state }: HeaderProps) => {

    return (
        <section className="headerbar flex-child">

            <section className="flex-child contSides">

                <div className="leftSide">
                    <img src='/assets/svg/hammenu.svg' onClick={(e) => {
                        ( state == 'open') ? homeEditorStore.sideMenuState = 'closed' : homeEditorStore.sideMenuState = 'open'
                    }}></img>
                    <Searchbar />
                </div>

                <div className="rightSide">
                    <ProfileMenu mail = {user}/>
                </div>
            </section>

        </section>
    )
}
export default Header;