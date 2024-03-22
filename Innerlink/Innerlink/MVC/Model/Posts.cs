using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Innerlink.MVC.Model
{
    public class Posts
    {
        uint id_Post;
        int curtida;
        string comentario;
        string data_Postagem;
        string titulo;
        List<string> conteudo = new List<string>();

    }
}
