import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit { 

  @Output() btnAboutClick = new EventEmitter();
  @Output() btnSuggestASongClick  = new EventEmitter();
  @Output() btnGetSongVideosClick = new EventEmitter();

  constructor() { 

  }

  ngOnInit(): void {
  }  

  public btnAboutClickCallParent(msg: string){
      
    this.btnAboutClick.emit(msg);

  }

  public btnSuggestASongClickCallParent(msg: string){
      
    this.btnSuggestASongClick.emit(msg);

  }

  public btnGetSongVideosClickCallParent (){

    this.btnGetSongVideosClick.emit();

  }

}
