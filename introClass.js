/*
TypeScript Classes
TypeScript adds types and visibility modifiers
to JavaScript classes.

Members: Types
The members of a class (properties & methods) are typed
using type annotations, similar to variables.
*/
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
// class Person1{
//     name1!: string;
// } // in order to get rid off the red underline of name1
var Person1 = /** @class */ (function () {
    function Person1() {
    }
    return Person1;
}());
var person1 = new Person1();
person1.name1 = "Zokirkhon1";
console.log(person1);
/*
Members: Visibility
Class members also be given special modifiers which affect visibility.

There are three main visibility modifiers in TypeScript.

public - (default) allows access to the class member from anywhere
private - only allows access to the class member from within the class
protected - allows access to the class member from itself and any classes
that inherit it, which is covered in the inheritance section below
*/
var Person2 = /** @class */ (function () {
    function Person2(name1) {
        this.name1 = name1;
    }
    Person2.prototype.getName = function () {
        return this.name1;
    };
    return Person2;
}());
var person2 = new Person2("Zokirkhon2");
console.log(person2);
console.log(person2.getName());
/*
Parametr Properties
TypeScript provides a convenient way to define members in the constructor,
by adding a visibility modifiers to the parameter.
*/
var Person3 = /** @class */ (function () {
    // name is a private member variable;
    function Person3(name3) {
        this.name3 = name3;
    }
    Person3.prototype.getName = function () {
        return this.name3;
    };
    return Person3;
}());
var person3 = new Person3("Zokirkhon3");
console.log(person3);
console.log(person3.getName());
/*
Readonly
Similar to arrays, the readonly keyword can prevent class members
from being changed;
*/
var Person4 = /** @class */ (function () {
    function Person4(name4) {
        /*
        // name cannot be changed after this initial definition,
        which has to be either at it's declaration or in the
        constructor.
        */
        this.name4 = name4;
    }
    Person4.prototype.getName = function () {
        return this.name4;
    };
    return Person4;
}());
var person4 = new Person4("Zokirkhon4");
console.log(person4);
console.log(person4.getName());
var Rectangle1 = /** @class */ (function () {
    function Rectangle1(width, height) {
        this.width = width;
        this.height = height;
    }
    ;
    Rectangle1.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle1;
}());
var myRect1 = new Rectangle1(10, 20);
console.log(myRect1);
console.log(myRect1.getArea());
var Rectangle2 = /** @class */ (function () {
    function Rectangle2(width, height) {
        this.width = width;
        this.height = height;
    }
    ;
    Rectangle2.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle2;
}());
var Square2 = /** @class */ (function (_super) {
    __extends(Square2, _super);
    function Square2(width) {
        return _super.call(this, width, width) || this;
    }
    return Square2;
}(Rectangle2));
var mySq2 = new Square2(20);
console.log(mySq2);
console.log(mySq2.getArea());
var Rectangle3 = /** @class */ (function () {
    // using protected for these members allows access from classes
    // that extend from this class, such as Square
    function Rectangle3(width, height) {
        this.width = width;
        this.height = height;
    }
    ;
    Rectangle3.prototype.getArea = function () {
        return this.width * this.height;
    };
    Rectangle3.prototype.toString = function () {
        return "Rectangle[width=".concat(this.width, ", height=").concat(this.height, "]");
    };
    return Rectangle3;
}());
var Square3 = /** @class */ (function (_super) {
    __extends(Square3, _super);
    function Square3(width) {
        return _super.call(this, width, width) || this;
    }
    // this toString replaces the toString from Rectangle3
    Square3.prototype.toString = function () {
        return "Square[width=".concat(this.width, "]");
    };
    return Square3;
}(Rectangle3));
var mySq3 = new Square3(15);
console.log(mySq3.toString());
var rect3 = new Rectangle3(20, 10);
console.log(rect3);
console.log(rect3.getArea());
console.log(rect3.toString());
/*
By default the override keyword is optional when overriding a method,
and only helps to prevent accidentally overriding a method that does not exist.
Use the setting noImplicitOverride to force it to be used when overriding.
*/
/*
Abstract classes
Classes can be written in a way that allows them to be used as a base class for other
classes without having to implement all the members. This is done by using the
abstract keyword. Members that are left unimplemented also use the abstract keyword.
*/
var Polygon4 = /** @class */ (function () {
    function Polygon4() {
    }
    Polygon4.prototype.toString = function () {
        return "Polygon[area=".concat(this.getArea(), "]");
    };
    return Polygon4;
}());
var Rectangle4 = /** @class */ (function (_super) {
    __extends(Rectangle4, _super);
    function Rectangle4(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    ;
    Rectangle4.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle4;
}(Polygon4));
var myRect4 = new Rectangle4(10, 10);
console.log(myRect4.toString());
console.log(myRect4.getArea());
/*
Abstract classes cannot be directly instantiated,
as they do not have all their members implemented.
*/
