import { observable, action, computed } from 'mobx';
import db from '../../config/firebaseConfig';

class HomeEditorStore {
    // >>>>>> ADD FOLDER VARIABLES AND FUNCTIONS <<<<<<

    // --- AddMenu ---
    @observable addMenu: boolean = false;

    @action addMenuStatus() {
        this.addMenu = !this.addMenu;
    };

    // --- PopUp Window ---
    @observable popUpAdd: boolean = false;

    @action popUpAddStatus() {
        this.popUpAdd = !this.popUpAdd;
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

    @action addNewFolder(){
        this.folders.push(this.newFolder);
        db.collection("TestFolders").add(this.newFolder)
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }

}

export const homeEditorStore = new HomeEditorStore();