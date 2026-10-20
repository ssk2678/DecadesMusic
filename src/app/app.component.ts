
import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, ViewChild,ViewContainerRef,ComponentFactoryResolver,ComponentRef,ComponentFactory  } from '@angular/core';
import { Router } from '@angular/router';
import { YoutubeVideo } from 'src/models/youTubeVideo.model';
import { Observable } from 'rxjs';
import { Artist } from '../models/artist.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'DecadesMusic';  
  
  DecadeId: string;
  router: Router;
  videosFromTuneSelectionToVideoResults : YoutubeVideo;
  visible: boolean = true;
  aboutVisible: boolean = false;
  suggestASongVisible: boolean = false;
  musicLoadingIconVisible: boolean;
  artistsObservable: Observable<Artist[]>;
  

  constructor(private r: Router)
  {
    this.router = r;
  }

  ngOnInit() {
    this.router.navigate(['']);   
   
  }

  ngOnChanges(changes: SimpleChanges){
   
  }

  FwdVideosFromTuneSelectionToVideoResults($event) {
    this.videosFromTuneSelectionToVideoResults = $event;
    
  } 

  FwdArtistsObservableFromTuneSelectionToHeader($event){
    this.artistsObservable = $event;
    
  }


  DecadeLinkHandler(decadeId: string)
  {    
    this.DecadeId = decadeId;        
  } 
 


  public btnAboutClick(msg: string){
        
    this.router.navigateByUrl(msg).then(e => {
      if (e) {        
        if (msg != "suggestsong"){
          console.log("Navigation is successful!");
          this.visible = false;
          this.suggestASongVisible = false;
          this.aboutVisible = true;
         
        }        
      } 
      else {
        console.log("Navigation has failed!");
      }
    });

  }

  public btnSuggestASongClick(msg: string){
      
    this.router.navigateByUrl(msg).then(e => {
      if (e) {
        if (msg != "about"){
        console.log("Navigation is successful!");
        this.visible = false;
        this.suggestASongVisible = true;
        this.aboutVisible = false;
        }
       }       
      else {
        console.log("Navigation has failed!");
      }
    });
  }

  

  public btnGetSongVideosClick(){
    
    this.router.navigateByUrl('/').then(e => {
      if (e) {        
        console.log("Navigation is successful!");
        this.visible = true;       
        this.router.navigateByUrl('');        
      } 
      else {
        console.log("Navigation has failed!");
      }
    });
  }

}
