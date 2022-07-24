// Como podemos rodar isso em um arquivo .ts sem causar erros? 

/** 
    let employee = {};
    employee.code = 10;
    employee.name = "John";
*/

interface Employee {
    code: number,
    name: string
};

const employee1: Employee = {
    code: 200,
    name: "Jhon"
}

const employee2: {code: number, name: string} = {
    code: 35,
    name: 'Patricia'
}

console.log(`Codigo do funcionario: ${employee1.code}`)
console.log(`Nome do funcionario ${employee1.name}`)

console.log(`Codigo do funcionario: ${employee2.code}`)
console.log(`Nome do funcionario ${employee2.name}`)
