const naiveSearch = (long, short) => {
    var count = 0
    for(let i=0; i<long.length; i++){
        for(let j=0; j<short.length; j++){
            if(short[j] !== long[i+j]){
                break
            }
            if(j === short.length -1){
                console.log("Found One!")
                count++
            }
        }
    } 
    return count
}

const test = "Hi my name is vahid ghadiri, and i'm doing my best to learn algorithms"

console.log(naiveSearch(test, "vahid"))