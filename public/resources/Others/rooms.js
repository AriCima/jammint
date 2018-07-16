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

/*
for (i=0; i<10; i++){
    rooms[i]={room+i};
};
*/
console.log(room1);

console.log('El precio de la habitación ' + room1['number'] + ' es ' + room1['price'] + ' euros/mes');
console.log('El precio total incluidos los gastos es ' + (parseInt(room1['expenses']) +  parseInt(room1['price'])) + ' euros/mes');

