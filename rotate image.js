// allocate another matrix

let Image = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
let empthyArrays = [
    [],
    [],
    []
]
empthyArrays.forEach(Element => {
    let helpMe = empthyArrays.indexOf(Element)
    for (let i = 0; i < Image.length; i++) {
        Element.unshift(Image[i][helpMe])
    }
})
console.log(empthyArrays)

// it will be true when you dont use another matrix