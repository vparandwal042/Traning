function isEven(num){
    return (num % 2  == 0)
}
function find(){
    if(arguments[0].length > 0){
        if(arguments[1](arguments[0][0]))
        {
            return arguments[0][0]
        }
        
        return find(arguments[0].slice(1), arguments[1])
    }
}

function advAssign1(){
    document.getElementById('find-adv').innerHTML = "find recursive = " +  find([1, 3, 5, 4, 2], isEven)
}