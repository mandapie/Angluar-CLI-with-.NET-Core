using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularDotNetCore.Models;
using Microsoft.AspNetCore.Mvc;

namespace AngularDotNetCore.Controllers
{
    [Route("api/[controller]")]
    public class MoviesController : Controller
    {

        [HttpGet("[action]")]
        public List<Movie> GetMovies()
        {
            List<Movie> movies = new List<Movie>
            {
                new Movie()
                {
                    Id = 1,
                    Title = "Titanic",
                    Star = "DiCaprio",
                    ReleaseDate = Convert.ToDateTime("11/12/2018"),
                    Price = 16,
                    Rating = 4.2,
                    ImageUrl = "https://images.unsplash.com/photo-1500077423678-25eead48513a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8589a7586b5d6489f8c0d461863eeb29&auto=format&fit=crop&w=1050&q=80"
                },
                new Movie()
                {
                    Id = 2,
                    Title = "Toy Story",
                    Star = "Toys",
                    ReleaseDate = Convert.ToDateTime("12/12/2018"),
                    Price = 15,
                    Rating = 4.5,
                    ImageUrl = "https://images.unsplash.com/photo-1531214159280-079b95d26139?ixlib=rb-0.3.5&s=1f154cfefa736a5900f5e4dc10ca264c&auto=format&fit=crop&w=1950&q=80"
                }
            };

            return movies;
        }
    }
}