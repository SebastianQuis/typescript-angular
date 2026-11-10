


function addNumbers() {
    console.log("funcion addNumbers");
}

const functionFlecha = (): string => {
    // console.log("funcion flecha");
    return "funcion flecha";
}


interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const addHp = (character: Character, amount: number) => {
    character.hp += amount;
    character.showHp();
}


addHp(
    { name: 'sebas', hp: 100, showHp: () => console.log("ejecutando showHp") },
    20
)




// console.log("addNumbers", addNumbers());
// console.log("functionFlecha", functionFlecha());

// (() => {
//     console.log("Autoinvocado!!!")
// })()