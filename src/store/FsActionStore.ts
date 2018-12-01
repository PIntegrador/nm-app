
import { observable, action, computed, extendObservable } from 'mobx';
import db from '../../config/firebaseConfig';

class FsActionStore {

    /* the main idea is to make this store more easy to understand, 
    in orther to make it works, lets try to make the title oh the variables more intuitive */

    @observable listAllArchives:[] = null;


}

export const firebaseStore = new FsActionStore();