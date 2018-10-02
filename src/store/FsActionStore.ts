
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
                this.arrayFoldersBackUp=this.arrayFolders;
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
            return e.name.toLowerCase() == this.nameFilter.toLowerCase();
        })){
            console.log("This is filtering");
            this.arrayFolders = this.arrayFolders.filter((e: any) => {
                return e.name.toLowerCase() == this.nameFilter.toLowerCase();
            });
        } else {
            console.log("This is not filtering");
            this.arrayFolders = this.arrayFoldersBackUp;
        }
        
    }

    @action sortByName(order: number) {
        console.log(this.arrayFolders[0], "Antes de sort");

        function compareDescendente(a : any, b : any, order1: number, order2: number ) {
            if (a.name[0] < b.name[0])
              return -1;
            if (a.name[0] > b.name[0])
              return 1;
            return 0;
          }
          function compareAscendente(a : any, b : any, order1: number, order2: number ) {
            if (a.name[0] < b.name[0])
              return 1;
            if (a.name[0] > b.name[0])
              return -1;
            return 0;
          }

          if (order==0) {
            this.arrayFolders.replace (this.arrayFolders.slice().sort(compareAscendente));
          } 
          if (order ==1 ) {
            this.arrayFolders.replace (this.arrayFolders.slice().sort(compareDescendente));
          }


          
        console.log(this.arrayFolders[0], "Despues de sort");

    }



}

export const firebaseStore = new FsActionStore();