import { observable, action, computed, extendObservable } from 'mobx';
import { db, storage, auth } from '../../config/firebaseConfig';

class ProjectDashBoardStore {

    constructor() {


    }

    @observable menuOptionSelected: string = "archivos";


}

export const projectDash = new ProjectDashBoardStore();