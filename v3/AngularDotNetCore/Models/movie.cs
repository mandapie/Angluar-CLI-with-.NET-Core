using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularDotNetCore.Models
{
    public class Movie
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Star { get; set; }
        public DateTime ReleaseDate { get; set; }
        public double Price { get; set; }
        public double Rating { get; set; }
        public string ImageUrl { get; set; }
    }
}
