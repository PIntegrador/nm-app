import { observable, action, computed, extendObservable } from 'mobx';
import db from '../../config/firebaseConfig';
import { readFileSync } from 'fs';
import { Children } from 'react';

class ProjectStore {
    constructor() {
    }

    @observable projectId: string = "";
    @observable projectArchives: any = [];

    //method that read the files, it depends of and folder's id, o the user's id
    @action updateArchives() {

        let dbRef = db.collection('NewArchives');
        let temp: any = [];

        dbRef.onSnapshot((querySnapshot: any) => {
            this.projectArchives = [];

            let idFolder = this.projectId;

            temp = [];

            querySnapshot.forEach((doc: any) => {
                this.projectArchives = [];

                idFolder = this.projectId;
                console.log(idFolder);

                if (doc.data().projectParent == idFolder) {

                    let ele = {
                        name: doc.data().name,
                        type: doc.data().type,
                        id: doc.data().id,
                        parent: doc.data().parent,
                        projectParent: doc.data().projectParent,
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

            this.projectArchives = temp;
        });
    }

    //metthod to sort by name
    @action sortArchivesByName(order: boolean) {
        function compareDescendente(a: any, b: any, order1: number, order2: number) {
            if (a.name < b.name)
                return -1;
            if (a.name > b.name)
                return 1;
            return 0;
        }
        function compareAscendente(a: any, b: any, order1: number, order2: number) {
            if (a.name < b.name)
                return 1;
            if (a.name > b.name)
                return -1;
            return 0;
        }
        if (this.projectArchives != null) {
            if (order) {
                this.projectArchives.replace(this.projectArchives.slice().sort(compareAscendente));
            }
            if (!order) {
                this.projectArchives.replace(this.projectArchives.slice().sort(compareDescendente));
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
            if (this.projectArchives.some((e: any) => {
                return e.name.toLowerCase().indexOf(this.nameFilterArchive.toLowerCase());
            })) {
                //is filtering

                this.projectArchives = this.projectArchives.filter((e: any) => {
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

export const projectStore = new ProjectStore();