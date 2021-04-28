var morseCode = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-",     ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]

var morseObj = {}

for (var i = 97, l = 97 + morseCode.length; i < l; i++) {
  morseObj[String.fromCharCode(i)] = morseCode[i - 97]
}

function morse(){
    var str = "This is Vishal"
    var output = ''
    for (var i = 0, l = str.length; i < l; i++) {
        var letter = str[i].toLowerCase()
        if (morseObj[letter]) {
            output += morseObj[letter] + ' '
        }
    }
    document.getElementById('morse').innerHTML = str + " = " + output
}