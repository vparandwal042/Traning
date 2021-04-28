//1
const a = 10
console.log(a)
// cannot assign because it is const a = 12

//2
if(true)
{
    let x = 11
    console.log(x)
}
// cannot find x because let x = 11 console.log(x)

//3
var Order = { id: 1, title: "The Order", price: 200 }
function printOrder(){
    console.log(Order)
}
function getPrice(){
    console.log(Order.price)
}
var new_Order = Object.assign( {}, Order )
printOrder()
getPrice()
console.log("New Object using Object.assign() = ", new_Order)

//4
let fourth = (str) =>{
    let str_name = ["name", "length"]
    let str_length = []
    for(let i = 0;i < str.length;i ++){
        let temp = []
        temp[0] = str[i]
        temp[1] = str[i].length
        str_length[i] = temp
    }

    let data = []
    data[0] = str_name
    for(let i = 0;i < 3;i ++){
        data[i+1] = str_length[i]
    }

    var keys = data.shift(),
        i = 0, k = 0,
        obj = null,
        output = [];

    for (i = 0; i < data.length; i++) {
        obj = {};

        for (k = 0; k < keys.length; k++) {
            obj[keys[k]] = data[i][k];
        }

        output.push(obj);
    }
    console.log("Output = ", output)
}
let str = ["Tom", "Ivan", "Jerry"]
fourth(str)

//5
let add = (a = 2, b = 3) =>{
    console.log(a + b)
}
add() //default parameter
add(3) //optional parameter

function userFriends(username, ...listOfFriends){ //rest parameter
    console.log("Username = ", username)
    console.log("List of Friends = ", listOfFriends)
}
userFriends("vparandwal", "vishal", "abc", "xyz")

function printCapitalNames(a?, b?, c?, d?, e?){
    console.log(a.toUpperCase(), b.toUpperCase(), c.toUpperCase(), d.toUpperCase(), e.toUpperCase())
}
let small_name = ["vishal", "abc", "xyz", "pqr", "ijk"]
printCapitalNames(...small_name) //spread parameter

//6
let laptop = {
    model: "akcdck",
    desk_no: 12,
    name: "vishal"
}

console.log(`Hi, I am ${laptop.name}! \nmy Model is ${laptop.model} and Desk No. is ${laptop.desk_no}`)

//7
var array = [1, 2, 3, 4]
var [first, second, third] = array
console.log(third)

let org = {
    org_name: "ABC",
    address: {
        city: "Pune",
        state: "Maharashtra",
        zipcode: 412101
    } 
}
let { address: { zipcode } } = org
console.log(zipcode)

//8
class classAccount{
    id: number
    cust_name: string
    balance: number
    constructor(id, cust_name, balance){
        this.id = id
        this.cust_name =cust_name
        this.balance = balance
    }
}

class SavingAccount extends classAccount{
    interest: number
    cash_credit: number
    constructor(id, cust_name, balance, cash_credit){
        super(id, cust_name, balance)
        this.interest = 0.12
        this.cash_credit = cash_credit
    }

    total_balance(): number{
        this.balance += this.cash_credit + (this.cash_credit*this.interest)
        return this.balance
    }
}

class currentAccount extends classAccount{
    interest: number
    cash_credit: number
    constructor(id, cust_name, balance, cash_credit){
        super(id, cust_name, balance)
        this.interest = 0.1
        this.cash_credit = cash_credit
    }

    total_balance(): number{
        this.balance += this.cash_credit + (this.cash_credit*this.interest)
        return this.balance
    }
}

let sobj = new SavingAccount(1, "vishal", 0, 1200)
let cobj = new currentAccount(1, "abc", 0,  1500)

let s_balance = sobj.total_balance()
let c_balance = cobj.total_balance()

console.log("Saving Account balance = ", s_balance, "Current Account balance = ", c_balance)

let sobj1 = new SavingAccount(2, "xyz", s_balance, 2000)
let cobj1 = new currentAccount(2, "pqr", c_balance, 5000)

let s_balance1 = sobj1.total_balance()
let c_balance1 = cobj1.total_balance()

console.log("Saving Account balance = ", s_balance1, "Current Account balance = ", c_balance1)