import { MusicAPIService } from './../MusicAPI/music-api.service';
import { YouTubeSearchAPIService } from './../YouTubeSearchAPI/you-tube-search-api.service'
import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, ViewChild } from '@angular/core';
import { Artist } from './../../models/artist.model';
import { Song } from './../../models/song.model';
import { YoutubeVideo} from '../../models/youTubeVideo.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'tune-selection',
  templateUrl: './tune-selection.component.html',
  styleUrls: ['./tune-selection.component.css']
})
export class TuneSelectionComponent implements OnInit {

  errorMessage: string;  
  public Artists: Artist[];
  public Songs: Song[];
  public Videos: YoutubeVideo;
  @Input() decadeValue = "";
  @Output() msgToVideoResults = new EventEmitter<any>();
  artistsObservable: Observable<Artist[]>;
  @Output() msgToHeaderArtistLoadCompletion = new EventEmitter<any>();

  selectedArtist;
  selectedSong;
  selectedResultQuantity;
  
  
  constructor(private musicAPIService: MusicAPIService, private youTubeAPIService: YouTubeSearchAPIService) { }

  ngOnInit(): void {
    

  }

  ngOnChanges(changes: SimpleChanges){
    
      const chng = changes['decadeValue'];
      const cur = chng.currentValue;
    
      if (cur != undefined)
      {
        this.GetArtistsByDecade(+cur);       
      }
      
    
  }

  GetArtistsByDecade(decadeId: number) {     
       

    this.artistsObservable = this.musicAPIService.GetArtistsByDecade(decadeId);
    
    const someValue = this.artistsObservable.subscribe(res => {this.Artists = res;});
    this.ArtistLoadCompletionMessageToHeaderComponent();
        
  }

  GetSongsByArtistAndDecade()  {
    
    this.musicAPIService.GetSongsByArtistAndDecade(this.selectedArtist.artistID, +this.decadeValue).subscribe(res => this.Songs = res, error => this.errorMessage = <any>error);
    
  }

  SearchYoutubeVideos(){
    this.youTubeAPIService.GetYoutubeVideos(this.selectedArtist.artistName + " " + this.selectedSong.songName, +this.selectedResultQuantity)
                          .subscribe(res => { 
                                              this.Videos = res;
                                              this.MessageToVideoResultsComponent();
                                            }, 
                                     error => this.errorMessage = <any>error);
                                     
    

  }

  MessageToVideoResultsComponent()
  {
    this.msgToVideoResults.emit(this.Videos) 
  }

  ArtistLoadCompletionMessageToHeaderComponent()
  {
    this.msgToHeaderArtistLoadCompletion.emit(this.artistsObservable);
  }

}
