using Projeto_Console.Models;
using Projeto_Calc.Models;
using Projeto_CalcCorrespondence.Models;
using Projeto_Dividers.Models;

// Retorna uma frase com o nome e a idade da pessoa
Person person1 = new Person();

person1.Name = "Rommel";
person1.Age = 35;

person1.Introduces();


// Faz os calculos de um determinado numero e retorna a diferença entre sua potencia e a soma
Calc calc = new Calc();

calc.n = 44;
calc.Introduces();

calc.n = 4421;
calc.Introduces();


//
CalcCorrespondence calcCor = new CalcCorrespondence();

calcCor.qt = "56234523485723854755454545478690 78690";
calcCor.Introduces();

calcCor.qt = "5434554 543";
calcCor.Introduces();

calcCor.qt = "1243 1243";
calcCor.Introduces();

calcCor.qt = "54 64545454545454545454545454545454554";
calcCor.Introduces();

Dividers dividers = new Dividers();

dividers.n = 2;
dividers.Introduces();

dividers.n = 4;
dividers.Introduces();