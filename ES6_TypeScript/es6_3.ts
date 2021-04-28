//1
const first_promise = new Promise((resolve, reject) => {
    let x = Math.floor(Math.random() * 10)
    let y = Math.floor(Math.random() * 10)
    console.log('First Promise values = ', x, y)
    let value = x + y

    if(value)   resolve(value)
    else reject(value)
})

const second_promise = new Promise((resolve, reject) => {
    let x = Math.floor(Math.random() * 10)
    let y = Math.floor(Math.random() * 10)
    console.log('Second Promise values = ', x, y)
    let value = x + y

    if(value)   resolve(value)
    else reject(value)
})

const allPromise = Promise.all([first_promise, second_promise])
allPromise.then( 
    success => console.log('Sum: ', success) 
    ).catch( error => console.log('Error: ', error) )

//2
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

//3
interface Printable{
    firstName: string
    lastName: string
    print: ()=> string
}

var circle: Printable = {
    firstName: "radius",
    lastName: "diameter",
    print: (): string => {return circle.firstName + " " + circle.lastName}
}

var employee: Printable = {
    firstName: "Vishal",
    lastName: "Parandwal",
    print: (): string => {return employee.firstName + " " + employee.lastName}
}

function printAll(circle, employee){
    console.log(circle.print())
    console.log(employee.print())
}
printAll(circle, employee)