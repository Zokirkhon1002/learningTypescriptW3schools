// TypeScript Basic Generics
/*
Generics allow creating 'type variables' which can be used to create
classes, functions & types alias that don't need to explicity define
the types that they use.

Generics makes it easier to write reusable code.
*/
/*
Functions
Generics with functions help make more generalized methods which more
accurately represent the types used and returned.
*/
function createPair1(v1, v2) {
    return [v1, v2];
}
var res1 = createPair1('hello', 42);
console.log(res1);
/*
TypeScript can also infer the type of the generic parameter from the
function parameters.
*/
/*
Classes
Generics can be used to create generalized classess, like MAP.
*/
var NamedValue1 = /** @class */ (function () {
    function NamedValue1(name) {
        this.name = name;
    }
    ;
    NamedValue1.prototype.setValue = function (value) {
        this._value = value;
    };
    NamedValue1.prototype.getValue = function () {
        return this._value;
    };
    NamedValue1.prototype.toString = function () {
        return "".concat(this.name, ": ").concat(this._value);
    };
    return NamedValue1;
}());
var user1 = new NamedValue1("myAge");
user1.setValue(23);
console.log(user1.getValue());
console.log(user1.toString());
console.log(user1);
var wrappedValue1 = { value: 23 };
console.log(wrappedValue1);
/*
This also works with interfaces with the following syntax:
interface Wrapped<T> {}
*/
/*
Default Value
Generics can be assigned default values which apply if no other
value is specified or inferred.
*/
var NamedValue2 = /** @class */ (function () {
    function NamedValue2(name) {
        this.name = name;
    }
    ;
    NamedValue2.prototype.setValue = function (value) {
        this._value = value;
    };
    NamedValue2.prototype.getValue = function () {
        return this._value;
    };
    NamedValue2.prototype.toString = function () {
        return "".concat(this.name, ": ").concat(this._value);
    };
    return NamedValue2;
}());
var user2 = new NamedValue1("myAge");
user2.setValue(24);
console.log(user2.getValue());
console.log(user2.toString());
console.log(user2);
/*
Extends
Constraints can be added to generics to limit what's allowed.
The constraints make it possible to rely on a more specific
type when using the generic type;
*/
function createLoggedPair1(v1, v2) {
    console.log("creating pair: v1='".concat(v1, "', v2='").concat(v2, "'"));
    return [v1, v2];
}
createLoggedPair1("Salom", "Hello");
