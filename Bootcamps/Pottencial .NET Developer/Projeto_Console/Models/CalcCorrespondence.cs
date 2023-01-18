using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace Projeto_CalcCorrespondence.Models
{
    public class CalcCorrespondence{

        public string? qt { get; set; }

        public void Introduces(){
            // TODO: Crie as outras condições necessárias para a resolução do desafio:
            string[] v = new string[2];
            string result = "";

            for (int i = 0; i < qt.Length; i++){

                v = qt.Split(" ");
                string a = v[0];
                string b = v[1];

                if (b.Length > a.Length)
                    result = "nao encaixa";
                else if (a.EndsWith(b))
                    result = "encaixa";
                else
                    result = "nao encaixa";

            }

            Console.WriteLine(result);
        }
    }
};
