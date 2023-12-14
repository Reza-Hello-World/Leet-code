let input = [4, 2, 0, 3, 2, 5];
let scale;
let diffrence = [];
let sum = 0;

if (input[0] < input[input.length - 1]) {
    scale = input[0];
} else {
    scale = input[input.length - 1];
}

input.forEach(item => {
    if (scale >= item) {
        diffrence.push(scale - item)
    }
})

for (i = 0; i < diffrence.length; i++) {

    sum = sum + diffrence[i]
}
console.log(diffrence)
console.log(sum)