function longestWordLength(str) {

//splits input string into individual words + creates array with length of each word
    let longestWordCount = str.split(" ").map(mapCount=>mapCount.length); 
    
//return count of longest word
    return Math.max(...longestWordCount); 
}
