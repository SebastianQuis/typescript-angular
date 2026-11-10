

export class Person {
    public name: string;
    public age: number;

    constructor(
        name: string,
        age: number,
    ) {
        this.name = name;
        this.age = age;
    }

}

// export class Hero extends Person {

//     public nameGame: string;
//     public power: string;
//     public alterEgo: string;


//     constructor(
//         nameGame: string,
//         power: string,
//         alterEgo: string,
//     ) {
//         super(nameGame, 45)
//         this.nameGame = nameGame;
//         this.power = power;
//         this.alterEgo = alterEgo;
//     }
// }


export class Hero {
    public nameGame: string;
    public power: string;
    public alterEgo: string;
    public person: Person;

    constructor(
        nameGame: string,
        power: string,
        alterEgo: string,
        person: Person,
    ) {
        this.nameGame = nameGame;
        this.power = power;
        this.alterEgo = alterEgo;
        this.person = person;
    }

}

const ironMan = new Person("Ironman", 40);
const newHero = new Hero("Sebasgrxy", "fuego", "ego", ironMan);

console.log(newHero);


