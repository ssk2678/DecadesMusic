export class SongSuggestion{
    SuggestedSongArtist: string;
    SuggestedSongTitle: string;    
    SuggestedSongDecade: number;    
      

    constructor(suggestedArtist: string, suggestionTitle: string, suggestionDecadeId: number ) {
        
        
        this.SuggestedSongArtist = suggestedArtist || null;
        this.SuggestedSongTitle = suggestionTitle || null;
        this.SuggestedSongDecade = suggestionDecadeId || null;
        
    }
}