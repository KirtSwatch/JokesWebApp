using System.CodeDom;

namespace JokesWebApp.Models
{
    public class Joke
    {
        public int Id { get; set; }
        public string Jokequestion { get; set; }
        public string Jokeanswer { get; set; }

        public Joke()
        {
                
        }
    }
}
