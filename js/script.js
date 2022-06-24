let interest = "ты любишь";
let interestEnd;
let age = 28;
if (age >= 18) {
   console.log("Ты уже взрослый");
} else {
   console.log('ты ребенок')
}
if (age < 18) {
   interestEnd = " мультики";
} else if (age < 20) {
   interestEnd = ' хорроры';
} else if (age < 30) {
   interestEnd = ' мелодраммы';
} else if (age < 40) {
   interestEnd = ' комедии';
} else if (age < 50) {
   interestEnd = ' сериалы';
} else {
   interestEnd = ' смотреть играй гармонь'
}

interest += interestEnd;
console.log(interest)

if (age < 18) {
   console.log('Ты любишь мультики')
} else if (age < 30) {
   console.log('ты любишь мелодрамы')
} else if (age < 40) {
   console.log('ты любишь комедии')
} else if (age < 50) {
   console.log('ты любишь хорроры')
} else if (age < 60) {
   console.log('ты смотришь сериалы')
} else {
   console.log('ты смотришь "Играй гармонь"')
}
