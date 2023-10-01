const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);


function findMin(...value){
    return Math.min(...value)
}


function mergeObjects(obj1, obj2){
    return {...obj1, ...obj2}
}

function doubleAndReturnArgs(arr, ...string){
    const double =  string.map((val) => val * 2)
    return [...arr, ...double]
}


function removeRandom(items) {
    const newArray = [...items]
    const randomIndex = Math.floor(Math.random() * newArray.length)
    newArray.splice(randomIndex, 1)
    return newArray
}

function extend(array1, array2) {
    return [...array1, ...array2]
}


function addKeyVal(obj, key, val) {
    const newObj = {...obj}
    newObj[key] = val
    return newObj
}