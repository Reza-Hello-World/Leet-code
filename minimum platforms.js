const arr = [0900, 0940, 0950, 1130, 1500]

const dep = [0910, 1200, 1120, 1135, 1900]

let count = 1

for (i = 1; i < arr.length; i++) {

    for (j = i - 1; j = 0; j--) {

        if (arr[i] < dep[j]) {
            break
        }

    }

}

console.log()