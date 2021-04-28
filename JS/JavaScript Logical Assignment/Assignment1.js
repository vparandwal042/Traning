function Assign1(){
    tempF = document.getElementById('tempF').value
    if(tempF % 1 != 0 || tempF == '' || tempF == ' ')
        document.getElementById('tempC').innerHTML = "please enter a number"
    else
    {
        tempC = (tempF - 32) * (5/9)
        document.getElementById('tempC').innerHTML = tempC + " degree Celsius"
    }
}