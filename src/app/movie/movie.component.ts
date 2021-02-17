import { Component } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  movies = [
    {
      name: 'spider man',
      director: 'marvel',
      writer: 'marvel',
      actors: 'marvel',
      img: '../assets/images/1.jpg'
    }, {
      name: 'spider man2',
      director: 'marvel',
      writer: 'marvel',
      actors: 'marvel',
      img: '../assets/images/4.jpg'
    }, {
      name: 'spider man3',
      director: 'marvel',
      writer: 'marvel',
      actors: 'marvel',
      img: '../assets/images/3.jpg'
    }, {
      name: 'spider man4',
      director: 'marvel',
      writer: 'marvel',
      actors: 'marvel',
      img: '../assets/images/5.jpg'
    }
  ];
  indexOfMovie = 0;
  data = this.movies[0];
  updateForm = false;
  addForm = false;

  public show(movie) {
    this.data = movie;
    this.updateForm = this.addForm = false;
  }

  public deleteMovie() {
    console.log(this.movies)
    this.movies = this.movies.filter(movie => movie !== this.data);
    this.data = this.movies[0];
    this.indexOfMovie = 0;
  }

  public UpdateMovie(name, director, actors, writer) {
    this.movies[this.indexOfMovie] = {
      name, director, actors, writer,
      img: this.movies[Math.floor(Math.random() * 3)].img
    }
    this.data = this.movies[this.indexOfMovie];
    this.updateForm = false;
  }

  public addMovie(name, director, actors, writer) {
    const movie = {
      name, director, actors, writer,
      img: this.movies[Math.floor(Math.random() * 3)].img
    };
    this.movies.push(movie);
    this.addForm = false;
  }

  constructor(private movieData: MovieService) {
    movieData.getMovie().subscribe(MovieData => {
      this.DataOfMovie = MovieData;
    });
  }

  DataOfMovie;
  // ngOnInit(): void {
  //   this.movieData.getMovie().subscribe(respons =>{
  //     this.DataOfMovie = respons;
  //     console.log(respons);
  //   });
  // }
}
