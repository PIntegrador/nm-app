import * as React from 'react';
import './DropDownMenu.scss';
import { firebaseStore } from '../../../../store/FsActionStore';
import { authStore } from '../../../../store/AuthStore';
import { homeEditorStore } from '../../../../store/HomeEditorStore';
import { observer } from 'mobx-react';

interface dropDownMenuProps {
}

const DropDownMenu = observer((dropDownMenuProps:any) => {
    return (
        <section onClick={()=>{authStore.signOut()}} id="dropDownMenu" style={{ display: homeEditorStore.dropDownMenu === false ? "none" : "flex" }}>
            <h1>Cerrar Sesión</h1>
        </section>
    )
})
export default DropDownMenu;