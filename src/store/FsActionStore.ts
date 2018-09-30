
import { observable, action, computed, extendObservable } from 'mobx';
import db from '../../config/firebaseConfig';

import { KeyboardEvent } from "react";

class FsActionStore {

    @observable arrayFolders: any = [];

    @observable nameFilterInput: string = "";

    @action cleanList() {
        this.arrayFolders = [];
    }



    @action read() {
        this.cleanList();

        let ref = db.collection("Folders");//ruta        
        ref.get().then((querySnapshot) => {

            querySnapshot.forEach((doc) => {

                let ele = {
                    name: doc.data().name,
                    description: doc.data().description,
                    favorited: doc.data().favorited,
                    tagnames: doc.data().tagnames,
                    id: doc.id
                };
                this.arrayFolders.push(ele);
                console.log(this.arrayFolders);
            });
        });
    }

    @action filterName(name: string) {
        this.cleanList();

        var ref = db.collection("demothree").doc("folder");//ruta
        ref.collection("post").where('DBname', "==", name).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

                var element = {
                    DBname: doc.data().DBname,
                    Description: doc.data().Description,
                    Tagnames: doc.data().Tagnames,
                    id: doc.id
                };

                console.log(element, 'Encontrado: ' + element.DBname);
                this.arrayFolders.push(element);
            });
        });
    }

    @action filterTag(name: string) {
        this.cleanList();

        var ref = db.collection("demothree").doc("folder");//ruta
        ref.collection("post").where('DBname', "==", name).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

                var element = {
                    DBname: doc.data().DBname,
                    Description: doc.data().Description,
                    Tagnames: doc.data().Tagnames,
                    id: doc.id
                };

                console.log(element, 'Encontrado: ' + element.DBname);
                this.arrayFolders.push(element);
            });
        });
    }


    @action keyPressed = (e: KeyboardEvent) => {
        // use e.keyCode in here
        if (e.keyCode == 13) {//enter
            this.filterName(this.nameFilterInput);
        }
    };

    @action onClickTag() {

    }

}

export const firebaseStore = new FsActionStore();