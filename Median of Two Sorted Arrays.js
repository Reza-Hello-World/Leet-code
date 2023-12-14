let median = function(nums1, nums2) {

    let labal = []

    labal.push(...nums1)
    labal.push(...nums2)

    labal.sort(function(a, b) {
        return a - b
    })

    let length = labal.length

    let result = (labal[0] + labal[length - 1]) / 2

    console.log(result)
}

median([1, 2, 3, 8], [5, 4, 6, 7])