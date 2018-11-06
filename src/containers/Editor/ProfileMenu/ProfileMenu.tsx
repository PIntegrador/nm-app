import * as React from 'react';
import './ProfileMenu.scss';
import { firebaseStore } from '../../../store/FsActionStore';

interface ProfileMenuProps {

}

const ProfileMenu = ({}: ProfileMenuProps) => {
    return (
       <section className="profileMenu">
       
       <div className="profileImg"></div>
       <h3 className="profileName">Nestor Tobar</h3>
       <div className="profileDropDown"></div>

       </section>
    )
}
export default ProfileMenu;