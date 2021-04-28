input1 = document.getElementById('input1')
input2 = document.getElementById('input2')

function mean(in1){
    series = in1.split(', ')
    series.pop()
    sum = 0
    for(i = 0;i < series.length;i ++)
    {
        sum += parseFloat(series[i])
    }
    document.getElementById('resultBox').innerHTML = "Answer = " + sum/series.length.toString()
}

function Solve(operator){
    in1 = parseFloat(document.getElementById('in1').value)
    
    switch(operator)
    {
        case '+':
            in2 = parseFloat(document.getElementById('in2').value)
            document.getElementById('resultBox').innerHTML = "Answer = " + (in1 + in2).toString()
            break
        case '-':
            in2 = parseFloat(document.getElementById('in2').value)
            document.getElementById('resultBox').innerHTML = "Answer = " + (in2 - in1).toString()
            break
        case '*':
            in2 = parseFloat(document.getElementById('in2').value)
            document.getElementById('resultBox').innerHTML = "Answer = " + (in2 * in1).toString()
            break
        case '/':
            in2 = parseFloat(document.getElementById('in2').value)
            document.getElementById('resultBox').innerHTML = "Answer = " + (in2 / in1).toString()
            break
        case 'e':
            in2 = parseFloat(document.getElementById('in2').value)
            document.getElementById('resultBox').innerHTML = "Answer = " + Math.pow(in1, in2).toString() 
            break
        case 'm':
            in1 = document.getElementById('in1').value
            mean(in1)
            break
    }
}

function Assign4(){
    if(document.getElementById('add').checked){
        Solve('+')
    }
    if(document.getElementById('subtract').checked){
        Solve('-')
    }
    if(document.getElementById('multiply').checked){
        Solve('*')
    }
    if(document.getElementById('divide').checked){
        Solve('/')
    }
    if(document.getElementById('exponent').checked){
        Solve('e')
    }
    if(document.getElementById('mean').checked){
        Solve('m')
    }
}

function inputs(){
    document.getElementById('input1').style.display = 'inline'
    document.getElementById('input2').style.display = 'inline'
    document.getElementById('resultBox').style.display = 'block'
    document.getElementById('input1').innerHTML = "<input type='text' id='in1' placeholder='Enter Input1'>"
    document.getElementById('input2').innerHTML = "<input type='text' id='in2' placeholder='Enter Input2'>"
}

function inputm(){
    document.getElementById('input1').style.display = 'inline'
    document.getElementById('input2').style.display = 'none'
    document.getElementById('resultBox').style.display = 'block'
    document.getElementById('input1').innerHTML = "<input type='text' id='in1' placeholder='Enter Input1'>"
}

function quit(){
    document.getElementById('input1').style.display = 'none'
    document.getElementById('input2').style.display = 'none'
    document.getElementById('resultBox').style.color = 'transparent'
    document.getElementById('quit').checked = false
}