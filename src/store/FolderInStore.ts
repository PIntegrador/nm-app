import { observable, action, computed, extendObservable } from 'mobx';
import db from '../../config/firebaseConfig';
import { readFileSync } from 'fs';
import { Children } from 'react';

class FolderInStore {
    constructor() {
    }

    @observable folderIdArchives: string = "";
    @observable folderInArchives: any = [];

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

                console.log(idFolder);

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

            console.log(temp);
            this.folderInArchives = temp;
        });
    }

}

export const folderInStore = new FolderInStore();