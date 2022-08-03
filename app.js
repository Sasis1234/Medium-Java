function filterOutFalsy(val1, val2){
    //Return first value if falsy otherwise return second value
    return !val1 ? val1 : val2
}

console.log(filterOutFalsy(0,500))
console.log(filterOutFalsy(false,100))
console.log(filterOutFalsy(true,'Dog'))

function arrLength(array) {
    return array.length
}

console.log(arrLength([1, 2, 3]))
console.log(arrLength([5, 0, -4, 1]))
console.log(arrLength([]))

function lastElem(array) {
    return array[array.length - 1]
}

console.log(lastElem([3, 2, 0, 6, 2]))
console.log(lastElem(['dog', 'cat', 'ball']))
console.log(lastElem([null,, 5, false]))

function arrSum(array) {
    let sum = 0
    for (let i=0; i < array.length; ++i) {
        sum = sum + array[i]
    }
    return sum
}

console.log(arrSum([2, 2, 2]))
console.log(arrSum([100, 200, 500]))
console.log(arrSum([0, -5, -10]))

function progressiveSum(num) {
    //given a number get the sum of all numbers before it
    let sum = 0
    for (let i = 1; i <= num; ++i) {
        sum = sum + i
    }
    return sum
}

console.log(progressiveSum(3))
console.log(progressiveSum(4))
console.log(progressiveSum(600))


function calcTime(sec) {
    let timeMin = Math.floor (sec / 60)
    let timeSec = sec % 60
    if (timeMin.toString().length === 1) {
        timeMin = '0' + timeMin
    }
    if (timeSec.toString().length === 1) {
        timeSec = '0' + timeSec
    }
    return timeMin + ':' + timeSec
}

console.log(calcTime(66))
console.log(calcTime(50))
console.log(calcTime(300))

function getMax(array) {
    max = array[0]
    for (i=1; i < array.length; ++i) {
        if (array [i] > max) {
            max = array [i]
        }
    }
    return max
}

console.log(getMax([5, 100, 0]))
console.log(getMax([12, 10, -20]))
console.log(getMax([-300, -100, -200]))

function reverseString(string) {
    let rev = ''
    for (let i = string.length - 1; i >= 0; --i){
        rev = rev + string[i]
    }
    return rev
}

console.log(reverseString('abc'))
console.log(reverseString('David'))
console.log(reverseString('This is cool'))

function convertToZeros(array) {
    for (let i = 0; i < array.length; ++i) {
        array [i] = 0
    }
    return array
}

console.log(convertToZeros([5, 100, 0]))
console.log(convertToZeros([12]))
console.log(convertToZeros([1, 2, 3, 4, 5]))

function removeApples (array) {
    let noApples = []
    for (i=0; i < array.length; i++){
        if (array[i] !== 'Apple') {
            noApples.push(array[i])
        }
    }
    return noApples
}

console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']))
console.log(removeApples(['Tomato', 'Orange', 'Banana']))
console.log(removeApples(['Banana', 'Orange', 'Apple']))

function filterOutFalsy(array) {
    let newArray = []
    for (let i = 0; i < array.length; ++i) {
        if (!!array[i] === true) {
            newArray.push(array[i])
        }
    }
    return newArray
}

console.log(filterOutFalsy(["", [], 0, null, undefined, "0"]))
console.log(filterOutFalsy(['Tomato', 'Orange', 'Banana', false]))

function filterOutFalsyTwo(array) {
    return array.filter(elem => !!elem === true)
}

console.log(filterOutFalsyTwo(["", [], 0, null, undefined, "0"]))
console.log(filterOutFalsyTwo(['Tomato', 'Orange', 'Banana', false]))

function convertToBoolean(array) {
    return array.map(elem => !!elem)
}

console.log(convertToBoolean([500, 0, "David", "", []]))