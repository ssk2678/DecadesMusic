import { Component, OnInit } from '@angular/core';
import { MusicAPIService } from './../MusicAPI/music-api.service';
import { SongSuggestion } from 'src/models/songsuggestion.model';
import { Song } from 'src/models/song.model';

@Component({
  selector: 'suggestsong',
  templateUrl: './suggestsong.component.html',
  styleUrls: ['./suggestsong.component.css']
})
export class SuggestsongComponent implements OnInit {

  suggestedArtist;
  suggestedSong;
  suggestedDecadeSelect;

  constructor(private musicAPIService: MusicAPIService) { }

  ngOnInit(): void {
  }

  InsertSongSuggestion(): void {

    var songSuggestion: SongSuggestion = new SongSuggestion(this.suggestedArtist, this.suggestedSong, this.suggestedDecadeSelect);    

    this.musicAPIService.InsertSongSuggestion(songSuggestion);    

  }

}
