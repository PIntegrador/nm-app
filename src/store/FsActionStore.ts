
import { observable, action, computed, extendObservable } from 'mobx';
import db from '../../config/firebaseConfig';

import { KeyboardEvent } from "react";
import { homeEditorStore } from './HomeEditorStore';

class FsActionStore {


}

export const firebaseStore = new FsActionStore();