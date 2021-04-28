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

const next = Symbol();

class fibonacci {
    private prevNum: number
    private currNum: number
    private nextNo: number
    constructor() {
     this.prevNum = 0;
     this.currNum = 1;
    }
    [next]() {
        this.nextNo = this.prevNum + this.currNum
        this.prevNum = this.currNum
        this.currNum = this.nextNo
            
        return this.nextNo
   }
}

let obj = new fibonacci()
console.log(obj[next]())
console.log(obj[next]())
console.log(obj[next]())
console.log(obj[next]())

//2
function getnextArmstrong(){
    let i = 1
    const nextArmNum = {
        next: function(){
            let numberOfDigits = i.toString().length;
            let sum = 0
            let temp = i
            while (temp > 0) {
                let remainder = temp % 10
                sum += remainder ** numberOfDigits
                temp = Math.floor(temp / 10)
            }
            if (sum == i) {
                i ++
                return { value: sum, done: false }
            }
            else{
                i ++
                return { value: undefined, done: true }
            }
        }
    }
    return nextArmNum
}

const armNum = getnextArmstrong()
let res = armNum.next()
for(let i = 0;i <= 2000;i ++){
    if(res.done == false)
        console.log(res.value)
    res = armNum.next()
    i++
}

//3
function checkArmstrong(n){
    let l = n.toString().length;
    let a;
    let m=n;
    let k=l;
    let temp = 0;
    while(k>0){
        a = m%10;
        m = Math.floor(m/10);
        temp+=(a**l);
        k--;
    }
    if (temp == n) {
        return 1;
    }
    else{
        return 0;
    }
}
 
let i=0;

function reset(){
    i = 0;
    return i;
}
 
function getArmstrong(){
    while (i<10000){
        if(i<1000){
            i++;
            if(checkArmstrong(i)){
                return i;
            }
        }
        else{
            reset();
            return "Error!, number above 1000.";
        }  
    }
}

for(let i = 0;i <= 2000;i ++)
    console.log(getArmstrong())

//4
const chatroom1 = new Map();
chatroom1.set('user1', 'Hello');
chatroom1.set('user2', 'How are you');
chatroom1.set('user3', 'Wassup');
console.log(chatroom1);

const chatroom2 = new Map();
chatroom2.set('Abc', 'What\'s happening?');
chatroom2.set('Def', 'Where are you from?');
chatroom2.set('Ghi', 'Great!');
console.log(chatroom2);

function allUsers(chatroomName){
    chatroomName.forEach((value, key) => {
        console.log(`${key}`)
      })
}

function allMessages(chatroomName){
    chatroomName.forEach((value,key) => {
        console.log(`${value}`)
      })
}

allUsers(chatroom1);
allMessages(chatroom1);

allUsers(chatroom2);
allMessages(chatroom2);