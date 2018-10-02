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
    @observable newFile: any = {
        IDFile: "File ID",
        IDFolder: "Folder ID",
        description: "",
        favorited: false,
        fileURL: "",
        name: "",
        tagnames: [],
    };

    @action clearFile() {
        this.newFile = {
            IDFile: "File ID",
            IDFolder: "Folder ID",
            description: "",
            favorited: false,
            fileURL: "",
            name: "",
            tagnames: [],
        };
    }

    @action uploadNewFile(file: any) {
        let storageRef = storage.ref();
        let testFilesRef = storageRef.child('TestFiles/' + file.name);

        testFilesRef.put(file);
        this.newFile.fileURL = testFilesRef.fullPath+"";
    }

    @action addNewFile() {
        this.files.push(this.newFile);
        db.collection("TestFiles").add(this.newFile)
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
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
        db.collection("TestFolders").add(this.newFolder)
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
    }

}

export const homeEditorStore = new HomeEditorStore();