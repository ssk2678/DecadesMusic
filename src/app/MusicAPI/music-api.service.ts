import { Artist } from './../../models/artist.model';
import { Song } from './../../models/song.model';
import { Injectable } from '@angular/core';
import { IMusicAPIService } from './music-api-service.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import * as DecadesMusicConstants from "../decadesMusic.Constants";
import { SongSuggestion } from 'src/models/songsuggestion.model';


@Injectable({
  providedIn: 'root'
})
export class MusicAPIService implements IMusicAPIService{
  
  private musicAPIURL: string = DecadesMusicConstants.MusicAPIURL;
  

  constructor(private http: HttpClient) { }

  ngOnInit(): void{

  }

  GetArtistsByDecade(decadeID: number) : Observable<Artist[]> {
    const artistByDecadeURL = `${this.musicAPIURL}/GetArtistsByDecade/${decadeID}`;
    return this.http.get<Artist[]>(artistByDecadeURL);//.pipe(
     
    
  }

  GetSongsByArtistAndDecade(artistID: number, decadeID: number) : Observable<Song[]> {
    const songsByArtistURL = `${this.musicAPIURL}/GetSongsByArtistAndDecade/${artistID}?decadeId=${decadeID}`;
    return this.http.get<Song[]>(songsByArtistURL);//.pipe
   
  }

  InsertSongSuggestion(songSuggestion: SongSuggestion): void {
    const insertSongSuggestionURL = `${this.musicAPIURL}/AddSongSuggestion`;
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    this.http.post(insertSongSuggestionURL, JSON.stringify(songSuggestion), httpOptions).subscribe(data => console.log("Succeeded, result = " + data), (err)=> console.error("Failed! " + err));
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }
}
