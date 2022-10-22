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

function createPair1<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];
}

let res1 = createPair1<string, number>('hello', 42);
console.log(res1)

/*
TypeScript can also infer the type of the generic parameter from the
function parameters.
*/



/*
Classes
Generics can be used to create generalized classess, like MAP.
*/
class NamedValue1<T2>{
    private _value: T2 | undefined;
    constructor(private name: string) { };

    public setValue(value: T2) {
        this._value = value;
    }

    public getValue(): T2 | undefined {
        return this._value;
    }

    public toString(): string {
        return `${this.name}: ${this._value}`;
    }
}

const user1 = new NamedValue1<number>("myAge");

user1.setValue(23);

console.log(user1.getValue());
console.log(user1.toString());
console.log(user1);

/*
TypeScript can also infer the type of the generic parameter 
if it's used in a constructor parameter.
*/


/*
Type Alias
Generics in type alias allow creating types that are more reusable.
*/

type Wrapped1<T3> = { value: T3 };

const wrappedValue1: Wrapped1<number> = { value: 23 };
console.log(wrappedValue1)

/*
This also works with interfaces with the following syntax: 
interface Wrapped<T> {}
*/


/*
Default Value
Generics can be assigned default values which apply if no other
value is specified or inferred.
*/

class NamedValue2<T = string>{
    private _value: T | undefined;
    constructor(private name: string) { };

    public setValue(value: T) {
        this._value = value;
    }

    public getValue(): T | undefined {
        return this._value;
    }

    public toString(): string {
        return `${this.name}: ${this._value}`
    }
}


const user2 = new NamedValue1<number>("myAge");

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

function createLoggedPair1<S extends string | number, T extends string | number>(v1: S, v2: T): [S, T] {
    console.log(`creating pair: v1='${v1}', v2='${v2}'`);
    return [v1, v2];
}

createLoggedPair1("Salom","Hello");