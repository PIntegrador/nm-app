import * as React from 'react';
import './ProfileMenu.scss';
import { firebaseStore } from '../../../store/FsActionStore';
import { authStore } from '../../../store/AuthStore';

interface ProfileMenuProps {
    mail: string
}

const ProfileMenu = ({mail}: ProfileMenuProps) => {
    return (
       <section className="profileMenu">
       
       <div className="profileImg"></div>
       <h3 className="profileName">{mail}</h3>
       <div className="profileDropDown"></div>

       </section>
    )
}
export default ProfileMenu;