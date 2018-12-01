import {observable, action} from 'mobx'
import { db, storage } from '../../config/firebaseConfig';
import UploadConfirmation from '../components/Editor/AddMenu/UploadConfirmation/UploadConfirmation';

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
        this.uploadConfirmation = !this.uploadConfirmation
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
          parent: 'none',
          children: [],
          fileURL: "",
          name: "",
          sourceURL: "",
          tagnames: [],
          type: "file",
          size: "",
          date: ""
      };
  
      @action clearFile() {
          this.newFile = {
            id: "File ID",
            parent: 'none',
            children: [],
            fileURL: "",
            name: "",
            sourceURL: "",
            tagnames: [],
            type: "file",
            size: "",
            date: ""
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
        this.files.push(this.newFile);
        db.collection("NewArchives").add(this.newFile)
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
    }

     // >>>>>> ADD FOLDER VARIABLES AND FUNCTIONS <<<<<<

        // --- Folder Display ---
    @observable newFolder: any = {
        id: "Folder ID",
        parent: 'none',
        children: [],
        fileURL: "",
        name: "",
        sourceURL: "",
        tagnames: [],
        type: "folder",
        size: "",
        date: ""    
    };

   
    // --- PopUp Window ---
        @observable folderPopUpAdd: boolean = false;

        @action folderPopUpAddStatus() {
            this.folderPopUpAdd = !this.folderPopUpAdd;
        };

        @action addNewFolder() {
            db.collection("NewArchives").add(this.newFolder)
                .then(function (docRef) {
                    console.log("Document written with ID: ", docRef.id);
    
                    this.newFolder.id = docRef.id;
    
                    this.folders.push(this.newFolder);
                })
                .catch(function (error) {
                    console.error("Error adding document: ", error);
            });
        }

        @action clearFolder() {
            this.newFolder = {
                id: "Folder ID",
                parent: 'none',
                children: [],
                fileURL: "",
                name: "",
                sourceURL: "",
                tagnames: [],
                type: "folder",
                size: "",
                date: ""  
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
        archives: []
    };

    @action addNewProject() {
        this.projects.push(this.newFolder);
        db.collection("NewProjects").add(this.newProject)
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
    }

    @action clearProject() {
        this.newProject = {
        owner: 'current user',
        team: [],
        id: "projectID",
        name: "",
        description: "",
        tagnames: [],
        archives: []
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