import { observable, action, computed, extendObservable } from 'mobx';
import { db, storage, auth } from '../../config/firebaseConfig';

class ProjectDashBoardStore {

    constructor() {
    }

    @observable menuOptionSelected: string = "archivos";
    @observable renderPopUpAddTask: boolean = false;
    @observable renderPopUpAddCollaborator: boolean = false;

    @observable newTask: any = {
        state: '',
        description: '',
        date: '',
        team: []
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

    @action handleTaskCollaborators(id: string) {
        let teamMember = {
            'id': id
        }

        this.newTask.team.push(teamMember);
        console.log(this.newTask);
    }

    @action addNewTask(){

    }
}

export const projectDash = new ProjectDashBoardStore();