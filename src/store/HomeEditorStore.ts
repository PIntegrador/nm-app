import { db, storage } from '../../config/firebaseConfig';
import { firebaseStore } from './FsActionStore';
import UploadConfirmation from '../components/Editor/AddMenu/UploadConfirmation/UploadConfirmation';
import { observable, action, computed, extendObservable } from 'mobx';

class HomeEditorStore {

    @observable sortButState: string = 'list';
    @observable sideMenuState: string = 'open';
    @observable selectedMenuItem: string = 'home'

}

export const homeEditorStore = new HomeEditorStore();