// code for mixed messages
const messagesArr = [
    ['Der Schmied', 'Der Müller', 'Die Gans', 'Der König', 'Der Schneider'], 
    ['trinkt', 'baut', 'käuft', 'isst', 'stiehlt'], 
    ['Kartoffeln', 'Leberkässemmel', 'Wein', 'Brot', 'Käse']
];

const randNum = () => Math.floor(Math.random() * 5);

const rand0 = randNum();
const rand1 = randNum();
const rand2 = randNum();

console.log(messagesArr[0][rand0] + ' ' + messagesArr[1][rand1] + ' ' + messagesArr[2][rand2] + '.');