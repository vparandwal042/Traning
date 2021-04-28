//1
/*class fibonacci{
    previousNo: number
    currentNo: number
    nextNo: number
    constructor(){
        this.previousNo = 0
        this.currentNo = 1
    }

    next(): void{
        this.nextNo = this.previousNo + this.currentNo
        console.log(this.nextNo)
        this.previousNo = this.currentNo
        this.currentNo = this.nextNo
    }
}

let obj = new fibonacci()
obj.next()
obj.next()
obj.next()
obj.next()
obj.next()*/
var next = Symbol();
var fibonacci = /** @class */ (function () {
    function fibonacci() {
        this.prevNum = 0;
        this.currNum = 1;
    }
    fibonacci.prototype[next] = function () {
        this.nextNo = this.prevNum + this.currNum;
        this.prevNum = this.currNum;
        this.currNum = this.nextNo;
        return this.nextNo;
    };
    return fibonacci;
}());
var obj = new fibonacci();
console.log(obj[next]());
console.log(obj[next]());
console.log(obj[next]());
console.log(obj[next]());
//2
function getnextArmstrong() {
    var i = 1;
    var nextArmNum = {
        next: function () {
            var numberOfDigits = i.toString().length;
            var sum = 0;
            var temp = i;
            while (temp > 0) {
                var remainder = temp % 10;
                sum += Math.pow(remainder, numberOfDigits);
                temp = Math.floor(temp / 10);
            }
            if (sum == i) {
                i++;
                return { value: sum, done: false };
            }
            else {
                i++;
                return { value: undefined, done: true };
            }
        }
    };
    return nextArmNum;
}
var armNum = getnextArmstrong();
var res = armNum.next();
for (var i_1 = 0; i_1 <= 2000; i_1++) {
    if (res.done == false)
        console.log(res.value);
    res = armNum.next();
    i_1++;
}
//3
function checkArmstrong(n) {
    var l = n.toString().length;
    var a;
    var m = n;
    var k = l;
    var temp = 0;
    while (k > 0) {
        a = m % 10;
        m = Math.floor(m / 10);
        temp += (Math.pow(a, l));
        k--;
    }
    if (temp == n) {
        return 1;
    }
    else {
        return 0;
    }
}
var i = 0;
function reset() {
    i = 0;
    return i;
}
function getArmstrong() {
    while (i < 10000) {
        if (i < 1000) {
            i++;
            if (checkArmstrong(i)) {
                return i;
            }
        }
        else {
            reset();
            return "Error!, number above 1000.";
        }
    }
}
for (var i_2 = 0; i_2 <= 2000; i_2++)
    console.log(getArmstrong());
//4
var chatroom1 = new Map();
chatroom1.set('user1', 'Hello');
chatroom1.set('user2', 'How are you');
chatroom1.set('user3', 'Wassup');
console.log(chatroom1);
var chatroom2 = new Map();
chatroom2.set('Abc', 'What\'s happening?');
chatroom2.set('Def', 'Where are you from?');
chatroom2.set('Ghi', 'Great!');
console.log(chatroom2);
function allUsers(chatroomName) {
    chatroomName.forEach(function (value, key) {
        console.log("" + key);
    });
}
function allMessages(chatroomName) {
    chatroomName.forEach(function (value, key) {
        console.log("" + value);
    });
}
allUsers(chatroom1);
allMessages(chatroom1);
allUsers(chatroom2);
allMessages(chatroom2);
