var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//1
var a = 10;
console.log(a);
// cannot assign because it is const a = 12
//2
if (true) {
    var x = 11;
    console.log(x);
}
// cannot find x because let x = 11 console.log(x)
//3
var Order = { id: 1, title: "The Order", price: 200 };
function printOrder() {
    console.log(Order);
}
function getPrice() {
    console.log(Order.price);
}
var new_Order = Object.assign({}, Order);
printOrder();
getPrice();
console.log("New Object using Object.assign() = ", new_Order);
//4
var fourth = function (str) {
    var str_name = ["name", "length"];
    var str_length = [];
    for (var i_1 = 0; i_1 < str.length; i_1++) {
        var temp = [];
        temp[0] = str[i_1];
        temp[1] = str[i_1].length;
        str_length[i_1] = temp;
    }
    var data = [];
    data[0] = str_name;
    for (var i_2 = 0; i_2 < 3; i_2++) {
        data[i_2 + 1] = str_length[i_2];
    }
    var keys = data.shift(), i = 0, k = 0, obj = null, output = [];
    for (i = 0; i < data.length; i++) {
        obj = {};
        for (k = 0; k < keys.length; k++) {
            obj[keys[k]] = data[i][k];
        }
        output.push(obj);
    }
    console.log("Output = ", output);
};
var str = ["Tom", "Ivan", "Jerry"];
fourth(str);
//5
var add = function (a, b) {
    if (a === void 0) { a = 2; }
    if (b === void 0) { b = 3; }
    console.log(a + b);
};
add(); //default parameter
add(3); //optional parameter
function userFriends(username) {
    var listOfFriends = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        listOfFriends[_i - 1] = arguments[_i];
    }
    console.log("Username = ", username);
    console.log("List of Friends = ", listOfFriends);
}
userFriends("vparandwal", "vishal", "abc", "xyz");
function printCapitalNames(a, b, c, d, e) {
    console.log(a.toUpperCase(), b.toUpperCase(), c.toUpperCase(), d.toUpperCase(), e.toUpperCase());
}
var small_name = ["vishal", "abc", "xyz", "pqr", "ijk"];
printCapitalNames.apply(void 0, small_name); //spread parameter
//6
var laptop = {
    model: "akcdck",
    desk_no: 12,
    name: "vishal"
};
console.log("Hi, I am " + laptop.name + "! \nmy Model is " + laptop.model + " and Desk No. is " + laptop.desk_no);
//7
var array = [1, 2, 3, 4];
var first = array[0], second = array[1], third = array[2];
console.log(third);
var org = {
    org_name: "ABC",
    address: {
        city: "Pune",
        state: "Maharashtra",
        zipcode: 412101
    }
};
var zipcode = org.address.zipcode;
console.log(zipcode);
//8
var classAccount = /** @class */ (function () {
    function classAccount(id, cust_name, balance) {
        this.id = id;
        this.cust_name = cust_name;
        this.balance = balance;
    }
    return classAccount;
}());
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(id, cust_name, balance, cash_credit) {
        var _this = _super.call(this, id, cust_name, balance) || this;
        _this.interest = 0.12;
        _this.cash_credit = cash_credit;
        return _this;
    }
    SavingAccount.prototype.total_balance = function () {
        this.balance += this.cash_credit + (this.cash_credit * this.interest);
        return this.balance;
    };
    return SavingAccount;
}(classAccount));
var currentAccount = /** @class */ (function (_super) {
    __extends(currentAccount, _super);
    function currentAccount(id, cust_name, balance, cash_credit) {
        var _this = _super.call(this, id, cust_name, balance) || this;
        _this.interest = 0.1;
        _this.cash_credit = cash_credit;
        return _this;
    }
    currentAccount.prototype.total_balance = function () {
        this.balance += this.cash_credit + (this.cash_credit * this.interest);
        return this.balance;
    };
    return currentAccount;
}(classAccount));
var sobj = new SavingAccount(1, "vishal", 0, 1200);
var cobj = new currentAccount(1, "abc", 0, 1500);
var s_balance = sobj.total_balance();
var c_balance = cobj.total_balance();
console.log("Saving Account balance = ", s_balance, "Current Account balance = ", c_balance);
var sobj1 = new SavingAccount(2, "xyz", s_balance, 2000);
var cobj1 = new currentAccount(2, "pqr", c_balance, 5000);
var s_balance1 = sobj1.total_balance();
var c_balance1 = cobj1.total_balance();
console.log("Saving Account balance = ", s_balance1, "Current Account balance = ", c_balance1);
