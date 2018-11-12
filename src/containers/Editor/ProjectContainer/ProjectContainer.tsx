import * as React from 'react';
import '../../../../public/css/flex.scss'

import Dash from '../../../components/Editor/Dash/Dash';
import Header from '../../../components/Common/Header/Header';
import RouteBar from '../../../components/Editor/RouteBar/RouteBar';
import { firebaseStore } from '../../../store/FsActionStore';
import { observer } from 'mobx-react';

@observer export class ProjectContainer extends React.Component {
    constructor(props:any){
        super(props);
        //filter
    }

    render() {

        let arrayArchives = firebaseStore.arrayArchive;

        return <div className="contHome row-flex">
            <Dash />

            <div className="app flex-child col-flex">
                <Header />
                <RouteBar  />

            </div>

        </div>
    }
}