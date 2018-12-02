import { observable, action, computed, extendObservable } from 'mobx';
import { db, storage, auth } from '../../config/firebaseConfig';

class ModuleStore {
    constructor() {

    }

    @observable idTemp: string = "";
    @observable idToFolder: string = "";

    //idTempo is the id of the dragged element
    //idToFolder is the id of destiny folder

    @action deleteFileByID() {
        if (this.idTemp != '') {
            let refArchive = db.collection("NewArchives").doc(this.idTemp);

            refArchive.delete().then(function () {
                console.log("Document successfully deleted!");
                return;
            }).catch(function (error) {
                console.error("Error removing document: ", error);
            });
        }
    }

    @action moveToFolderById(){
        if (this.idTemp != '' && this.idToFolder != '') {

            let refArchive = db.collection("NewArchives").doc(this.idTemp);

            

            this.idTemp = '';
            this.idToFolder = '';
        }
    }

}

export const moduleStore = new ModuleStore();

