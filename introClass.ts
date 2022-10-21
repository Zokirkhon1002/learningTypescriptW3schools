/*
TypeScript Classes
TypeScript adds types and visibility modifiers 
to JavaScript classes.

Members: Types
The members of a class (properties & methods) are typed 
using type annotations, similar to variables.
*/

// class Person1{
//     name1!: string;
// } // in order to get rid off the red underline of name1
class Person1 {
    name1: string | undefined;
}

const person1 = new Person1();
person1.name1 = "Zokirkhon1";
console.log(person1)


/*
Members: Visibility
Class members also be given special modifiers which affect visibility.

There are three main visibility modifiers in TypeScript.

public - (default) allows access to the class member from anywhere
private - only allows access to the class member from within the class
protected - allows access to the class member from itself and any classes 
that inherit it, which is covered in the inheritance section below
*/

class Person2 {
    private name1: string;

    public constructor(name1: string) {
        this.name1 = name1;
    }
    public getName(): string {
        return this.name1;
    }
}

const person2 = new Person2("Zokirkhon2");

console.log(person2)
console.log(person2.getName());

/*
Parametr Properties
TypeScript provides a convenient way to define members in the constructor,
by adding a visibility modifiers to the parameter.
*/

class Person3 {
    // name is a private member variable;
    public constructor(private name3: string) { }

    public getName(): string {
        return this.name3;
    }
}

const person3 = new Person3("Zokirkhon3")

console.log(person3)
console.log(person3.getName());


/*
Readonly
Similar to arrays, the readonly keyword can prevent class members 
from being changed;
*/

class Person4 {
    private readonly name4: string;

    public constructor(name4: string) {
        /*
        // name cannot be changed after this initial definition, 
        which has to be either at it's declaration or in the 
        constructor.
        */
        this.name4 = name4;
    }

    public getName(): string {
        return this.name4;
    }
}

const person4 = new Person4("Zokirkhon4");
console.log(person4);
console.log(person4.getName());



/*
Inheritance: Implements
Interfaces can be used to define the type a class must follow 
through the implements keyword.
*/
interface Shape1 {
    readonly getArea: () => number;
}

class Rectangle1 implements Shape1 {
    public constructor(protected readonly width: number, protected readonly height: number) { };

    public getArea(): number {
        return this.width * this.height;
    }
}

const myRect1 = new Rectangle1(10, 20);
console.log(myRect1);
console.log(myRect1.getArea());

/*
A class can implement multiple interfaces by listing each one 
after implements, separated by a comma like so: class 
Rectangle implements Shape, Colored {
*/


/*
Inheritance: Extends
Classes can extend each other through the extends keyword. 
A class can only extends one other class.
*/

interface Shape2 {
    getArea: () => number;
}

class Rectangle2 implements Shape2 {
    public constructor(protected readonly width: number, protected readonly height: number) { };

    public getArea(): number {
        return this.width * this.height;
    }
}

class Square2 extends Rectangle2 {
    public constructor(width: number) {
        super(width, width);
    }
    // getArea gets inherited from Rectangle
}

const mySq2 = new Square2(20);
console.log(mySq2);
console.log(mySq2.getArea());


/*
Override
When a class extends another class, it can replace the members of the parent class with the same name.
Newer versions of TypeScript allow explicity marking this with override keyword.
*/


interface Shape3 {
    getArea: () => number;
}

class Rectangle3 implements Shape3 {
    // using protected for these members allows access from classes
    // that extend from this class, such as Square
    public constructor(protected readonly width: number, protected readonly height: number) { };

    public getArea(): number {
        return this.width * this.height;
    }

    public toString(): string {
        return `Rectangle[width=${this.width}, height=${this.height}]`;
    }
}

class Square3 extends Rectangle3 {
    public constructor(width: number) {
        super(width, width);
    }

    // this toString replaces the toString from Rectangle3
    public override toString(): string {
        return `Square[width=${this.width}]`;
    }
}

const mySq3 = new Square3(15);

console.log(mySq3.toString());

const rect3 = new Rectangle3(20, 10);
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


abstract class Polygon4 {
    public abstract getArea(): number;

    public toString(): string {
        return `Polygon[area=${this.getArea()}]`;
    }
}

class Rectangle4 extends Polygon4 {
    public constructor(protected readonly width: number, protected readonly height: number){
        super();
    };

    public getArea(): number {
        return this.width * this.height;
    }
}

const myRect4 = new Rectangle4(10,10);

console.log(myRect4.toString());
console.log(myRect4.getArea());


/*
Abstract classes cannot be directly instantiated, 
as they do not have all their members implemented.
*/

