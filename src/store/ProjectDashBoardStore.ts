import { observable, action, computed, extendObservable } from 'mobx';
import { db, storage, auth } from '../../config/firebaseConfig';
import { firebaseStore } from './FsActionStore';

class ProjectDashBoardStore {

    constructor() {
    }

    @observable menuOptionSelected: string = "tareas";
    @observable renderPopUpAddTask: boolean = false;
    @observable renderPopUpAddCollaborator: boolean = false;

    @observable newTask: any = {
        state: '',
        description: '',
        date: '',
        team: [],
        id: ''
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


    @action addNewTask() {
        this.newTask.state = 'todo';
        let taskID: string = '';
        if (firebaseStore.projectidActual != '') {
            let dbRef = db.collection('NewProjects').doc(firebaseStore.projectidActual).collection('Task');

            dbRef.add(this.newTask)
                .then(function (docRef) {
                    taskID = docRef.id;

                    let newRef = db.collection('NewProjects').doc(firebaseStore.projectidActual).collection('Task').doc(taskID);

                    newRef.update({
                        id: docRef.id

                    }).then(function () {

                    }).catch(function () {

                    })
                    console.log('Task written with ID:', docRef.id);

                })
                .catch(function (err) {
                    console.log(err)
                });

            this.newTask.id = taskID;
        }

    }

    @action deleteTask(id: string) {
        if (firebaseStore.projectidActual != '') {
            if ( id != '') {
                let dbRef = db.collection('NewProjects').doc(firebaseStore.projectidActual).collection('Task').doc(id);

                dbRef.delete().then(function () {
                    console.log("Document successfully deleted!");
                    return;
                }).catch(function (error) {
                    console.error("Error removing document: ", error);
                });

            }
        }
    }

    @action updateTaskState (type : string ) {
        if (type == 'todo') {
            //change state to doing
            console.log ('IT WILL CHANGE TO DOING')
        } else if (type == 'doing') {
            //change state to done
            console.log ('IT WILL CHANGE TO DONE')

        } else if (type == 'done') {
            //change state to doing
            console.log ('IT WILL CHANGE TO TODO')

        }
    }
}

export const projectDash = new ProjectDashBoardStore();