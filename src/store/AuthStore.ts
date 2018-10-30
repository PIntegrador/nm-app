import { observable, action, computed, extendObservable } from 'mobx';
import { db, storage, auth } from '../../config/firebaseConfig';

class AuthStore {
    @observable user: any = null;
    @observable error: any = null;
    @observable isLogged: boolean = false;

    @observable name: string = "";
    @observable lastName: string = "";
    @observable email: string = "";
    @observable password: string = "";

    @action handleInput(data: string, input: string) {
        if (input === "name") {
            this.name = data;
        }
        if (input === "lastname") {
            this.lastName = data;
        }
        if (input === "email") {
            this.email = data;
        }
        if (input === "pass") {
            this.password = data;
        }
    }

    constructor() {

        auth.onAuthStateChanged(function(user){
            if(user){
                console.log(user);
            } else {
                console.log("no funcionooooo")
            }
        });

        auth.onAuthStateChanged((receivedUser) => {
            if (receivedUser) {
                this.user = receivedUser;
                this.isLogged = true;
                console.log(this.isLogged);
            } else {
                this.user = null;
                this.isLogged = false;
                console.log("no hay user")
            }
        });
    }

    @action login(email: any, pass: any) {
        auth.signInWithEmailAndPassword(email, pass)
            .catch(error => {
                this.error = error.message;
            });
    }

    @action register(email: string, pass: string) {
        auth.createUserWithEmailAndPassword(email, pass)
            .catch(error => {
                this.error = error.message;
            });
        this.login(email, pass);
    }

    @action cerrarSesion() {
        auth.signOut();
    }



}

export const authStore = new AuthStore();