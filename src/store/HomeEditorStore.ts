import { observable, action, computed } from 'mobx';
import db, { storage } from '../../config/firebaseConfig';
import { firebaseStore } from './FsActionStore';
class HomeEditorStore {
    // >>>>>> FLOATING VARIABLES AND FUNCTIONS <<<<<<

    // --- AddMenu ---
    @observable addMenu: boolean = false;

    @action addMenuStatus() {
        this.addMenu = !this.addMenu;
    };

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
    @observable today: any = new Date();
    @observable newFile: any = {
        IDFile: "File ID",
        IDFolder: "Folder ID",
        name: "",
        extension: "",
        size: "",
        creationDate: "",
        description: "",
        favorited: false,
        fileURL: "",
        tagnames: [],
    };

    @action clearFile() {
        this.newFile = {
            IDFile: "File ID",
            IDFolder: "Folder ID",
            name: "",
            extension: "",
            size: "",
            creationDate: "",
            description: "",
            favorited: false,
            fileURL: "",
            tagnames: [],
        };
    }

    @action uploadNewFile(file: any) {
        if (typeof file != 'undefined') {
            let storageRef = storage.ref();
            let testFilesRef = storageRef.child('Archives/' + file.name);

            testFilesRef.put(file);
            this.newFile.fileURL = testFilesRef.fullPath + "";
        }
    }

    @action addNewFile() {
        this.files.push(this.newFile);
        db.collection("Archives").add(this.newFile)
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
    }

    @action getDate() {
        let dd:any = this.today.getDate();
        let mm:any = this.today.getMonth() + 1; //January is 0!
        let yyyy:any = this.today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }

        this.today = mm + '/' + dd + '/' + yyyy;
        console.log("fecha: " + this.today);
    }

    // >>>>>> ADD FOLDER VARIABLES AND FUNCTIONS <<<<<<

    // --- PopUp Window ---
    @observable folderPopUpAdd: boolean = false;

    @action folderPopUpAddStatus() {
        this.folderPopUpAdd = !this.folderPopUpAdd;
    };

    // --- Tags ---
    @observable tags: string[] = [];

    @action addTags(string: string) {
        let tags = string.split(" ");
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
    @action clearFolder() {
        this.newFolder = {
            archives: [],
            favorited: false,
            name: "",
            description: "",
            tagnames: [],
        };
    }

    // --- Folder Display ---
    @observable newFolder: any = {
        archives: [],
        favorited: false,
        name: "",
        description: "",
        tagnames: [],
    };

    @observable folders: any[] = [];

    @action addNewFolder() {
        this.folders.push(this.newFolder);
        db.collection("Folders").add(this.newFolder)
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
    }


    @observable projectArray: any = [];
    @observable folderArray: any = [];
    @observable archiveArray: any = [];


    @action readProject(collection: string) {
        this.projectArray = []
        let ref = db.collection(collection).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let ele = {
                    name: doc.data().name,
                    description: doc.data().description,
                    id: doc.id
                };
                this.projectArray.push(ele);
            });
        });

    }

    @action readFolder(collection: string) {
        this.folderArray = []
        let ref = db.collection(collection).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let ele = {
                    archives: doc.data().archives,
                    description: doc.data().description,
                    favorited: doc.data().favorited,
                    name: doc.data().name,
                    tagnames: doc.data().tagnames,
                    id: doc.id
                };
                this.folderArray.push(ele);
            });
        });

    }

    @action readArchive(collection: string) {
        this.archiveArray = []
        let ref = db.collection(collection).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let ele = {
                    idFolder: doc.data().IDFolder,
                    description: doc.data().description,
                    fileURL: doc.data().fileURL,
                    favorited: doc.data().favorited,
                    name: doc.data().name,
                    tagnames: doc.data().tagnames,
                    id: doc.id
                };
                this.archiveArray.push(ele);
            });
        });

    }

}

export const homeEditorStore = new HomeEditorStore();