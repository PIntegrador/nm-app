
import { observable, action, computed, extendObservable } from 'mobx';
import db from '../../config/firebaseConfig';
import { readFileSync } from 'fs';

class FsActionStore {
    constructor() {
    }

    /* the main idea is to make this store more easy to understand, 
    in orther to make it works, lets try to make the title oh the variables more intuitive */

    @observable listAllArchives: any[] = null;

    @observable userDataBase: any = null;

    @observable uidActual: string = "";

    @observable listActual: any[] = [];

    /* This method search the document of the user in the database by the uid of the auth store,
    we need to know the id of the documents that the user have in the db */

    @action readInfoUser() {

        let usersRef = db.collection("NewUsers");

        let userTemp: any = [];

        usersRef.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                console.log(doc.data().name);

                userTemp.push(doc.data());
            });

            const arrayResult = userTemp.filter((e:any) => e.uid == this.uidActual);

            console.log(arrayResult[0]);

            this.userDataBase = arrayResult;
        });

        /*
        usersRef.where("uid", "==", uid).onSnapshot(function (querySnapshot) {

            querySnapshot.forEach(function (doc) {

                this.userDataBase = null;

                console.log("Nombre del usuario encontrado: " + doc.data().name);

                this.userDataBase = {
                    name: doc.data().name,
                    uid: doc.data().uid,
                    email: doc.data().email,
                    rol: doc.data().rol,
                    archives: doc.data().Archives,
                    projects: doc.data().Projects
                }

                console.log("Datos usuario actual: " + doc.data().name);
            });
        });*/

    }

    @action readFiles(){
        let dbRef = db.collection('NewArchives');

        dbRef.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                console.log(doc.id, " => ", doc.data());
            });
        });
    }


}

export const firebaseStore = new FsActionStore();