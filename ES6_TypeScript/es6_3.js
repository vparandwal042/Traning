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
var first_promise = new Promise(function (resolve, reject) {
    var x = Math.floor(Math.random() * 10);
    var y = Math.floor(Math.random() * 10);
    console.log('First Promise values = ', x, y);
    var value = x + y;
    if (value)
        resolve(value);
    else
        reject(value);
});
var second_promise = new Promise(function (resolve, reject) {
    var x = Math.floor(Math.random() * 10);
    var y = Math.floor(Math.random() * 10);
    console.log('Second Promise values = ', x, y);
    var value = x + y;
    if (value)
        resolve(value);
    else
        reject(value);
});
var allPromise = Promise.all([first_promise, second_promise]);
allPromise.then(function (success) { return console.log('Sum: ', success); })["catch"](function (error) { return console.log('Error: ', error); });
//2
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
var circle = {
    firstName: "radius",
    lastName: "diameter",
    print: function () { return circle.firstName + " " + circle.lastName; }
};
var employee = {
    firstName: "Vishal",
    lastName: "Parandwal",
    print: function () { return employee.firstName + " " + employee.lastName; }
};
function printAll(circle, employee) {
    console.log(circle.print());
    console.log(employee.print());
}
printAll(circle, employee);
