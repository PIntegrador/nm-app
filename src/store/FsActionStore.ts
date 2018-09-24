
import { observable, action, computed } from 'mobx'; 
import db  from '../../config/firebaseConfig';
import { read } from 'fs';

class FsActionStore{ 

}
export const firebaseStore = new FsActionStore();