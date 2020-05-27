import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];

   constructor() { }

   ngOnInit() {
   }

   addMovie(newMovie: string) {
      let message = '';
      if (newMovie.length === 0) {
         message = "You must enter a movie title"
      } else if (this.movies.includes(newMovie)) {
         message = `${newMovie} is already on your movie list.`
      } else {
         this.movies.push(newMovie);
      }
      return message;
   }
}
