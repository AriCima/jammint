var rooms = [];

function roomInfo(number, sqrm, exterior, balcony, privateBathroom, bedType, price, expenses){
    this.number = number;
    this.sqrm = sqrm;
    this.exterior = exterior;
    this.balcony = balcony;
    this.privateBathroom = privateBathroom;
    this.bedType = bedType;
    this.price = price;
    this.expenses = expenses;
    
   
};

var room1 = new roomInfo(1, 13, true, true, false, 'twin', 480, 90);
var room2 = new roomInfo(2, 9, true, false, false, 'single', 400, 90);
var room3 = new roomInfo(3, 10, true, true, false, 'twin', 450, 90);
var room4 = new roomInfo(4, 7, true, true, false, 'twin', 400, 90);
var room5 = new roomInfo(5, 9, true, true, false, 'twin', 450, 90);
var room6 = new roomInfo(6, 11, true, true, false, 'twin', 550, 90);
var room7 = new roomInfo(7, 8, true, true, false, 'twin', 480, 90);
var room8 = new roomInfo(8, 6, true, true, false, 'twin', 300, 90);
var room9 = new roomInfo(9, 13, true, true, false, 'twin', 520, 90);
var room10 = new roomInfo(10, 16, true, true, false, 'twin', 510, 90);




function guestsInfo( name, surname1, surname2, passportNr, street, houseNr, zfloor, door, city, country, telephone, emergencyphone, email, checkInDate, checkOutDate, room, school){
    this. name =  name;
    this.surname1 = surname1;
    this.surname2 = surname2;
    this.passportNr = passportNr;
    this.street = street;
    this.houseNr = houseNr;
    this.floor = floor;
    this.door = door;
    this.city = city; 
    this.country = country;
    this.telephone = telephone;
    this.emergencyphone = emergencyphone;
    this.email = email;
    this.checkInDate = checkInDate;
    this.checkOutDate = checkOutDate;
    this.room = room;
    this.school = school;

    this.contract = function(){
        rooms(this.room);
        console.log('Barcelona, 1st of February 2018 \nMEETING\n\n D. Ariel Cima Porto with NIF 48.109.279-H and on the other hand, Miss./Mr. ' + this.name +  ' ' + this.surname1 + ' ' + this.surname2 + '; Passport Nr: '+ this.passportNr + '; Telephone number: ' + this.telephone + '; Emergency phone number: ' + this.emergencyphone + 'email: '+ this.email + '; residence in ' +this.street + ', ' + this.houseNr + ', ' + this.floor + 'º door' + this.door + ', ' + this.city + ', ' + this.country + '.hereinafter the STUDENT. \n\n DECLARE\n Ariel Cima Porto (hereinafter the owner) owns the flat located at C/ Ample, nº 53 Principal Primera, de Barcelona. \n II.	Spot a Home has managed the student´s search and the reservation process.\nIII.	During the term of this contract, the STUDENT will make an internship at' + this.school + '.\nIV.	The student is interested in staying in flat C/ Ample, nº 53 Principal Primera, 08002 Barcelona.\nV.	The student is interested in staying in room Nr ' + this.room1 + '.\nVI.	Which is signed this agreement of use and enjoyment of room in an apartment, without such accommodation in any case involving a total or partial lease of the property.\n\nAGREE\nFirst.- Rented room.\n   The STUDENT will stay from' + checkInDate + ' until ' + this.checkOutDate + 'not later than 12pm, with room for exclusive use, and being able to use alongside the other students all common areas.\n   Checking hours are from 9am till 8pm.\n   We will give priority to students who stay on the flat is people learning the same study or with a similar profile.\n\n  Second.- Monthly rent.\n The STUDENT will pay a monthly amount of ' rooms.price(room1) + '(including utilities), payable in advance prior to day 1 of each month in the account number of Ariel Cima Porto: \n\n    Beneficiario: Ariel Cima Porto\n    Entidad financiera: Caja de Ingenieros\n    Dirección entidad financiera: Via Laietana 39, 08003 Barcelona\n    Número de cuenta: 3025-0002-4614-3339-2076\n    Código IBAN ES73-3025-0002-4614-3339-2076 \n    Código Swift: CDENESBBXXX\n\n  Student will not be receiving the keys if previously he/she hasn´t paid in full the 2 months deposit and first month\'s rent.\n  STUDENT must pay the full monthly amount, even if the student doesn’t stay the whole month, unless another amount is expressly indicated in this contract.\n\n Third.- Deposit.\n The student will leave a deposit in the amount of 570 euros to cover possible damage to the flat and/or room. At the time of signature of this contract it has been paid an amount of 570');

    };
   
};

var ariel = new guestsInfo('Ariel', 'Cima', 'Porto', '48109279-H', 'Paseo Taulat', 142, 5, 'B', 'Barcelona', 'España', 663275253, 663275253, 'arielcimax@gmail.com', 24-01-2018, 30-08-2018, 3, 'UB');

ariel.contract();