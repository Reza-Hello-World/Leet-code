let digits = function(nums) {

    const digit = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j',
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
        'w', 'x', 'y', 'z'
    ]

    const test = '23'

    for (i = 0; i < 3 * (test[0] - 1); i++) {
        console.log(digit[i])
    }
    // let = digit[] + test[1]
}

digits()