import { observable, action, computed, extendObservable } from 'mobx';
import db from '../../config/firebaseConfig';
import { readFileSync } from 'fs';
import { Children } from 'react';

class FolderInStore {
    constructor() {
    }

    @observable folderIdArchives: string = "";
    @observable folderInArchives: any = [];
    @observable folderParentName: string = "";

    @action updateArchives() {

        let dbRef = db.collection('NewArchives');
        let temp: any = [];

        dbRef.onSnapshot((querySnapshot: any) => {
            this.folderInArchives = [];

            let idFolder = this.folderIdArchives;

            temp = [];

            querySnapshot.forEach((doc: any) => {
                this.folderInArchives = [];

                idFolder = this.folderIdArchives;

                if (doc.data().parent == idFolder) {

                    let ele = {
                        name: doc.data().name,
                        type: doc.data().type,
                        id: doc.data().id,
                        parent: doc.data().parent,
                        size: doc.data().size,
                        sourceURL: doc.data().sourceURL,
                        fileURL: doc.data().fileURL,
                        tagnames: doc.data().tagnames,
                        children: doc.data().children,
                    }

                    temp.push(ele);

                }
            });

            this.folderInArchives = temp;
        });
    }

    @action updateParentName() {
        this.folderParentName = "";

        let parentRef = db.collection("NewArchives");

        parentRef.onSnapshot((querySnapshot: any) => {
            this.folderParentName = "";

            let temp: any = [];

            let idFolder = this.folderIdArchives;

            querySnapshot.forEach((doc: any) => {

                idFolder = this.folderIdArchives;

                if (doc.data().id == idFolder) {

                    let ele = {
                        name: doc.data().name,
                        type: doc.data().type,
                        id: doc.data().id,
                        parent: doc.data().parent,
                        size: doc.data().size,
                        sourceURL: doc.data().sourceURL,
                        fileURL: doc.data().fileURL,
                        tagnames: doc.data().tagnames,
                        children: doc.data().children,
                    }

                    temp.push(ele);
                }
            });

            this.folderParentName = temp[0].name;
        });
    }

    

}

export const folderInStore = new FolderInStore();