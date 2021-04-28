function isEven(num){
    return (num % 2  == 0)
}
function find(){
    for(i = 0;i < arguments[0].length;i ++){
        if(isEven(arguments[0][i]))
            return arguments[0][i]
    }
}

function Assign3(){
    document.getElementById('find').innerHTML = "find = " +  find([1, 3, 5, 4, 2], isEven)
}