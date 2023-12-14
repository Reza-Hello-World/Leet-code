//You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
// Merge all the linked-lists into one sorted linked-list and return it.

let list = [
    [1, 2, 3],
    [4, 5, 3],
    [8, 7, 5],
    [9, 2, 4, 1]
];

let helpList = []

for (i = 0; i < list.length; i++) {

    for (j = 0; j < list[i].length; j++) {

        helpList.push(list[i][j])
    }
}

helpList.sort(function(a, b) {
    return a - b
})

console.log(helpList)