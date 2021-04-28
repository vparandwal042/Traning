function Assign2(){
    number = document.getElementById('num').value
    numbers = number.split(" ")
    for(i = 0;i < numbers.length;i ++){
        var num = numbers[i]
        var pattern = ""
        if(num % 1 != 0 || num == '' || num == ' '){
            document.getElementById('pattern').innerHTML = "please enter number between 1-30"
        }
        else if(num < 1 || num > 30){
            document.getElementById('pattern').innerHTML = "please enter number between 1-30"
        }
        else{
            for(j = 0;j < num;j ++)
            {    
                pattern += '*'
                document.getElementById('pattern' + i).innerHTML = pattern
            }

        }
    }
}