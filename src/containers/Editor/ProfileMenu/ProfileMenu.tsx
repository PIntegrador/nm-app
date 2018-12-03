import * as React from 'react';
import './ProfileMenu.scss';
import { firebaseStore } from '../../../store/FsActionStore';
import { authStore } from '../../../store/AuthStore';
import DropDownMenu from './DropDownMenu/DropDownMenu';
import { homeEditorStore } from '../../../store/HomeEditorStore';

interface ProfileMenuProps {
    mail: string
}

const ProfileMenu = ({ mail }: ProfileMenuProps) => {
    return (
        <section className="profileMenu">
            <img src="./assets/svg/user.svg" className="profileImg"/>
            <h3 className="profileName">{mail}</h3>
            <div className="profileDropDown"
                onClick={() => {
                   homeEditorStore.changeDropMenuState();
                }}></div>
            <DropDownMenu />
        </section>
    )
}
export default ProfileMenu;