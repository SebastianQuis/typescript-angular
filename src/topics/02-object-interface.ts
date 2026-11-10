


interface User {
    id: number,
    name: string,
    phoneNumber: string,
    powers: string[],
    country?: string,
}

const powers = ['Super fuerza', 'Volar'];

const firstUser: User = {
    id: 1,
    name: 'Sebastián',
    phoneNumber: '1234567890',
    powers: powers,
    country: 'Argentina',
}

firstUser.country = 'Chile';

console.log(firstUser);
console.table(firstUser);

export { };

