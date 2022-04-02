type User = {
    name: string;
    age: number;
    gender: 'male' | 'female';
};
export function getPersons(): User[];

type Employee = User & { company: string };
type Person = User | Employee;
export function personToString(person: Person): string;
