
import { observable, action, computed, extendObservable } from 'mobx';
import db from '../../config/firebaseConfig';

import { KeyboardEvent } from "react";

class FsActionStore {

    @observable arrayFolders: any = [];

    @observable arrayFoldersBackUp: any = [];
    @observable nameFilter: string = "";

    @observable counter: number = 0;
    @action handleNameFilter(nameFilter: string) {
        this.nameFilter = nameFilter;
        console.log(this.nameFilter, "ChangeName");
    }

    @action cleanList() {
        this.arrayFolders = [];
    }

    @action read() {
        this.cleanList();

        let ref = db.collection("Folders");//ruta        
        ref.get().then((querySnapshot) => {

            querySnapshot.forEach((doc) => {

                let element = {
                    name: doc.data().name,
                    description: doc.data().description,
                    favorited: doc.data().favorited,
                    tagnames: doc.data().tagnames,
                    id: doc.id
                };
                this.arrayFolders.push(element);
                this.arrayFoldersBackUp.push (element);
                console.log(this.arrayFolders);
            });
        });
    }

    @action getFromLocalStore(element: string) {
        localStorage.setItem(element, JSON.stringify(this.arrayFolders));
        return JSON.parse(localStorage.getItem(element))
    }

    @action filterName() {
        if (this.arrayFolders.some((e: any) => {

            return e.name == this.nameFilter;
        })){
            console.log("This is filtering")

            this.arrayFoldersBackUp = this.arrayFolders.filter((e: any) => {
                return e.name == this.nameFilter;
            });
        } else {
            console.log("This is not filtering")

            this.read();
        }
        
    }



}

export const firebaseStore = new FsActionStore();