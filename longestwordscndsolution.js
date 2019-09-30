//find length of longest string using recursion
function longestWordLength(s) {
    s = s.split(" ");
    if(s.length === 1){
        return s[0].length;
    }
    if(s[0].length >= s[1].length){
        s.splice(1,1);
        return longestWordLength(s.join(" "));
    }
    if(s[0].length <= s[1].length){
        s.splice(0,1);
        return longestWordLength(s.join(" "));
    }
}
