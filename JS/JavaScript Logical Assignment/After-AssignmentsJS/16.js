function longestCommonSequence(str1, str2) {
    var output = "";
  
    for(let i = str1.length -1; i >= 0; i--) {   
      for(let j = str2.length -1; j >= 0; j--) {
        if( str2[j] === str1[i]
            ) {
            str2.replace(str2[j], "")
          output += str2[j]; 
          break
        }      
      } 
  
    }
    return output;
}

console.log(longestCommonSequence("ABAZDC", "BACBAD"));