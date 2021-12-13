import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SelectMultipleControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  movie: any;
 
  constructor(private searchService: SearchService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.movie = this.searchService.getMovie(id).subscribe(data => ( this.movie.id =id, 
      this.movie.Poster = data.Poster,
      this.movie.Director = data.Director,
      this. movie.Title = data.Title,
      this.movie.Year = data.Year,
      this.movie.Rated = data.Rated,
      this.movie.Plot = data.Plot,
      this.movie.Writer = data.Writer,
      this.movie.Actors = data.Actors,
      this.movie.Genre = data.Genre
      )
      );

      console.log(this.movie);
  }
}
