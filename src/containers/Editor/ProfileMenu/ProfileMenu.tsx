import * as React from 'react';
import './ProfileMenu.scss';
import { firebaseStore } from '../../../store/FsActionStore';
import { authStore } from '../../../store/AuthStore';

interface ProfileMenuProps {

}

const ProfileMenu = ({}: ProfileMenuProps) => {
    return (
       <section className="profileMenu">
       
       <div className="profileImg"></div>
       <h3 className="profileName">{authStore.credentials.email}</h3>
       <div className="profileDropDown"></div>

       </section>
    )
}
export default ProfileMenu;