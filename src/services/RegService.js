import firebase from 'firebase';

export default class RegService {
    static register(email, password){
        return new Promise((resolve, reject) => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                console.log("REGISTER", result);
                resolve('OK');
            })
            .catch((error) => {
                var errorCode = error.code;
                console.log('AUTH SERVICE::::errorCode: ', errorCode);
                var errorMessage = error.message;
            })
        });
    }
}