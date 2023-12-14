//num from 10 base to 8 base

let num = 9654

let mods = []

let modsHelpy = []

let Dividend = 9,
    c, mod = 1;

while (Dividend > 8 || mod == 0) {

    Dividend = parseInt(num / 8);
    c = num % 8;
    mods.push(c);
    mod = c;
    num = Dividend;
}

modsHelpy.push(num)

for (i = 0; i < mods.length; i++) {

    modsHelpy.push(mods[mods.length - 1 - i])
}
// array indexes to a number

let arrLengh = modsHelpy.length

let help1 = 0
let help2 = arrLengh
let help3
let help4 = help2
for (let i = 0; i < arrLengh; i++) {
    help3 = modsHelpy[i] * Math.pow(10, (help4 - 1))
    help1 = help3 + help1
    help4--
}

console.log(help1)