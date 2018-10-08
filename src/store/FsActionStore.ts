
import { observable, action, computed, extendObservable } from 'mobx';
import db from '../../config/firebaseConfig';

import { KeyboardEvent } from "react";

class FsActionStore {

    @observable arrayFolders: any = [];

    @observable arrayFoldersBackUp: any = [];

    @observable arrayArchive: any = [];

    @observable arrayArchiveBackUp: any = [];

    @observable nameFilter: string = "";

    @observable counter: number = 0;
    @action handleNameFilter(nameFilter: string) {
        this.nameFilter = nameFilter;
        console.log(this.nameFilter, "ChangeName");
    }

    @action cleanList() {
        this.arrayFolders = [];
        this.arrayArchive = [];
    }

    @action read() {
        this.cleanList();

        let ref = db.collection("Folders");//ruta        
        ref.get().then((querySnapshot) => {

            querySnapshot.forEach((doc) => {
                /*Here is the way how the tags are made components, it will need an unique id
                so i'll generate that with that function*/ 
                function IDGenerator() {
                    return '_' + Math.random().toString(26).substr(2, 9);
                }
                /*After that i'll take all the tag's strings and im gonna create an object with 
                a name and an id. The name is the tag, i'm gonna pass this object array to the 
                folder rendering*/ 
                
                let tagNamesObjs = doc.data().tagnames.map((element: any) => {
                    return { id: IDGenerator, name: element }
                });
                let element = {
                    name: doc.data().name,
                    description: doc.data().description,
                    favorited: doc.data().favorited,
                    tagnames: tagNamesObjs,
                    id: doc.id
                };
                this.arrayFolders.push(element);
                this.arrayFoldersBackUp = this.arrayFolders;
                console.log(this.arrayFolders);
            });
        });

        let refArchive = db.collection("Archives");//ruta        
        refArchive.get().then((querySnapshot) => {

            querySnapshot.forEach((doc) => {

                let element = {
                    name: doc.data().name,
                    description: doc.data().description,
                    favorited: doc.data().favorited,
                    tagnames: doc.data().tagnames,
                    id: doc.id,
                    idFolder: doc.data().IDFolder,
                    idArchive: doc.data().IDArchive,
                    size: "O MB",
                    upDate: "Sin Fecha",
                    modDate: "Sin Fecha",
                    IDD: "001"
                };
                this.arrayArchive.push(element);
                this.arrayArchiveBackUp = this.arrayArchive;
            });
        });


    }

    @action getFromLocalStore(element: string) {
        localStorage.setItem(element, JSON.stringify(this.arrayFolders));
        return JSON.parse(localStorage.getItem(element))
    }

    /*The filterName function will execute each time the input Search change */
    @action filterName() {

        this.arrayFolders = this.arrayFoldersBackUp;
        /*Here it will compare the string, if it have a coincidence will filter, 
        if not it will return the backup*/

        if (this.arrayFolders.some((e: any) => {
            console.log(this.nameFilter.toLowerCase().toString(), "substring");
            return e.name.toLowerCase().indexOf(this.nameFilter.toLowerCase());

        })) {
            /*Here it is filtering, it will show a list with all the elements 
            that have a casuality with the string written in the input*/
            console.log("This is filtering");

            this.arrayFolders = this.arrayFolders.filter((e: any) => {
                return e.name.toLowerCase().includes(this.nameFilter.toLowerCase());
            })
        } else {
            console.log("This is not filtering");
            this.arrayFolders = this.arrayFoldersBackUp;
        }
    }

    @action filterNameArchive() {

        this.arrayArchive = this.arrayArchiveBackUp;

        if (this.arrayArchive.some((e: any) => {
            return e.name.toLowerCase().indexOf(this.nameFilter.toLowerCase());

        })) {
            console.log("This is filtering");

            this.arrayArchive = this.arrayArchive.filter((e: any) => {
                return e.name.toLowerCase().includes(this.nameFilter.toLowerCase());
            })
        } else {
            console.log("This is not filtering");
            this.arrayArchive = this.arrayArchiveBackUp;
        }

    }

    @action sortByName(order: number) {
        console.log(this.arrayFolders[0], "Antes de sort");

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

        if (order == 0) {
            this.arrayFolders.replace(this.arrayFolders.slice().sort(compareAscendente));
        }
        if (order == 1) {
            this.arrayFolders.replace(this.arrayFolders.slice().sort(compareDescendente));
        }



        console.log(this.arrayFolders[0], "Despues de sort");

    }



}

export const firebaseStore = new FsActionStore();