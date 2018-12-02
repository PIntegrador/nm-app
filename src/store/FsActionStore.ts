
import { observable, action, computed, extendObservable } from 'mobx';
import db from '../../config/firebaseConfig';
import { readFileSync } from 'fs';
import { Children } from 'react';

class FsActionStore {
    constructor() {
    }

    /* the main idea is to make this store more easy to understand, 
    in orther to make it works, lets try to make the title oh the variables more intuitive */

    @observable listAllArchives: any = [];

    @observable userInfo: any = {};

    @observable uidActual: string = "";

    @observable listActual: any = [];

    @observable userArchivesID: any = [];
    @observable userArchives: any = [];

    @observable userProjectsID: any = [];


    /* This method search the document of the user in the database by the uid of the auth store,
    we need to know the id of the documents that the user have in the db */

    @action readInfoUser() {

        let usersRef = db.collection("NewUsers");

        usersRef.doc(this.uidActual).onSnapshot((querySnapshot:any) => {
            this.userInfo = {}
            let tempUser= {
                name: querySnapshot.data().name,
                uid: querySnapshot.data().uid,
                email: querySnapshot.data().email,
                rol: querySnapshot.data().rol,
                archives: querySnapshot.data().Archives,
                projects: querySnapshot.data().Projects
            }
            let tempid = querySnapshot.data().id
            this.userArchivesID = querySnapshot.data().Archives;
            this.userProjectsID = querySnapshot.data().Projects;

            this.userInfo = tempUser
            this.readFiles();
          
        });

    }

    //GET ALL FILES
    @action readFiles(){
        let dbRef = db.collection('NewArchives');
        let temp:any = []
        let temptags:any = []
        let tempChildren:any = []

        dbRef.onSnapshot((querySnapshot:any) => {
            this.listAllArchives = []
            temp = []
            temptags =[]
            tempChildren = []
            querySnapshot.forEach((doc:any) => {
                this.userArchivesID.map( (e:any) => {
                    this.listAllArchives = []
                   
                    if(doc.data().id == e){
                        let ele  = {
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
                         temptags =  doc.data().tagnames;
                         tempChildren = doc.data().children;
                    } 
                    return temp
                })

            });
            this.listAllArchives = temp;
            this.userInfo.archives = this.listAllArchives;
        });

    }

}

export const firebaseStore = new FsActionStore();