import { observable, action, computed, extendObservable } from 'mobx';
import { db, storage, auth } from '../../config/firebaseConfig';

class AuthStore {

    constructor() {
        auth.onAuthStateChanged((receivedUser) => {
            if (receivedUser) {
                this.user = receivedUser;
                this.isLogged = true;
                console.log("Usuario logueado: " + this.isLogged);
            } else {
                this.user = null;
                this.isLogged = false;
                console.log("no hay user")
            }
        });

    }

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
                return;
            });

        //pasa el return si logra crearlo, si da error, no

        //escribe en la base de datos
        this.createUserInDB();
        //si logra registar
        this.login(email, pass);
    }

    @action signOut() {
        auth.signOut();
    }

    @action createUserInDB() {
        // Add a new document with a generated id.
        db.collection("Users").add({
            userName: this.name + " " + this.lastName,
            email: this.email
        })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
    }

}

export const authStore = new AuthStore();