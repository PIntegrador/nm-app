import { observable, action, computed, extendObservable } from 'mobx';
import { db, storage, auth } from '../../config/firebaseConfig';

class ProjectDashBoardStore {

    constructor() {
    }

    @observable menuOptionSelected: string = "archivos";
    @observable renderPopUpAddTask: boolean = false;
    @observable renderPopUpAddCollaborator: boolean = false;

    @observable thisProject: any = {
        collaborators: [{
            'name': 'Carlos'
        }, {
            'name': 'Juliana'
        }]
    }
    @observable thisProjectBackup: any = {
        collaborators: [{
            'name': 'Carlos'
        }, {
            'name': 'Juliana'
        }]
    }

    @observable newTask: any = {
        state: '',
        description: '',
        date: '',
        collaborators: []
    }

    @action handleTaskName(name: string) {
        this.newTask.description = name;
        console.log(this.newTask.description)
    }
    @action handleTaskDate(date: Date) {
        let dater = new Date(date);

        const options = { month: 'long', day: 'numeric', year: 'numeric' };

        let finalDate = dater.toLocaleDateString('es-MX', options);
        finalDate = finalDate.replace(' de', ',');

        this.newTask.date = finalDate;
        console.log(this.newTask.date);

    }

    @action handleTaskCollaborators(name: string) {

        let collaborator = {
            'name': name
        }

        this.newTask.collaborators.push(collaborator);
        console.log(this.newTask.collaborators);
    }

}

export const projectDash = new ProjectDashBoardStore();