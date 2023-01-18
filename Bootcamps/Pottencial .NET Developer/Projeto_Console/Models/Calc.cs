using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projeto_Calc.Models
{
    public class Calc{
        public int n { get; set; }

        // int n = int.Parse(Console.ReadLine());
        int p = 1, s = 0;

        public void Introduces(){
            while (n > 0){
                int l = n % 10;
    // TODO: Crie as outras condições necessárias para a resolução do desafio:
                p *= l;
                s += l;
                n /= 10;
            }

            Console.WriteLine($"Hello, The result is: {p-s}");
        }
    }
};

