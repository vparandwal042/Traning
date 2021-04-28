function longestPalindrome() {
    var str = "algoog"
    res = ""
    if (!str || str.length <= 1) {
        document.getElementById('longestpalindrome').innerHTML = str;
    }

    let longest = str.substring(0, 1);
    for (let i = 0; i < str.length; i++) {
        let temp = expand(str, i, i);
        if (temp.length > longest.length) {
            longest = temp;
        }
        temp = expand(str, i, i + 1);
        if (temp.length > longest.length) {
            longest = temp;
        }
    }
    document.getElementById('longestpalindrome').innerHTML = str + " = " + longest;

}
function expand(str, begin, end){
    while (begin >= 0 && end <= str.length - 1 && str[begin] === str[end]) {
        begin--;
        end++;
    }
    return str.substring(begin + 1, end);
}