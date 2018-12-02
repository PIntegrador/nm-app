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

    //method that read the files, it depends of and folder's id, o the user's id
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
                        owner: doc.data().owner
                    }

                    temp.push(ele);

                }
            });

            this.folderInArchives = temp;
        });
    }

    //method to update the name of the folder you are
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
                        owner: doc.data().owner
                    }

                    temp.push(ele);
                }
            });

            this.folderParentName = temp[0].name;
        });
    }

    //metthod to sort by name
    @action sortArchivesByName(order: boolean) {
        function compareDescendente(a: any, b: any, order1: number, order2: number) {
            if (a.name[0] < b.name[0])
                return -1;
            if (a.name[0] > b.name[0])
                return 1;
            return 0;
        }
        function compareAscendente(a: any, b: any, order1: number, order2: number) {
            if (a.name[0] < b.name[0])
                return 1;
            if (a.name[0] > b.name[0])
                return -1;
            return 0;
        }
        if (this.folderInArchives != null) {
            if (order) {
                this.folderInArchives.replace(this.folderInArchives.slice().sort(compareAscendente));
            }
            if (!order) {
                this.folderInArchives.replace(this.folderInArchives.slice().sort(compareDescendente));
            }
        }
    }


    //next code lines are for the search bar interaction in "Mis Archivos"
    @observable nameFilterArchive: string = "";

    //there is a bug, if we have a mistake in the edit text, its necesary to errase all the text to 
    //start the filter again, but if we uncomment the method in the else of "no filtering", this is 
    //fixed. But each 2 letters the db es updated and stop filtering

    @action filterNameArchive() {

        if (this.nameFilterArchive != '') {
            if (this.folderInArchives.some((e: any) => {
                return e.name.toLowerCase().indexOf(this.nameFilterArchive.toLowerCase());
            })) {
                //is filtering

                this.folderInArchives = this.folderInArchives.filter((e: any) => {
                    return e.name.toLowerCase().includes(this.nameFilterArchive.toLowerCase());
                });
            } else {
                //no filtering
               // this.updateArchives();
            }
        } else {
            //if the input is empty
            //read the db to default elements
            this.updateArchives();
        }
    }

}

export const folderInStore = new FolderInStore();