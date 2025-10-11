class Animal {
    name: string;
    private age?: number;

    constructor(name: string) {
        this.name = name;
    }

    speak(): string {
        return "Animal Speaks";
    }

    getAge(): number | null {
        return this.age || null;
    }

    updateAge(iage: number) {
        this.age = iage;
    }

    // getAge2 = () => {
    //     this
    // }
}

// Encapsulation means hidding the internal structure of a class and showing through getter or setter methods;


const animal = new Animal("Cow");
animal.updateAge(25);
console.log(animal.name);

console.log(animal.getAge()); 