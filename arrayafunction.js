/* For döngüsü

    for(var a = 1; a < 10; a++;){
        code....
    }
*/
console.log("For ----------------------------------------------------------------");

let forNumber = ["Doğukan", "Oğuzhan", "Ahmet", "Arda"];
let forNumberLenght = forNumber.length;
for(let i = 0; i < forNumberLenght; i++){
    console.log(forNumber[i]);
}
console.log("For ----------------------------------------------------------------");

for(let a = 25; a > 3; a--){
    console.log(a);
}
console.log("While --------------------------------------------------------------");

/* While Döngüsü
    let a = 1 ;

    while(a < 10){
        code....
    }
*/ 

let whileNumber = [16, 15, 18, 25, 22, 55, 14, 74];
let whileNumberLenght = whileNumber.length;

/*Sort Normalde Sayıları Sıralamaz!! Bu yüzden function yazdım*/ 
function sırala (){
    whileNumber.sort(function sayıSırala (x , y){
        return x-y;
    })
}
sırala();

let ii = 0;
while(ii < whileNumberLenght){
    console.log(whileNumber[ii]);
    ii++;
}

console.log("Do While ------------------------------------------------------------");

/*Do While döngüsü

    let a = 1;

    do {
        code...
    };

    while(koşul);
    !!NOT!! DO WHİLE DA KOŞUL SAĞLANMASA DAHİ İLK DEĞER DÖNER.
*/ 

let dowhileNumber = ["Kirito", "Bell", "Fire Bolt", 15, 19, 111];
let dowhileNumberLenght = dowhileNumber.length;

let aa = 0;

do {
    console.log(dowhileNumber[aa])
    aa++
}

while(aa < dowhileNumberLenght);


console.log("Do While (not) ------------------------------------------------------");//Koşulu sağlamıyor fakat değer döndürüyor.

let dowhileNumberr = ["Kirito", "Bell", "Fire Bolt", 15, 19, 111];
let dowhileNumberLenghtt = dowhileNumber.length;

let aaa = 0;

do {
    console.log(dowhileNumberr[aaa])
    aaa++
}

while(aaa > dowhileNumberLenghtt);




