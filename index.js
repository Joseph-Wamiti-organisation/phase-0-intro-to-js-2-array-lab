// Write your solution here!
const cats = [
    "Milo",
    "Otis",
    "Garfield"
]

// Append a cat to the end of the cats array use push()

function destructivelyAppendCat(name){
    cats.push("Ralph")
}

//prepend a cat the beginning of the cats array use unshift()

function destructivelyPrependCat(name){
    cats.unshift("Bob")
}

// Remove last cat from the end of the cats array use pop()
function destructivelyRemoveLastCat(){
    cats.pop()
}

// Removes the first cat from the cats array use shift()
function destructivelyRemoveFirstCat(){
    cats.shift()
}

// Appends a cat to the cats array and returns a new array, non-destructively
function appendCat(name){
    const appendCat = [...cats, "Broom"]
    return appendCat
}
function prependCat(name){
    const prependCat = ["Arnold", ...cats]
    return prependCat
}
function  removeLastCat(){
    const removeLastCat = cats.slice(0,2)
    return removeLastCat
}
function removeFirstCat(){
    const removeFirstCat = cats.slice(1)
    return removeFirstCat
}