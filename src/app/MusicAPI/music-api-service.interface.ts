import { Artist } from './../../models/artist.model';
import { Song } from './../../models/song.model';
import { SongSuggestion } from './../../models/songsuggestion.model'
import { Observable, of } from 'rxjs';


export interface IMusicAPIService {
    GetArtistsByDecade(decadeID: number) : Observable<Artist[]>;
    GetSongsByArtistAndDecade(artistID: number, decadeID: number) : Observable<Song[]>;
    InsertSongSuggestion(songSuggestion : SongSuggestion ) : void;
}