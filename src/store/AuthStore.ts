import { observable, action, computed, extendObservable } from 'mobx';
import { db, storage, auth } from '../../config/firebaseConfig';
import { History } from 'history';

interface authProps {
   
}

class AuthStore {
    constructor() {
        auth.onAuthStateChanged((receivedUser) => {
            if (receivedUser) {
                this.user = receivedUser;
                this.isLogged = true;
                if (this.isNewUSer) {
                    this.addNewUser(this.user)
                    this.isNewUSer = false;
                }
            } else {
                this.user = null;
                this.isLogged = false;
            }
        });
    }

    @observable user: any = null;
    @observable error: any = null;
    @observable isError: boolean = false;
    @observable isNewUSer: boolean = false;
    @observable isLogged: boolean = false;

    @observable credentials = {
        email: "",
        password: "",
        rol: "",
    }
    @observable newUser = {
        email: "",
        rol: "",
        profilePicture: "",
        uid: "",
    }

    @action register(email: string, password: string, rol: string) {
        this.credentials.email = email;
        this.credentials.password = password;
        this.credentials.rol = rol;

        auth.createUserWithEmailAndPassword(email, password).catch(error => {
            let errorCode = error.code;
            let errorMessage = error.message;

            this.isError = true;
            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(errorMessage);
            }
        })
        this.isError = false;
        this.isNewUSer = true;
        this.isLogged = true;
    }
    @action setIsLogged(value:any){
        this.isLogged = value;
        console.log(this.isLogged);
    }

    @action login(email: string, password: string) {
        let logged = false;
        auth.signInWithEmailAndPassword(email, password)
            .catch(function (error) {
                let errorCode = error.code;
                let errorMessage = error.message;
                logged = false;
                alert(errorMessage);
            });
        history.go(1);
    }

    @action signOut() {
        auth.signOut();
        this.isLogged = false;
    }

    @action addNewUser(user: any) {
        if (user != null) {
            this.newUser.email = user.email;
            this.newUser.rol = this.credentials.rol;
            this.newUser.uid = user.uid;
            let img = user.email.split("@");
            this.newUser.profilePicture = img[0] + ".jpg";
            console.log("agregando usuario:")
            db.collection("Users").add(this.newUser);
            console.log(this.newUser.email)
        }
    }
}

export const authStore = new AuthStore();