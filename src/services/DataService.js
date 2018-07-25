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

    static saveUserContactInfo(userId, userToSave)
        {  //registro en Firebase

        

        return new Promise((resolve, reject) => {

            firebase.firestore().collection('users').doc(userId).set(userToSave)
            .then((result) => {
                
                console.log("User information succesfully saved !")
                resolve(result);
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


    static getJammers(jamId){

        return new Promise((resolve, reject) => {

            firebase.firestore().collection('users').where(`jams.${jamId}`,`==`, true).get() // Where me devuelve todos los users que tengan ese jamId
            .then((result) => {
                resolve(result.docs);   
            })

            .catch((error) => {
               console.log('error: ', error)
                // reject('Usuario no existe', error)

            })
            
        });
    }

    static getBoardMessages(jamId){

        return new Promise((resolve, reject) => {

            firebase.firestore().collection('boardMessages').where(`jamId`,`==`, jamId).get() // Where me devuelve todos los mensajes que tengan ese jamId
            .then((result) => {
                resolve(result.docs);   
            })

            .catch((error) => {
               console.log('error: ', error)
                // reject('Usuario no existe', error)

            })
            
        });
    }




}
