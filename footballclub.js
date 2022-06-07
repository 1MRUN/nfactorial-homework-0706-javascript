//football team
let teamate = "Imran";

const PRESIDENT = "Dalida";
let nameclub = 'Nfactorial club';
let AmountOfPlayers = 25;
let best = true;
let enemy = null;

let equip = {
    'balls': 5,
    'clothes': 10, 
    'fields': 2,
};
console.log(equip);
delete equip.fields;
equip['fans'] = 1000000;
equip.stadium = 1;
equip.how = function(){
  console.log(equip.fans);
}
equip.how()
let team = ['Baha','Tima', 'Kolya', 'Vanya'];
console.log(team.length);
team.push('petya')
team.pop()
team.unshift('Cristian Runaldu')
team.shift()
let youth = ['Van', 'Taimas', 'Do Hyeun'];
let startingteam = youth.concat(youth)
console.log(startingteam)
let ages = [15,30,23,21,27,22,22];
let favage = ages.filter((ages) => ages <= 23);
console.log(favage)
function suspend(price, ...people)
{
  return `${people} are fined ${price}.`;
}
let f = suspend(300, 'Baha', 'Tima')
console.log(f)
const spel = 'Abubaeka Fuga';
console.log(...spel)
let favplayer = startingteam.slice(1,5);
console.log(favplayer)
let color = 'red'
let kitcolor = color ?? 'red';
if (color == 'blue')
{
    console.log('wow')
}
else if('3' === 3)
{
    console.log('what??')
}
else
    console.log('oh...')
switch (ages[4]){
    case 22:
        console.log('Van !!')
    default:
        console.log('Who are you?')
}
for (i in ages){
    console.log(ages[i])
}
let ind = 0
while (ages[ind] != 22)
{
    console.log(ind)
    ind += 1
}
ind = 0
do {
    ind += 1
}while(ages[ind] != 22)
