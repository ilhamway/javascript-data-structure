// Mengecek jika dua string adalah anagram
// Anagram adalah kata yang dibentuk melalui penataan ulang huruf-huruf dari beberapa kata lain.
//
// Contoh 1
// Input: a = "keen", b = "knee"
// Output: "Anagram"
// Explanation: Jika ditata, "knee" dan "keen" memiliki huruf-huruf yang sama, hanya berbeda urutan
//
// Contoh 2
// Input: a = "fried", b = "fired"
// Output: "Anagram"
// Explanation: Jika ditata, "fried" dan "fired" memiliki huruf-huruf yang sama, hanya berbeda urutan
//
// Contoh 3
// Input: a = "apple", b = "paddle"
// Output: "Bukan Anagram"
// Explanation: Jika ditata, "apple" dan "paddle" memiliki huruf-huruf yang berbeda

function anagramChecker(str1, str2) {

    strMap1 = new Map()
    strMap2 = new Map()

    for(let str of str1){
        if(strMap1.has(str)) strMap1.set(str, strMap1.get(str) + 1) 
        else strMap1.set(str, 1)
    }
    
    for(let str of str2){
        if(strMap2.has(str)) strMap2.set(str, strMap2.get(str) + 1) 
        else strMap2.set(str, 1)
    }

    for(let [str,val] of strMap1){
        testVal = strMap2.get(str)
        if(testVal !== val || testVal === undefined && !strMap2.has(str)) return false
    }
    
    return true
}

console.log(anagramChecker("keen", "knee"));
console.log(anagramChecker("kee", "knn"));
console.log(anagramChecker("fried", "fired"));

module.exports = {
    anagramChecker
}
