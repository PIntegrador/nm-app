import { observable, action } from 'mobx'
import { db, storage } from '../../config/firebaseConfig';
import UploadConfirmation from '../components/Editor/AddMenu/UploadConfirmation/UploadConfirmation';
import { authStore } from './AuthStore';

class AddDataStore {
    @observable folders: any[] = [];
    @observable projects: any[] = [];

    // >>>>>> FLOATING VARIABLES AND FUNCTIONS <<<<<<

    // --- AddMenu ---
    @observable addMenu: boolean = false;

    @observable sortButState: string = 'list';

    @observable uploadConfirmation: boolean = false;

    @observable recentUpload: string = "";

    @action addMenuStatus() {
        this.addMenu = !this.addMenu;
    };

    @action confirmUpload(type: string, upload: string) {
        this.uploadConfirmation = true;
        this.recentUpload = type + ": " + upload;
    }

    @action setToFalse() {
        this.uploadConfirmation = false;
    }

    // >>>>>> ADD FILE VARIABLES AND FUNCTIONS <<<<<<

    // --- PopUp Window ---

    @observable filePopUpAdd: boolean = false;

    @action filePopUpAddStatus() {
        this.filePopUpAdd = !this.filePopUpAdd;
    };

    // --- Drop Zone ---

    @observable accepted: any[] = [];
    @observable rejected: any[] = [];
    @observable files: any[] = [];

    @observable newFile: any = {
        id: "File ID",
        owner: "",
        parent: 'none',
        children: [],
        fileURL: "",
        name: "",
        sourceURL: "",
        tagnames: [],
        type: "file",
        size: "",
        date: "",
        extension: ""
    };

    @action clearFile() {
        this.newFile = {
            id: "File ID",
            owner: "",
            parent: 'none',
            children: [],
            fileURL: "",
            name: "",
            sourceURL: "",
            tagnames: [],
            type: "file",
            size: "",
            date: "",
            extension: "",
        };
    }

    //Upload file to storage
    @action uploadNewFile(file: any) {
        if (typeof file != 'undefined') {
            let storageRef = storage.ref();
            let testFilesRef = storageRef.child('Archives/' + file.name);

            testFilesRef.put(file);
            this.newFile.fileURL = testFilesRef.fullPath + "";
        }
    }

    //Upload file to Firebase
    @action addNewFile() {
        let date = new Date();
        let month = date.getMonth() + 1;
        this.newFile.date = date.getDate() + "/" + month + "/" + date.getFullYear();
        this.newFile.owner = authStore.user.uid;
        this.newFile.parent = authStore.user.uid;

        let newFolderId = "";
        db.collection("NewArchives").add(this.newFile)
            .then(function (docRef: any) {
                console.log("Document written with ID: ", docRef.id);

                newFolderId = docRef.id;
                let newRef = db.collection("NewArchives").doc(docRef.id);
                newRef.update({
                    id: docRef.id
                })
                    .then(function () {
                        console.log("Document successfully updated!");
                    })
                    .catch(function (error: any) {
                        console.error("Error updating document: ", error);
                    });

                this.files.push(this.newFile);
            })
            .catch(function (error: any) {
                console.error("Error adding document: ", error);
            });
        this.newFolder.id = newFolderId;
    }

    // >>>>>> ADD FOLDER VARIABLES AND FUNCTIONS <<<<<<

    // --- Folder Display ---
    @observable newFolder: any = {
        id: "Folder ID",
        owner: "",
        parent: 'none',
        children: [],
        fileURL: "",
        name: "",
        sourceURL: "",
        tagnames: [],
        type: "folder",
        size: "",
        date: "",
    };


    // --- PopUp Window ---
    @observable folderPopUpAdd: boolean = false;

    @action folderPopUpAddStatus() {
        this.folderPopUpAdd = !this.folderPopUpAdd;
    };

    @action addNewFolder() {
        let date = new Date();
        let month = date.getMonth() + 1;
        this.newFolder.date = date.getDate() + "/" + month + "/" + date.getFullYear();
        this.newFolder.owner = authStore.user.uid;
        this.newFolder.parent = authStore.user.uid;

        let newFolderId = "";
        db.collection("NewArchives").add(this.newFolder)
            .then(function (docRef: any) {
                newFolderId = docRef.id;
                let newRef = db.collection("NewArchives").doc(docRef.id);
                newRef.update({
                    id: docRef.id
                })
                    .then(function () {
                        console.log("Document successfully updated!");
                    })
                    .catch(function (error: any) {
                        console.error("Error updating document: ", error);
                    });

                this.folders.push(this.newFolder);
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function (error: any) {
                console.error("Error adding document: ", error);
            });
        this.newFolder.id = newFolderId;
    }

    @action clearFolder() {
        this.newFolder = {
            id: "Folder ID",
            owner: "",
            parent: 'none',
            children: [],
            fileURL: "",
            name: "",
            sourceURL: "",
            tagnames: [],
            type: "folder",
            size: "",
            date: "",
        };
    }

    // >>>>>> ADD PROJECT VARIABLES AND FUNCTIONS <<<<<<

    // --- PopUp Window ---
    @observable projectPopUpAdd: boolean = false;

    @action projectPopUpAddStatus() {
        this.projectPopUpAdd = !this.projectPopUpAdd;
    };

    // --- Project Display ---
    @observable newProject: any = {
        owner: 'current user',
        team: [],
        id: "projectID",
        name: "",
        description: "",
        tagnames: [],
        archives: [],
        date: "",
    };

    @action addNewProject() {
        let date = new Date();
        let month = date.getMonth() + 1;
        this.newProject.date = date.getDate() + "/" + month + "/" + date.getFullYear();
        this.newProject.owner = authStore.user.uid;

        let newProjectId: string = "";
        db.collection("NewProjects").add(this.newProject)
            .then(function (docRef: any) {
                newProjectId = docRef.id;

                let newRef = db.collection("NewProjects").doc(docRef.id);
                newRef.update({
                    id: docRef.id
                })
                    .then(function () {
                        console.log("Document successfully updated!");
                    })
                    .catch(function (error: any) {
                        console.error("Error updating document: ", error);
                    });

                this.projects.push(this.newProject);
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function (error: any) {
                console.error("Error adding document: ", error);
            });
            
        this.newProject.id = newProjectId;
    }

    @action clearProject() {
        this.newProject = {
            owner: 'current user',
            team: [],
            id: "projectID",
            name: "",
            description: "",
            tagnames: [],
            archives: [],
            date: "",
        };
    }

    // --- Tags ---
    @observable tags: string[] = [];

    @action addTags(string: string) {
        let tags = string.toUpperCase().split(" ");
        let tempArray = tags.filter(tag => tag.length >= 1);
        if (tempArray.length <= 3) {
            this.tags = tempArray
        }
    };
    @action eliminateTag(tag: string) {
        for (let i = 0; i < this.tags.length; i++) {
            if (tag === this.tags[i]) {
                this.tags[i] = "";
            }
        }
    };
    @action clearTags() {
        this.tags = [];
    };

}
export const addStore = new AddDataStore();