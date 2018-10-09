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
    <div className="leftSide">
        <img src={img} alt="" />
        <div className="toogle flex-child">
            <img src={fav} />
        </div>
       <Searchbar />

    </div>

  
</section>
)
}
export default Header;