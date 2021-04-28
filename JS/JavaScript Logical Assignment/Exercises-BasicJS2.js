//4
function sum(){
    var sum = 0
    var n = document.getElementById('4').value
    for(i = 1;i <= n;i ++){
        sum += i
    }
    document.getElementById('4ans').innerHTML = sum
}

//5
function sum3(){
    var sum = 0
    for(i = 1;i <= 17;i ++){
        if(i % 3 == 0 || i % 5 == 0)
            sum += i
    }
    document.getElementById('5ans').innerHTML = sum
}

//6
function sol6(){
    var n = prompt("Please enter a number", "Any Number 1-9")
    var choose = prompt("Please enter a number 1 for factorial 2 for sum", "1-2")
    if(!isNaN(n)){
    if(choose == 1){
        function factorial(x) 
        { 

            if (x === 0){
            return 1;
        }
            return x * factorial(x-1)

        }
        x = factorial(n);
        alert(x);
    }else if(choose == 2){
            var x = ((parseInt(n)+1) *n) /2
            if(x % 5 == 0 || x % 3 == 0){
                alert(x)
            }else{
                alert('Not a multiple')
            } 
    }else{
        alert('Please enter a valid number')
    }
    }else{
    alert('Please enter a number')
    }

}

//7
function table(){
    var n = 12
    res = ""
    for(i = 1;i <= 10;i ++){
        number = n * i;
        res +=  n + " * " + i + " = " + number + "<br/>";
    }
    document.getElementById('table').innerHTML = res
}

//8
function prime(){
    var store  = [], i, j, primes = []
    for (i = 2; i <= 100; ++i) 
    {
        if (!store [i]) 
          {
            primes.push(i);
            for (j = i << 1; j <= 100; j += i) 
            {
                store[j] = true
            }
        }
    }
    document.getElementById('prime').innerHTML = primes 
}

//10
function leapYears() {
    var years = 0
    var currentYear = 2021
    res = ""
    while (years < 20) { 
        if ((currentYear % 4 === 0) && (!((currentYear % 100 === 0) && (currentYear % 400 !== 0)))) {

            res += currentYear + " "
            years++
            currentYear++
        } else {
            currentYear++
        }
    }
    document.getElementById('leap-years').innerHTML = res
}

//11
function Max(){
    list = [1, 6, 3, 5, 4, 7]
    document.getElementById('max').innerHTML =  Math.max.apply(Math, list)
}

//12
function Reverse(){
    list = [1, 2, 3, 4, 5, 6, 7]
    document.getElementById('reverse').innerHTML =  list.reverse()
}

//13
function check(){
    list = [1, 2, 3, 4, 5, 6]
    ele = 2, elefound = "not found"
    for(i = 0;i < list.length;i ++){    
        if(ele == list[i]){
            elefound = "found"
            break
        }
    }
    document.getElementById('check').innerHTML = ele + " " + elefound + " in list"
}

//14
function odd(){
    list = [1, 2, 3, 4, 5, 6], res = ""
    for(i = 0;i < list.length;i ++){    
        if(i % 2 != 0)
            res += list[i] + " "
    }
    document.getElementById('odd').innerHTML = res
}

//15
function running(){
    list = [1, 2, 3, 4, 5, 6], runlist = []
    sum = list[0]
    runlist.push(list[0])
    for(i = 1;i < list.length;i ++){
        sum += list[i]
        runlist.push(sum)
    }
    document.getElementById('running').innerHTML = runlist
}


//16
function palindrome() {

    var str = "abba"
    var len = str.length
    var mid = Math.floor(len/2)
    var res = true

    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            res = false;
        }
    }
    document.getElementById('palindrome').innerHTML = res + " for abba"
}

//18
function perfectSquare(){
    perfect = "", i = j = 1
    while(j <= 20){
        root = Math.sqrt(i)
        if(root == Math.floor(root)){
            perfect += i + " "
            j ++
        }
        i ++
    }
    document.getElementById('perfect').innerHTML = perfect
}

//19
function Concatenate(){
    list1 = ['a', 'b', 'c'], list2 = [1, 2, 3]
    document.getElementById('Concat').innerHTML = list1.concat(list2)
}

//20
function altConcatenate(){
    list1 = ['a', 'b', 'c'], list2 = [1, 2, 3]
    res = []
    for(i = 0; i < list1.length + list2.length; i++){
        if(i % 2 === 0)
            res.push(list1[i/2])
        else
            res.push(list2[(i-1)/2])
    }
    document.getElementById('altConcat').innerHTML = res
}

//21
function sortMerge(){
    list1 = [1, 4, 6], list2 = [2, 3, 5]
    list3 = []
    list3 = list1.concat(list2)
    document.getElementById('sortMerge').innerHTML = list3.sort() 
}

//22
function rotate(){
    k = 2, list = [1, 2, 3, 4, 5, 6]
    for(i = 0;i <k;i ++){
        list.unshift(list.pop())
    }
    document.getElementById('rotate').innerHTML = list
}

//23
function fibonacci(){
    var fib = []
    fib[0] = 0
    fib[1] = 1
    for (i = 2; i <= 100; i++) {
        fib[i] = fib[i - 2] + fib[i - 1]
    }
    document.getElementById('fibonacci').innerHTML = fib
}

//24
function digits(){
    num = 2785
    output = []
    snum = num.toString()
    for(i = 0;i < snum.length;i ++)
        output.push(snum.charAt(i))

document.getElementById('digits').innerHTML = "Digits of 2785 = " + output
}

//25
function selSort(arr) { 
    for(i = 0; i < arr.length; i++) {
        min = i;
        for(j = i+1; j < arr.length; j++){
            if(arr[j] < arr[min]) {
                min = j 
            }
         }
         if (min != i) {
            tmp = arr[i] 
            arr[i] = arr[min]
            arr[min] = tmp      
        }
    }
    return arr
}

function merge(left, right){
    arr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    return [ ...arr, ...left, ...right ]
}
function mergeSort(arr){
    half = arr.length / 2
  
    if(arr.length < 2){
        return arr 
    }
    
    left = arr.splice(0, half)
    return merge(mergeSort(left),mergeSort(arr))

}

function partition(arr, start, end){
    pivotValue = arr[end]
    pivotIndex = start
    for (i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]]
            pivotIndex++
        }
    }
    
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
    return pivotIndex
}
function quickSort(arr, start, end){
    if (start >= end) {
        return
    }
    index = partition(arr, start, end)
    
    quickSort(arr, start, index - 1)
    quickSort(arr, index + 1, end)
}

function stoogeSort (array, i, j) {
    if (j === undefined) {
        j = array.length - 1
    }
 
    if (i === undefined) {
        i = 0
    }
 
    if (array[j] < array[i]) {
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
 
    if (j - i > 1) {
        var t = Math.floor((j - i + 1) / 3)
        stoogeSort(array, i, j-t)
        stoogeSort(array, i+t, j)
        stoogeSort(array, i, j-t)
    }
}
function Sort(){
    arr = [1, 5, 4, 3, 6, 8, 7, 2]
    document.getElementById('sel').innerHTML = "Selection Sort = " + selSort(arr)
    
    arr = [1, 5, -4, 2, 6, 8, -7, 0]
    document.getElementById('merge').innerHTML = "Merge Sort = " + mergeSort(arr)
    
    arr = [1, -5, 4, -3, 6, 8, 7, 2]
    quickSort(arr, 0, arr.length-1)
    document.getElementById('quick').innerHTML = "Quick Sort = " + arr
    
    arr = [1, 5, 4, 3, 0, -8, 7, -2]
    stoogeSort(arr)
    document.getElementById('stooge').innerHTML = "Stooge Sort = " + arr
}

//28
function binarySearch(){
    sortedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8], key = 3, found = false
    start = 0
    end = sortedArray.length - 1

    while (start <= end) {
        middle = Math.floor((start + end) / 2)

        if (sortedArray[middle] == key) {
            found = true
            break
        } else if (sortedArray[middle] < key) {
            start = middle + 1
        } else {
            end = middle - 1
        }
    }
    if(found)
        document.getElementById('binary').innerHTML = key +  " found at " + parseFloat(middle+1) + " index in [1, 2, 3, 4, 5, 6, 7, 8]"
    else    
        document.getElementById('binary').innerHTML = key + " Not found" + " in [1, 2, 3, 4, 5, 6, 7, 8]"
}

//29
function pattern(){
    list = ["Hello", "World", "in", "a", "frame"]
    res = "********** <br>"
    for(i = 0;i < list.length;i ++)
    {
        res += "* " + list[i] + " * <br>"
    }
    res += "**********"
    document.getElementById('pattern').innerHTML = res
}

//30
function letters(word) {
    return word.split('')
}

function pigLatinizeWord(word) {
    var chars = letters(word);
    return chars.slice(1).join('') + chars[0] + 'ay';
}
function pigLatin() {
    str = "The quick Brown Fox"
    res = ""
    res =  str.replace(/\w+/g, pigLatinizeWord)
    document.getElementById('piglatin').innerHTML = str + " = " + res
}