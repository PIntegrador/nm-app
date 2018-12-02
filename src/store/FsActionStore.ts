
import { observable, action, computed, extendObservable } from 'mobx';
import db from '../../config/firebaseConfig';
import { readFileSync } from 'fs';
import { Children } from 'react';

class FsActionStore {
    constructor() {
    }

    /* the main idea is to make this store more easy to understand, 
    in orther to make it works, lets try to make the title oh the variables more intuitive */


    @observable userInfo: any = {};
    @observable taskInfo: any = {};

    @observable uidActual: string = "";
    @observable projectidActual: string = "ppF0uGT4zbdSrhXmYw5V";

    @observable userArchivesID: any = [];
    @observable listAllArchives: any = [];

    @observable userProjectID: any = [];
    @observable listAllProjects: any = [];

    @observable listInnerArchives: any = [];
    @observable innerArchivesID: any = [];

    /* This method search the document of the user in the database by the uid of the auth store,
    we need to know the id of the documents that the user have in the db */

    @action readInfoUser() {

        let usersRef = db.collection("NewUsers");

        usersRef.doc(this.uidActual).onSnapshot((querySnapshot: any) => {
            this.userInfo = {}
            let tempUser = {
                name: querySnapshot.data().name,
                uid: querySnapshot.data().uid,
                email: querySnapshot.data().email,
                rol: querySnapshot.data().rol
            }
            this.userArchivesID = querySnapshot.data().Archives;
            this.userProjectID = querySnapshot.data().Projects;
            console.log(this.userProjectID, 'user project id')

            this.userInfo = tempUser
            this.readFiles();
            this.readProjects();
            this.readTasks();
        });

    }

    //GET ALL FILES
    @action readFiles() {
        let dbRef = db.collection('NewArchives');
        let temp:any = []
        let temptags:any = []
        let tempChildren:any = []

        dbRef.onSnapshot((querySnapshot: any) => {
            this.listAllArchives = []
            temp = []
            temptags =[]
            tempChildren = []
            querySnapshot.forEach((doc:any) => {
                this.userArchivesID.map( (e:any) => {
                    this.listAllArchives = []

                    if (doc.data().id == e) {
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
                         temptags =  doc.data().tagnames;
                         tempChildren = doc.data().children;
                         ele.tagnames = temptags;
                         ele.children = tempChildren;
                    }
                    return temp
                })

            });
            this.listAllArchives = temp;
            this.userInfo.archives = this.listAllArchives;
            console.log(this.userInfo.archives, "User Info Archives")
        });
    }

        //GET ALL PROJECTS
    @action readProjects() {
        let dbRef = db.collection('NewProjects');
        let temp: any = []

        dbRef.onSnapshot((querySnapshot: any) => {
            this.listAllProjects = []
            temp = []
            querySnapshot.forEach((doc: any) => {
                this.userProjectID.map((e: any) => {
                    if (doc.data().id == e) {
                        let ele = {
                            name: doc.data().name,
                            id: doc.data().id,
                            owner: doc.data().owner,
                            tagnames: doc.data().tagnames,
                            team: doc.data().team,
                            archives: [{}]
                        }
                        this.innerArchivesID = doc.data().archives;
                        this.readInnerArchive(doc.data().id);
                        console.log(this.listInnerArchives, 'List inner archives')
                        ele.archives = this.listInnerArchives;
                        temp.push(ele);

                    } 
                  return temp
                })

            });
          
            this.listAllProjects = temp;
            this.userInfo.projects = this.listAllProjects;
            console.log(this.userInfo.projects, "User Info Projects")

        });

    }

    @action readTasks() {
        let dbRef = db.collection('NewProjects').doc(this.projectidActual).collection('Task');

        dbRef.onSnapshot((querySnapshot: any) => {
            this.taskInfo = []

            querySnapshot.forEach((querySnapshot: any) => {
                let tempTask = {
                    date: querySnapshot.data().date,
                    state: querySnapshot.data().state,
                    id: querySnapshot.data().id,
                    description: querySnapshot.data().description,
                    team: querySnapshot.data().team
                }

                this.taskInfo.push(tempTask)
            });
            console.log(this.taskInfo);
        });
    }
    //This method search an array of archives of an array of archive id's
    readInnerArchive(id: string) {
        let dbRef = db.collection('NewArchives');
        let temp: any = [];

        dbRef.onSnapshot((querySnapshot: any) => {

            querySnapshot.forEach((doc: any) => {
                this.innerArchivesID.map((e: any) => {

                    if (doc.data().id == e) {
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
                        console.log(ele, 'LOOP')

                        temp.push(ele);

                    } else {

                    }
                    return temp
                })

            });
            console.log(temp, 'LIST INNER ARCHIVES')
            this.listInnerArchives = temp;

        });
    }
}

export const firebaseStore = new FsActionStore();