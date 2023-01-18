using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projeto_Console.Models
{
    /// <summary>
    /// Representa uma pessoa fisica
    /// </summary>
    public class Person{
        public string? Name { get; set; }
        public int? Age { get; set; }

        public void Introduces(){
            Console.WriteLine($"Hello, my name is {Name} and I'm {Age} years old.");
        }
    };
};
