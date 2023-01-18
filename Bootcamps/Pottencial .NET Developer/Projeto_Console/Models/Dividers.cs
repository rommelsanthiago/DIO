using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projeto_Dividers.Models
{
    public class Dividers{
        public int n { get; set; }

        int count = 0;
        bool result;
        public void Introduces(){
            for (int i = 1; i <= n; i++) {
                // TODO: Crie as outras condições necessárias para a resolução do desafio:
                if (n % i == 0) {
                    count++;
                }
                if (count == 3) {
                    result = true;
                }
            }
            Console.WriteLine(result);
        }
    }
};
