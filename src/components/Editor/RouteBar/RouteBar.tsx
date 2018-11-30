import * as React from 'react';

import './RouteBar.scss';
import '../../../../public/css/flex.scss'

interface RouteProps {
    folderName: string;
    mainTitle: string;
}

const RouteBar = ({ mainTitle, folderName }: RouteProps) => {

    return (
        <div className="routeBar">
            <h3>{mainTitle}</h3>
            <h4>{folderName}</h4>
        </div>
    )
}
export default RouteBar;