import { IYouTubeSearchAPIService } from './you-tube-search-api-service.interface';
import { YoutubeVideo } from '../../models/youTubeVideo.model';
import { Injectable } from '@angular/core';
import * as DecadesMusicConstants from "../decadesMusic.Constants";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YouTubeSearchAPIService implements IYouTubeSearchAPIService {

  private YouTubeAPIKey: string = DecadesMusicConstants.YouTubeAPIKey;  
  private YouTubeAPIURL: string = DecadesMusicConstants.YouTubeSearchAPIURL;
  
  constructor(private http: HttpClient) { }

  GetYoutubeVideos(videoQuery: string, maxResults: number) : Observable<YoutubeVideo>{

    const youTubeSearchFullURL: string = `${this.YouTubeAPIURL}?q=${videoQuery}&key=${this.YouTubeAPIKey}&part=snippet&type=video&maxResults=${maxResults}`;
    
    return this.http.get<YoutubeVideo>(youTubeSearchFullURL);

  }
}
