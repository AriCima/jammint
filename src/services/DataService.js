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

    static saveUserContactInfo(userId, userPicture, name, surnames, passport, passportPic,
         street, houseNr, floorNr, doorNr, zipCode, city,country, tel, mobile, email, 
         checkInDate, checkOutDate, studies, school, jams, roomNr)
        {  //registro en Firebase

        return new Promise((resolve, reject) => {

            firebase.firestore().collection('users').doc(userId).set({
                userId      : userId,
                userPicture : userPicture,
                name        : name,
                surnames    : surnames,
                passport    : passport,
                passportPic : passportPic,
                street      : street,
                houseNr     : houseNr,
                floorNr     : floorNr,
                doorNr      : doorNr,
                zipCode     : zipCode,
                city        : city,
                country     : country,
                tel         : tel,
                mobile      : mobile,
                email       : email,
                checkInDate : checkInDate,
                checkOutDate: checkOutDate,
                studies     : studies,
                school      : school,
                jams        : jams, 
                roomNr      : roomNr,
            })
            .then((result) => {
                
                console.log("User succesfully added !")
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




}
