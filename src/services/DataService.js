import firebase from 'firebase';

export default class DataService {

    static getJamByCode(jamCode){

        return new Promise((resolve, reject) => {

            firebase.firestore().collection('jams').where('jamCode', '==', jamCode).get()

            .then((result) => {
                if(result.docs.length > 0){
                    resolve(result.docs[0]);  //---> va al then de de register getjambycode
                } else {
                    reject('this jam does not exist');
                }
                console.log("Result: ", result)
           
                //resolve('ok');
            })

            .catch((error) => {
                var errorCode = error.code;
                console.log('La consulta no se pudo realizar: ', errorCode);
                var errorMessage = error.message;
                
            })
            
        });
    }

    static saveUserContactInfo(userId, email, jams){  //registro en Firebase

        return new Promise((resolve, reject) => {

            firebase.firestore().collection('users').doc(userId).set({
                email: email,
                jams: jams
            })
            .then((result) => {
                
                console.log("User succesfully added !")
                resolve('ok');
            })

            .catch((error) => {
                var errorCode = error.code;
                console.log('User NOT added: ', errorCode);
                var errorMessage = error.message;
                
            })
            
        });
    }

    static getUserContactInfo(userId){

        return new Promise((resolve, reject) => {

            firebase.firestore().collection('users').doc(userId).get()
            .then((result) => {
                resolve(result.data());   // OBTENGO TODO LO QUE TENGO ALMACENADO DE ÉSTE USUARIO
            })

            .catch((error) => {
               
                reject('Usuario no existe');

            })
            
        });
    }




}
