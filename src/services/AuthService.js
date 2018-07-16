import firebase from 'firebase';

export default class AuthService {

    static login(email, password){

        return new Promise((resolve, reject) => {

            firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result) =>{
                console.log("LOGIN",result);
                resolve('ok');
            })

            .catch((error) => {
                var errorCode = error.code;
                console.log('AUTH SERVICE::::errorCode: ', errorCode);
                var errorMessage = error.message;
                
                if(errorCode === "auth/wrong-password"){
                    reject('User and or Password not valid');
                }
            });
            
        });
    }
}