import { observable, action, computed, extendObservable } from 'mobx';
import { db, storage, auth } from '../../config/firebaseConfig';

class ModuleStore {
    constructor() {

    }

    @observable idTemp: string = "";

    //idTempo is the id of the dragged element

    @action deleteFileByID() {
        if (this.idTemp != '') {
            let refArchive = db.collection("Archives").doc(this.idTemp);

            refArchive.delete().then(function () {
                console.log("Document successfully deleted!");
                this.idTemp = "";
                return;
            }).catch(function (error) {
                console.error("Error removing document: ", error);
            });
        }
    }

    @action deleteProjectByID() {
        let refArchive = db.collection("Projets");

        //
    }

    @action deleteFolderByID() {
        if (this.idTemp != '') {
            let refArchive = db.collection("Folders").doc(this.idTemp);

            refArchive.delete().then(function () {
                console.log("Document successfully deleted!");
                this.idTemp = "";
                return;
            }).catch(function (error) {
                console.error("Error removing document: ", error);
            });
        }
    }

}

export const moduleStore = new ModuleStore();

