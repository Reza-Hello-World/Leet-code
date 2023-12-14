// roman to integer

let romanToInteger = function(item) {
    const roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let plus = 0;

    for (i = 0; i < item.length; i++) {

        let helpMe = roman[item[i]]
        plus = plus + helpMe
    }
    console.log(plus)
}

romanToInteger('MDL')
    // let romanString = 'MCI'