import { observable, action, computed } from 'mobx';
import db from '../../config/firebaseConfig';


class HomeEditorStore{ 
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